var fName = document.querySelector("#fName"); // Full Name input
var email = document.querySelector("#email"); // Email input signup
var password = document.querySelector("#password"); // Password input signup
var btnCA = document.querySelector("#btnCA"); // button Create Account
var btnLoginPage = document.querySelector("#btnLoginPage"); // button show login page
var loginPage = document.querySelector("#loginPage"); // button show login page
var errorModal = new bootstrap.Modal(document.getElementById("errorModal")); // Error Modal
var errorModalEmail = new bootstrap.Modal(
  document.getElementById("errorModalEmail")
); // Error Modal
var successModalEmail = new bootstrap.Modal(
  document.getElementById("successModalEmail")
); // success Modal
var allUsers; // Array
// // // // // //

var signupPage = document.querySelector("#signupPage"); //Email input login
var logEmail = document.querySelector("#logEmail"); //Email input login
var logPassword = document.querySelector("#logpassword"); // Password input login
var btnLogin = document.querySelector("#btnLogin"); // button login
var btnSignupPage = document.querySelector("#btnSignupPage"); // button show signup page
var emailFoundModal = new bootstrap.Modal(
  document.getElementById("emailFoundModal")
);

// // // // // //
if (localStorage.getItem("users") !== null) {
  allUsers = JSON.parse(localStorage.getItem("users"));
} else {
  allUsers = [];
}

// Get Data
btnCA.addEventListener("click", function () {
  getData();
});
function getData() {
  if (regexName() && regexEmail() && regexPassword()) {
    if (CheckData() == true) {
      showModalEmail();
      return;
    }
    var user = {
      name: fName.value,
      email: email.value,
      password: password.value,
    };
    allUsers.push(user);
    localStorage.setItem("users", JSON.stringify(allUsers));
    clearForm();
    showModalsuccess();
  } else {
    showErrorModal();
  }
}

// Check Data
function CheckData() {
  for (var i = 0; i < allUsers.length; i++) {
    if (
      allUsers[i].email.trim().toLowerCase() == email.value.trim().toLowerCase()
    ) {
      return true;
    }
  }
  return false;
}

// regex Full Name
fName.addEventListener("input", regexName);
function regexName() {
  var regex = /^([a-zA-Z]+(?:\s[a-zA-Z]+)+)$/;
  var value = fName.value;

  if (regex.test(value)) {
    fName.classList.add("is-valid");
    fName.classList.remove("is-invalid");

    return true;
  } else {
    fName.classList.add("is-invalid");
    fName.classList.remove("is-valid");
    return false;
  }
}

// regex Email
email.addEventListener("input", regexEmail);
function regexEmail() {
  var regex =
    /^(?!.*\.\.)([a-zA-Z0-9._%+-]{1,64})@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  var value = email.value;

  if (regex.test(value)) {
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
    return true;
  } else {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
    return false;
  }
}

// regex Password
password.addEventListener("input", regexPassword);
function regexPassword() {
  var regex = /^.{8,}$/;
  var value = password.value;

  if (regex.test(value)) {
    password.classList.add("is-valid");
    password.classList.remove("is-invalid");

    return true;
  } else {
    password.classList.add("is-invalid");
    password.classList.remove("is-valid");
    return false;
  }
}

// Show Error Modal
function showErrorModal() {
  errorModal.show();
}
function showModalEmail() {
  errorModalEmail.show();
}
function showModalsuccess() {
  successModalEmail.show();
}
function clearForm() {
  fName.value = null;
  email.value = null;
  password.value = null;

  fName.classList.remove("is-valid");
  email.classList.remove("is-valid");
  password.classList.remove("is-valid");
}

// show login Page
btnLoginPage.addEventListener("click", showLoginPage);
function showLoginPage() {
  loginPage.classList.replace("d-block", "d-none");
  signupPage.classList.replace("d-none", "d-block");
}

// show signup Page
btnSignupPage.addEventListener("click", ShowSignupPage);
function ShowSignupPage() {
  loginPage.classList.replace("d-none", "d-block");
  signupPage.classList.replace("d-block", "d-none");
}

// // // // //

btnLogin.addEventListener("click", login);
function login() {
  var userLog = {
    emailLogin: logEmail.value,
    passwordLogin: logPassword.value,
  };

  for (var i = 0; i < allUsers.length; i++) {
    if (
      userLog.emailLogin.trim().toLowerCase() ==
        allUsers[i].email.trim().toLowerCase() &&
      userLog.passwordLogin.trim().toLowerCase() ==
        allUsers[i].password.trim().toLowerCase()
    ) {
      window.location.href = "home.html";
      localStorage.setItem("currentUser", JSON.stringify(allUsers[i].name));
      return;
    }
  }
  showFoundModal();
}

//show Email Found Modal
function showFoundModal() {
  emailFoundModal.show();
}
