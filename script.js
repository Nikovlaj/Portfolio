let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#darkModeToggle");

const enabledarkMode = function () {
  localStorage.setItem("darkMode", "enabled");

  document.body.classList.add("dark-mode");
};

const disabledarkMode = function () {
  localStorage.setItem("darkMode", null);

  document.body.classList.remove("dark-mode");
};

if (darkMode === "enabled") {
  enabledarkMode();
}

darkModeToggle.addEventListener("click", function () {
  let darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enabledarkMode();
  } else {
    disabledarkMode();
  }
});

// Form validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myform");
  const errorDiv = document.getElementById("error");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("fname");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    errorDiv.innerHTML = "";

    if (name === "") {
      displayError("Name is required");
      return;
    }

    if (email === "") {
      displayError("Email is required");
      return;
    } else if (!isValidEmail(email)) {
      displayError("Please enter a valid email address");
      return;
    }

    form.submit();
  });

  function displayError(message) {
    const errorPara = document.createElement("p");
    errorPara.textContent = message;
    errorPara.classList.add("error-message");
    errorDiv.appendChild(errorPara);
  }

  function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9,_-]+@[^/a-zA-Z]+\.[^/a-z]$/;
    return emailPattern.test(email);
  }
});
