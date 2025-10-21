// Select the form and input elements
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");
const successMessage = document.getElementById("success");

// Select error message elements
const nameError = document.getElementById("error-name");
const emailError = document.getElementById("error-email");
const subjectError = document.getElementById("error-subject");
const messageError = document.getElementById("error-message");

// Function to show error
function showError(element, message) {
  element.textContent = message;
  element.style.color = "red";
}

// Function to clear error
function clearError(element) {
  element.textContent = "";
}

// Email validation function
function isValidEmail(email) {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // Full name validation
  if (nameInput.value.trim() === "") {
    showError(nameError, "Full name is required.");
    isValid = false;
  } else {
    clearError(nameError);
  }

  // Email validation
  if (emailInput.value.trim() === "") {
    showError(emailError, "Email is required.");
    isValid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    showError(emailError, "Please enter a valid email address.");
    isValid = false;
  } else {
    clearError(emailError);
  }

  // Subject validation
  if (subjectInput.value.trim() === "") {
    showError(subjectError, "Subject is required.");
    isValid = false;
  } else {
    clearError(subjectError);
  }

  // Message validation
  if (messageInput.value.trim() === "") {
    showError(messageError, "Message is required.");
    isValid = false;
  } else if (messageInput.value.trim().length < 10) {
    showError(messageError, "Message must be at least 10 characters long.");
    isValid = false;
  } else {
    clearError(messageError);
  }

  // Success
  if (isValid) {
    // Hide all errors
    clearError(nameError);
    clearError(emailError);
    clearError(subjectError);
    clearError(messageError);

    // Show success message
    successMessage.hidden = false;

    // Reset form
    form.reset();

    // Hide success message after 4 seconds
    setTimeout(() => {
      successMessage.hidden = true;
    }, 4000);
  } else {
    // Hide success message if invalid
    successMessage.hidden = true;
  }
});
