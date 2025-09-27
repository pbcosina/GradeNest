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

    // reset error states
    emailError.style.display = "none";
    passwordError.style.display = "none";
    email.classList.remove("input-error");
    password.classList.remove("input-error");

    // email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (email.value.trim() === "") {
      emailError.innerText = "Email is required";
      emailError.style.display = "block";
      email.classList.add("input-error");
      valid = false;
    } else if (!email.value.match(emailPattern)) {
      emailError.innerText = "Please enter a valid email address";
      emailError.style.display = "block";
      email.classList.add("input-error");
      valid = false;
    }

    // password validation
    if (password.value.trim() === "") {
      passwordError.innerText = "Password is required";
      passwordError.style.display = "block";
      password.classList.add("input-error");
      valid = false;
    }

    if (!valid) return;

    // simulated backend check
    if (email.value !== demoAccount.email) {
      emailError.innerText = "Cannot locate account";
      emailError.style.display = "block";
      email.classList.add("input-error");
      return;
    }

    if (password.value !== demoAccount.password) {
      passwordError.innerText = "Incorrect password";
      passwordError.style.display = "block";
      password.classList.add("input-error");
      return;
    }

    // frontend simulation of a successful login
    alert("Login Successful!");
    form.reset();
  });
});