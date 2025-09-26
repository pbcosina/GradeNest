document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  // for testing only
  const demoAccount = {
    email: "test@example.com",
    password: "Password123!"
  };

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevents the page from reloading
    let valid = true;

    emailError.style.display = "none";
    passwordError.style.display = "none";

    // email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (email.value.trim() === "") {
      emailError.innerText = "Email is required";
      emailError.style.display = "block";
      valid = false;
    } else if (!email.value.match(emailPattern)) {
      emailError.innerText = "Please enter a valid email address";
      emailError.style.display = "block";
      valid = false;
    }

    // password validation
    if (password.value.trim() === "") {
      passwordError.innerText = "Password is required";
      passwordError.style.display = "block";
      valid = false;
    }

    if (!valid) return;

    // simulated backend check
    if (email.value !== demoAccount.email) {
      emailError.innerText = "Cannot locate account";
      emailError.style.display = "block";
      return;
    }

    if (password.value !== demoAccount.password) {
      passwordError.innerText = "Incorrect password";
      passwordError.style.display = "block";
      return;
    }

    // frontend simulation of a successful login
    alert("Login Successful!");
    form.reset();
  });
});