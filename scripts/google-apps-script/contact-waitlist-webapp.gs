/**
 * Famdesc contact + waitlist Google Apps Script backend.
 *
 * Apps Script PropertiesService keys:
 * - CONTACT_RECIPIENT_EMAIL: contact@famdesc.com
 * - TURNSTILE_SECRET_KEY: Cloudflare Turnstile secret key, optional
 * - ALLOWED_ORIGINS: comma-separated origins, e.g. https://famdesc.com,https://www.famdesc.com
 * - CONTACT_SHEET_NAME: Contact Submissions
 * - WAITLIST_SHEET_NAME: Waitlist
 */

const CONFIG = {
  contactSheetName: getProperty_("CONTACT_SHEET_NAME", "Contact Submissions"),
  waitlistSheetName: getProperty_("WAITLIST_SHEET_NAME", "Waitlist"),
  recipientEmail: getProperty_("CONTACT_RECIPIENT_EMAIL", "contact@famdesc.com"),
  turnstileSecret: getProperty_("TURNSTILE_SECRET_KEY", ""),
  allowedOrigins: getProperty_("ALLOWED_ORIGINS", "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
  minTimeToSubmitMs: 3000,
  rateLimitSeconds: 300,
  maxMessageLength: 5000,
  contactStatusOptions: ["Pending", "In progress", "Closed"],
};

function doGet() {
  return json_({
    success: true,
    service: "Famdesc contact and waitlist API",
    message: "Google Apps Script web app is running.",
  });
}

function doPost(e) {
  try {
    const data = parsePayload_(e);

    if (!isAllowedOrigin_(data.origin)) {
      return json_({
        success: false,
        message: "Verification failed. Please try again.",
      });
    }

    const validation = validatePayload_(data);
    if (!validation.ok) {
      return json_({
        success: false,
        message: "Please check the form fields and try again.",
        errors: validation.errors,
      });
    }

    if (isSpam_(data) || isRateLimited_(data)) {
      return json_({
        success: false,
        message: "Verification failed. Please try again.",
      });
    }

    if (!verifyTurnstile_(data.turnstileToken)) {
      return json_({
        success: false,
        message: "Verification failed. Please refresh the challenge and try again.",
      });
    }

    if (data.formType === "contact") {
      sendContactEmail_(data);
      saveContactSubmission_(data);

      return json_({
        success: true,
        message:
          "Thank you. Your message has been sent successfully. We will get back to you as soon as possible.",
        formType: "contact",
      });
    }

    if (data.formType === "waitlist") {
      saveWaitlistSubmission_(data);

      return json_({
        success: true,
        message:
          "Thank you for joining the Famdesc waitlist. We will keep you updated about FSA and the future social platform.",
        formType: "waitlist",
      });
    }

    return json_({
      success: false,
      message: "Invalid form type.",
    });
  } catch (error) {
    console.error(error);

    return json_({
      success: false,
      message:
        "We could not process your request right now. Please try again later.",
    });
  }
}

function parsePayload_(e) {
  const raw = e && e.postData ? e.postData.contents : "";
  const contentType = e && e.postData ? e.postData.type || "" : "";
  let data = {};

  if (contentType.indexOf("application/json") !== -1) {
    data = JSON.parse(raw || "{}");
  } else {
    raw.split("&").forEach((pair) => {
      if (!pair) return;

      const parts = pair.split("=");
      const key = decodeURIComponent((parts[0] || "").replace(/\+/g, " "));
      const value = decodeURIComponent((parts.slice(1).join("=") || "").replace(/\+/g, " "));
      data[key] = value;
    });
  }

  return normalizePayload_(data);
}

function normalizePayload_(data) {
  return {
    formType: clean_(data.formType),
    name: clean_(data.name),
    email: clean_(data.email).toLowerCase(),
    subject: clean_(data.subject),
    message: clean_(data.message),
    inquiryType: clean_(data.inquiryType),
    interest: clean_(data.interest),
    language: clean_(data.language || "en"),
    website: clean_(data.website),
    turnstileToken: clean_(data.turnstileToken),
    formStartedAt: Number(data.formStartedAt || 0),
    submittedAt: clean_(data.submittedAt || new Date().toISOString()),
    origin: clean_(data.origin),
  };
}

function validatePayload_(data) {
  const errors = {};

  if (data.formType !== "contact" && data.formType !== "waitlist") {
    errors.formType = "Invalid form type.";
  }

  if (data.name.length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!isValidEmail_(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (Date.now() - data.formStartedAt < CONFIG.minTimeToSubmitMs) {
    errors.formStartedAt = "Please wait a moment and try again.";
  }

  if (data.formType === "contact") {
    if (data.subject.length < 2) {
      errors.subject = "Please enter a subject.";
    }

    if (data.message.length < 10) {
      errors.message = "Message must be at least 10 characters.";
    }

    if (data.message.length > CONFIG.maxMessageLength) {
      errors.message = "Message is too long.";
    }
  }

  if (data.formType === "waitlist" && !data.interest) {
    errors.interest = "Please choose an interest.";
  }

  return {
    ok: Object.keys(errors).length === 0,
    errors,
  };
}

function isSpam_(data) {
  if (data.website) return true;

  const text = `${data.subject} ${data.message}`.toLowerCase();
  const links = text.match(/https?:\/\//g) || [];

  if (links.length > 2) return true;

  const blockedTerms = ["casino", "crypto recovery", "viagra", "loan offer"];

  return blockedTerms.some((term) => text.indexOf(term) !== -1);
}

function isRateLimited_(data) {
  const cache = CacheService.getScriptCache();
  const key = `submission:${data.formType}:${data.email}`;

  if (cache.get(key)) return true;

  cache.put(key, "1", CONFIG.rateLimitSeconds);
  return false;
}

function verifyTurnstile_(token) {
  if (!CONFIG.turnstileSecret) return true;
  if (!token) return false;

  const response = UrlFetchApp.fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "post",
      payload: {
        secret: CONFIG.turnstileSecret,
        response: token,
      },
      muteHttpExceptions: true,
    },
  );
  const result = JSON.parse(response.getContentText() || "{}");

  return Boolean(result.success);
}

function sendContactEmail_(data) {
  const subject = `[Famdesc Contact] ${data.subject}`;
  const body = [
    "A new contact message was submitted from famdesc.com.",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Inquiry type: ${data.inquiryType || "General"}`,
    `Language: ${data.language}`,
    `Submitted at: ${data.submittedAt}`,
    `Origin: ${data.origin || "Unknown"}`,
    `Initial status: Pending`,
    "",
    "Message:",
    data.message,
  ].join("\n");

  GmailApp.sendEmail(CONFIG.recipientEmail, subject, body, {
    replyTo: data.email,
    name: "Famdesc Website",
  });
}

function saveContactSubmission_(data) {
  const sheet = getSheet_(CONFIG.contactSheetName);
  const headers = [
    "Timestamp",
    "Name",
    "Email",
    "Subject",
    "Inquiry Type",
    "Message",
    "Language",
    "Status",
  ];

  ensureHeaders_(sheet, headers);
  applyContactStatusValidation_(sheet);
  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.subject,
    data.inquiryType || "General",
    data.message,
    data.language,
    "Pending",
  ]);
}

function saveWaitlistSubmission_(data) {
  const sheet = getSheet_(CONFIG.waitlistSheetName);

  ensureHeaders_(sheet, [
    "Timestamp",
    "Name",
    "Email",
    "Interest",
    "Language",
  ]);
  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.interest,
    data.language,
  ]);
}

function getSheet_(name) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  return spreadsheet.getSheetByName(name) || spreadsheet.insertSheet(name);
}

function ensureHeaders_(sheet, headers) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    return;
  }

  const lastColumn = Math.max(sheet.getLastColumn(), 1);
  const existingHeaders = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];

  headers.forEach((header) => {
    if (existingHeaders.indexOf(header) === -1) {
      sheet.getRange(1, sheet.getLastColumn() + 1).setValue(header);
    }
  });
}

function applyContactStatusValidation_(sheet) {
  const lastColumn = Math.max(sheet.getLastColumn(), 1);
  const headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
  const statusColumn = headers.indexOf("Status") + 1;

  if (!statusColumn) return;

  const rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(CONFIG.contactStatusOptions, true)
    .setAllowInvalid(false)
    .build();

  sheet
    .getRange(2, statusColumn, Math.max(sheet.getMaxRows() - 1, 1), 1)
    .setDataValidation(rule);
}

function isAllowedOrigin_(origin) {
  if (!CONFIG.allowedOrigins.length) return true;
  if (!origin) return false;

  return CONFIG.allowedOrigins.indexOf(origin) !== -1;
}

function isValidEmail_(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clean_(value) {
  return String(value || "").trim();
}

function getProperty_(key, fallback) {
  return PropertiesService.getScriptProperties().getProperty(key) || fallback;
}

function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
