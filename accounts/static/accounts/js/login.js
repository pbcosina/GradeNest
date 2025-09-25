document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  form.addEventListener("submit", function (e) {
    let valid = true;

    // reset error msg
    emailError.style.display = "none";
    passwordError.style.display = "none";

    // email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
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
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password.value.trim() === "") {
      passwordError.innerText = "Password is required";
      passwordError.style.display = "block";
      valid = false;
    } else if (!password.value.match(passwordPattern)) {
      passwordError.innerText =
        "Password must be at least 8 characters, include 1 uppercase, 1 number, and 1 special character";
      passwordError.style.display = "block";
      valid = false;
    }

    if (!valid) {
      e.preventDefault();
    } else {
      alert("Login Successful! (frontend simulation)");
    }
  });
});