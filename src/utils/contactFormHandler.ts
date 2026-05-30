export function handleContactFormSubmission() {
  const form = document.querySelector("#contactForm") as HTMLFormElement | null;
  const iframe = document.querySelector("iframe[name='hidden_iframe']") as HTMLIFrameElement | null;
  const formMessage = document.getElementById("formMessage") as HTMLParagraphElement | null;

  if (!form || !iframe || !formMessage) {
    console.error("Formulario, iframe o elemento de mensaje no encontrado");
    return;
  }
  // Detect language from URL
  const path = window.location.pathname;
  let lang = "en"; // By default, English

  if (path.startsWith("/es")) {
    lang = "es";
  } else if (path.startsWith("/fr")) {
    lang = "fr";
  }
  console.log(lang);
  

  // Add language field as hidden input
  const languageInput = document.createElement("input");
  languageInput.type = "hidden";
  languageInput.name = "language";
  languageInput.value = lang;
  form.appendChild(languageInput);


  let submitted = false;

  // Configures the onload event of the iframe to handle the response once it is received.
  iframe.onload = function () {
    if (submitted) {
      const responseText = iframe.contentDocument?.body?.innerText;
      if (responseText && responseText.includes("Data processed successfully")) {
        formMessage.textContent = "Formulario enviado correctamente.";
        formMessage.style.color = "green";
      } else {
        formMessage.textContent = "Hubo un error en el envío del formulario.";
        formMessage.style.color = "red";
      }
      submitted = false; // Reset the submitted variable after handling the response
    }
  };

  // Set the form submit event to initiate submission and mark submitted as true.
  form.addEventListener("submit", function () {
    submitted = true;
  });
}
