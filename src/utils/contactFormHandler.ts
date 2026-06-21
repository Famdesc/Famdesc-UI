type FormKind = "contact" | "waitlist";

type FormResponse = {
  success: boolean;
  message?: string;
  formType?: FormKind;
  errors?: Record<string, string>;
};

declare global {
  interface Window {
    turnstile?: {
      render: (
        element: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback": () => void;
          "error-callback": () => void;
        },
      ) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_TIME_TO_SUBMIT_MS = 3000;

function getNetworkErrorMessage(endpoint: string, fallbackError: string) {
  if (endpoint.includes("/dev")) {
    return "Google Apps Script is using the /dev test URL. Use the deployed /exec web app URL.";
  }

  if (window.location.hostname === "localhost") {
    return "We could not read the Google Apps Script response. Check the /exec deployment URL and Web App access.";
  }

  return fallbackError;
}

function getLanguage() {
  const path = window.location.pathname;

  if (path.startsWith("/es")) return "es";
  if (path.startsWith("/fr")) return "fr";

  return "en";
}

function getValue(form: HTMLFormElement, name: string) {
  const field = form.elements.namedItem(name);

  if (
    field instanceof HTMLInputElement ||
    field instanceof HTMLTextAreaElement ||
    field instanceof HTMLSelectElement
  ) {
    return field.value.trim();
  }

  return "";
}

function setMessage(form: HTMLFormElement, message: string, type: "error" | "success" | "idle") {
  const messageElement = form.querySelector<HTMLElement>("[data-form-message]");

  if (!messageElement) return;

  messageElement.textContent = message;
  messageElement.dataset.state = type;
  messageElement.classList.toggle("text-red-600", type === "error");
  messageElement.classList.toggle("dark:text-red-400", type === "error");
  messageElement.classList.toggle("text-emerald-600", type === "success");
  messageElement.classList.toggle("dark:text-emerald-400", type === "success");
  messageElement.classList.toggle("text-neutral-600", type === "idle");
  messageElement.classList.toggle("dark:text-neutral-400", type === "idle");
}

function validateForm(form: HTMLFormElement, turnstileEnabled: boolean) {
  const formType = form.dataset.formType as FormKind | undefined;
  const errors: Record<string, string> = {};
  const name = getValue(form, "name");
  const email = getValue(form, "email");
  const website = getValue(form, "website");
  const turnstileToken = getValue(form, "turnstileToken");

  if (website) {
    errors.website = "Verification failed. Please try again.";
  }

  if (name.length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (formType === "contact") {
    const subject = getValue(form, "subject");
    const message = getValue(form, "message");

    if (subject.length < 2) {
      errors.subject = "Please enter a subject.";
    }

    if (message.length < 10) {
      errors.message = "Message must be at least 10 characters.";
    }

    if (message.length > 5000) {
      errors.message = "Message is too long.";
    }
  }

  if (formType === "waitlist" && !getValue(form, "interest")) {
    errors.interest = "Please choose an interest.";
  }

  if (turnstileEnabled && !turnstileToken) {
    errors.turnstileToken = "Please complete the verification.";
  }

  return {
    ok: Object.keys(errors).length === 0,
    errors,
  };
}

function getTurnstileEnabled(form: HTMLFormElement) {
  return Boolean(form.querySelector("[data-turnstile-widget]"));
}

function updateSubmitState(form: HTMLFormElement) {
  const submitButton = form.querySelector<HTMLButtonElement>("[data-submit-button]");
  const validation = validateForm(form, getTurnstileEnabled(form));

  if (!submitButton || form.dataset.submitting === "true") return;

  submitButton.disabled = !validation.ok;
}

function resetTurnstile(form: HTMLFormElement) {
  const widgetId = form.dataset.turnstileWidgetId;
  const tokenInput = form.elements.namedItem("turnstileToken");

  if (tokenInput instanceof HTMLInputElement) {
    tokenInput.value = "";
  }

  if (widgetId && window.turnstile) {
    window.turnstile.reset(widgetId);
  }
}

function createPayload(form: HTMLFormElement) {
  const formData = new FormData(form);
  const payload = new URLSearchParams();

  formData.set("language", getLanguage());
  formData.set("submittedAt", new Date().toISOString());
  formData.set("origin", window.location.origin);

  formData.forEach((value, key) => {
    payload.set(key, String(value));
  });

  return payload;
}

function attachTurnstile(form: HTMLFormElement) {
  const widget = form.querySelector<HTMLElement>("[data-turnstile-widget]");

  if (!widget || !window.turnstile || form.dataset.turnstileWidgetId) return;

  const siteKey = widget.dataset.sitekey;

  if (!siteKey) return;

  const widgetId = window.turnstile.render(widget, {
    sitekey: siteKey,
    callback: (token: string) => {
      const tokenInput = form.elements.namedItem("turnstileToken");

      if (tokenInput instanceof HTMLInputElement) {
        tokenInput.value = token;
      }

      updateSubmitState(form);
    },
    "expired-callback": () => {
      resetTurnstile(form);
      updateSubmitState(form);
    },
    "error-callback": () => {
      resetTurnstile(form);
      updateSubmitState(form);
    },
  });

  form.dataset.turnstileWidgetId = widgetId;
}

function initTurnstile(forms: NodeListOf<HTMLFormElement>) {
  const hasTurnstile = Array.from(forms).some((form) =>
    Boolean(form.querySelector("[data-turnstile-widget]")),
  );

  if (!hasTurnstile) return;

  const render = () => {
    if (!window.turnstile) return;
    forms.forEach((form) => attachTurnstile(form));
  };

  render();
  window.addEventListener("load", render);
  window.setTimeout(render, 1200);
}

async function submitForm(form: HTMLFormElement, endpoint: string) {
  const submitButton = form.querySelector<HTMLButtonElement>("[data-submit-button]");
  const defaultLabel = submitButton?.dataset.defaultLabel || "Submit";
  const loadingLabel = submitButton?.dataset.loadingLabel || "Sending...";
  const successMessage =
    form.dataset.successMessage || "Thank you. Your request has been sent successfully.";
  const fallbackError =
    form.dataset.errorMessage || "We could not process your request right now.";
  const startedAt = Number(getValue(form, "formStartedAt"));
  const validation = validateForm(form, getTurnstileEnabled(form));

  if (form.dataset.submitting === "true") return;

  if (Date.now() - startedAt < MIN_TIME_TO_SUBMIT_MS) {
    setMessage(form, "Please wait a moment and try again.", "error");
    return;
  }

  if (!validation.ok) {
    setMessage(form, Object.values(validation.errors)[0] || fallbackError, "error");
    updateSubmitState(form);
    return;
  }

  if (!endpoint) {
    setMessage(form, "The form endpoint is not configured.", "error");
    return;
  }

  form.dataset.submitting = "true";
  setMessage(form, "", "idle");

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = loadingLabel;
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      body: createPayload(form),
    });
    const payload = (await response.json()) as FormResponse;

    if (!response.ok || !payload.success) {
      setMessage(form, payload.message || fallbackError, "error");
      resetTurnstile(form);
      return;
    }

    form.reset();
    const startedAtInput = form.elements.namedItem("formStartedAt");

    if (startedAtInput instanceof HTMLInputElement) {
      startedAtInput.value = String(Date.now());
    }

    resetTurnstile(form);
    setMessage(form, payload.message || successMessage, "success");
  } catch (error) {
    console.error(error);
    setMessage(form, getNetworkErrorMessage(endpoint, fallbackError), "error");
    resetTurnstile(form);
  } finally {
    form.dataset.submitting = "false";

    if (submitButton) {
      submitButton.textContent = defaultLabel;
    }

    updateSubmitState(form);
  }
}

export function handleContactFormSubmission() {
  const forms = document.querySelectorAll<HTMLFormElement>("[data-famdesc-form]");

  forms.forEach((form) => {
    const startedAtInput = form.elements.namedItem("formStartedAt");

    if (startedAtInput instanceof HTMLInputElement) {
      startedAtInput.value = String(Date.now());
    }

    form.addEventListener("input", () => updateSubmitState(form));
    form.addEventListener("change", () => updateSubmitState(form));
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      submitForm(form, form.dataset.endpoint || "");
    });

    updateSubmitState(form);
  });

  initTurnstile(forms);
}
