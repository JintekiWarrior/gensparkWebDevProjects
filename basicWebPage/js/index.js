const contactFormEl = document.querySelector("#contact-form");
const errorMessage = document.querySelector("#error-message");

const contactFormHandler = function (event) {
  event.preventDefault();

  const contactNameInput = document.querySelector(
    "input[name='contact-name']"
  ).value;
  const contactEmailInput = document.querySelector(
    "input[name='contact-email']"
  ).value;
  const contactPhoneInput = document.querySelector(
    "input[name='contact-phone']"
  ).value;
  const contactMessageInput = document.querySelector(
    "textarea[name='contact-message']"
  ).value;

  const contactDataObj = {
    name: contactNameInput,
    email: contactEmailInput,
    phone: contactPhoneInput,
    message: contactMessageInput,
  };

  console.log(contactDataObj);
};

// function to check if there is an error in creating the data
contactFormEl.addEventListener("submit", contactFormHandler);
