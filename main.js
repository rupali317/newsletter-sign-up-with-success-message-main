const SignUpForm = document.querySelector(".sign-up-form");
const EmailInputElement = SignUpForm.querySelector("#email-id");

const SuccessMessageForm = document.querySelector(".success-message");
const DisplayedEmail = SuccessMessageForm.querySelector("#email-value-js");

SignUpForm.querySelector("#subscribe-js").addEventListener("click", () => {
  const EmailValue = EmailInputElement.value;
  if (IsEmailValid(EmailValue)) {
    toggleVisibiltyOfSections();
    DisplayedEmail.textContent = EmailValue;
    resetEmailInput();
  } else {
    EmailInputElement.classList.add("error-input");
  }
});

SuccessMessageForm.querySelector("#dismiss-js").addEventListener(
  "click",
  () => {
    toggleVisibiltyOfSections();
  }
);

function IsEmailValid(Email) {
  const EmailPattern = /[A-Za-z0-9._]+@[A-Za-z0-9]+\.[A-Za-z]{2,}/;
  return Email !== "" && EmailPattern.test(Email) ? true : false;
}

function toggleVisibiltyOfSections() {
  SignUpForm.classList.toggle("hide");
  SuccessMessageForm.classList.toggle("hide");
}

function resetEmailInput() {
  EmailInputElement.value = "";
  EmailInputElement.classList.remove("error-input");
}

//RRC: Todo prevent deafult on pressing enter on the keyboard?
