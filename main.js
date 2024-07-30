const SignUpForm = document.querySelector(".sign-up-form");
const EmailInputElement = SignUpForm.querySelector("#email-id");

const SuccessMessageForm = document.querySelector(".success-message");
const DisplayedEmail = SuccessMessageForm.querySelector("#email-value-js");

SignUpForm.querySelector("#subscribe-js").addEventListener("click", () => {
  if (EmailInputElement.checkValidity()) {
    toggleVisibiltyOfSections();
    const EmailValue = EmailInputElement.value;
    DisplayedEmail.textContent = EmailValue;
  }
});

SuccessMessageForm.querySelector("#dismiss-js").addEventListener(
  "click",
  () => {
    resetEmailInput();
    toggleVisibiltyOfSections();
  }
);

function toggleVisibiltyOfSections() {
  SignUpForm.classList.toggle("hide");
  SuccessMessageForm.classList.toggle("hide");
}

function resetEmailInput() {
  EmailInputElement.value = "";
}
