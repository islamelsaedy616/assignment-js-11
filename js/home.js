var nameUser = document.querySelector("#name");
var btnLogUot = document.querySelector("#loguot");
btnLogUot.addEventListener("click", function () {
  localStorage.removeItem("currentUser");
  window.location.href = "signup.html";
});

if (localStorage.getItem("currentUser") !== null) {
  nameUser.innerHTML = localStorage.getItem("currentUser");
} else {
  nameUser.innerHTML = "'You need to log in first'";
  setTimeout(function () {
    window.location.href = "signup.html";
  }, 3000);
}
