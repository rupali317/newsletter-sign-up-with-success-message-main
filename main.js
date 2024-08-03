/*------------------------ Variable declarations ------------------------*/
// DOM access for the elements of the sign up form
const SignUpForm = document.querySelector(".sign-up-form");
const EmailInputElement = SignUpForm.querySelector("#email-id");
const SubscribeButton = SignUpForm.querySelector("#subscribe-js");

// DOM access for the elements of the success message component
const SuccessMessageForm = document.querySelector(".success-message");
const DisplayedEmail = SuccessMessageForm.querySelector("#email-value-js");
const DismissButton = SuccessMessageForm.querySelector("#dismiss-js");

/*--------------------------- Event Listeners ---------------------------*/
// Clicking sign up form's subscribe button
SubscribeButton.addEventListener("click", () => {
  const EmailValue = EmailInputElement.value;
  if (IsEmailValid(EmailValue)) {
    toggleVisibiltyOfSections();
    DisplayedEmail.textContent = EmailValue;
    resetEmailInput();
  } else {
    EmailInputElement.classList.add("error-input");
  }
});

// The subscribe button is triggered once ENTER key is pressed in the email input
EmailInputElement.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    SubscribeButton.click();
  }
});

// Clicking success message component's dismiss button
DismissButton.addEventListener("click", () => {
  toggleVisibiltyOfSections();
});

/*------------------------- Function definitions -------------------------*/
// Validate if the sign up form's email entered in the input is valid
function IsEmailValid(Email) {
  const EmailPattern = /[A-Za-z0-9._]+@[A-Za-z0-9]+\.[A-Za-z]{2,}/;
  return Email !== "" && EmailPattern.test(Email) ? true : false;
}

// Toggle the visibility between sign up form and success message component
function toggleVisibiltyOfSections() {
  SignUpForm.classList.toggle("hide");
  SuccessMessageForm.classList.toggle("hide");
}

// Reset the value in email input and remove its error indication
function resetEmailInput() {
  EmailInputElement.value = "";
  EmailInputElement.classList.remove("error-input");
}
