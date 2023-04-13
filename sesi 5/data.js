let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");
let loginButton = document.getElementById("loginButton");
let logoutButton = document.getElementById("logoutButton");
let admin = document.getElementById("admin");
let user = document.getElementById("user");
let dev = document.getElementById("dev");
let des = document.getElementById("des");
let belum = document.getElementById("belum");
let usernameRegist = document.getElementById("usernameRegist");
let passwordRegist = document.getElementById("passwordRegist");
let passwordRegist2 = document.getElementById("passwordRegist2");
let roleRegist = document.getElementById("roleRegist");

admin.style.display = "none";
dev.style.display = "none";
des.style.display = "none";
user.style.display = "none";
logoutButton.style.display = "none";

function onLogin() {
  localStorage.setItem("username", usernameInput.value);
  logoutButton.style.display = "block";
  if (usernameInput.value == "admin" && passwordInput.value == "admin123") {
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "none";
    localStorage.setItem("role", "admin");
    admin.style.display = "block";
    user.style.display = "none";
    belum.style.display = "none";
  } else if (usernameInput.value == "dev" && passwordInput.value == "dev123") {
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "none";
    localStorage.setItem("role", "dev");
    admin.style.display = "none";
    user.style.display = "none";
    dev.style.display = "block";
    des.style.display = "none";
    belum.style.display = "none";
  } else if (usernameInput.value == "des" && passwordInput.value == "des123") {
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "none";
    localStorage.setItem("role", "des");
    admin.style.display = "none";
    user.style.display = "none";
    dev.style.display = "none";
    des.style.display = "block";
    belum.style.display = "none";
  } else {
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "none";
    localStorage.setItem("role", "user");
    admin.style.display = "none";
    user.style.display = "block";
    dev.style.display = "none";
    des.style.display = "none";
    belum.style.display = "none";
  }
}
if (localStorage.getItem("username")) {
  usernameInput.style.display = "none";
  passwordInput.style.display = "none";
  loginButton.style.display = "none";
  belum.style.display = "none";
  logoutButton.style.display = "block";
  if (localStorage.getItem("role") == "admin") {
    admin.style.display = "block";
  } else if (localStorage.getItem("role") == "dev") {
    dev.style.display = "block";
  } else if (localStorage.getItem("role") == "des") {
    des.style.display = "block";
  } else {
    user.style.display = "block";
  }
}

function onLogout() {
  localStorage.clear();
  location.reload();
}

function Regist() {
  if (usernameRegist.value != "") {
    if (roleRegist.value !== "") {
      if (passwordRegist.value == passwordRegist2.value) {
        localStorage.setItem("username", usernameRegist.value);
        localStorage.setItem("role", roleRegist.value);
        localStorage.setItem("password", passwordRegist.value);
        alert(
          "Akun berhasil dibuat dengan nama username " + usernameRegist.value
        );
        location.replace("index.html");
      } else {
        alert("Password anda tidak sama");
      }
    } else {
      alert("Role belum terisi");
    }
  } else {
    alert("Username belum terisi");
  }
}
