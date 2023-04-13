let body = document.body;
let info = document.getElementById("info");
let dark = document.getElementById("dark");
let jomblo = document.getElementById("jomblo");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let pdip = document.getElementById("pdip");
let home = document.getElementById("home");
let cuy = document.getElementById("cuy");
let lol = document.getElementById("lol");
let romantis = document.getElementById("romantis");
let imgPdip1 = document.getElementById("imgPdip1");
let imgPdip2 = document.getElementById("imgPdip2");
let imgPdip3 = document.getElementById("imgPdip3");

const darkLimit = 5;
let darkCounter = 0;
let darkRemainingLeft;
buttonJomblo.style.display = "none";
romantis.style.display = "none";
imgPdip1.style.display = "none";
imgPdip2.style.display = "none";
imgPdip3.style.display = "none";
lol.style.display = "none";
function darkMode() {
  info.style.display = "block";
  cuy.style.display = "block";
  buttonJomblo.style.display = "none";
  romantis.style.display = "none";
  imgPdip1.style.display = "none";
  imgPdip2.style.display = "none";
  imgPdip3.style.display = "none";
  lol.style.display = "none";
  if (darkRemainingLeft == 1) {
    info.textContent = "JATAH FITUR DARKMODE ANDA TELAH HABIS 😡";
    home.textContent = "RESTART";
    return (body.classList.value = "white");
  }
  darkCounter += 1;
  darkCounter % 2
    ? (dark.textContent = "LIGHT MODE")
    : (dark.textContent = "DARK MODE");

  darkRemainingLeft = darkLimit - darkCounter;

  // render ke info elemen
  info.textContent = `Darkmode dipakai : ${darkCounter}x, tersisa : ${darkRemainingLeft}x`;
  if (body.classList.value == "jomblo" || body.classList.value == "pdip") {
    if (darkCounter % 2) {
      body.classList.value = "dark";
    } else {
      body.classList.value = "white";
    }
  } else {
    body.classList.toggle("dark");
  }
}
function jombloMode() {
  cuy.style.display = "none";
  info.style.display = "none";
  romantis.style.display = "none";
  imgPdip1.style.display = "none";
  imgPdip2.style.display = "none";
  imgPdip3.style.display = "none";
  lol.style.display = "none";
  buttonJomblo.style.display = "flex";
  if (body.classList.value == "dark") {
    body.classList.toggle("dark");
  } else if (body.classList.value == "pdip") {
    body.classList.toggle("pdip");
  } else if (body.classList.value == "white") {
    body.classList.toggle("white");
  }
  body.classList.add("jomblo");
}
function introCowok() {
  romantis.textContent = `Jangan Menyerah, kejarlah mimpimu terlebih dahulu maka wanita impianmu akan mengejarmu ❤`;
  romantis.style.display = "block";
  buttonJomblo.style.display = "none";
}
function introCewek() {
  romantis.textContent = `Kamu cantik, kamu baik, teruslah berjuang dan cinta akan datang menghampirimu 🧡`;
  romantis.style.display = "block";
  buttonJomblo.style.display = "none";
}
function pdipMode() {
  cuy.style.display = "none";
  info.style.display = "none";
  romantis.style.display = "none";
  buttonJomblo.style.display = "none";
  lol.style.display = "block";
  imgPdip1.style.display = "block";
  imgPdip2.style.display = "block";
  imgPdip3.style.display = "block";
  if (body.classList.value == "dark") {
    body.classList.toggle("dark");
  } else if (body.classList.value == "jomblo") {
    body.classList.toggle("jomblo");
  } else if (body.classList.value == "white") {
    body.classList.toggle("white");
  }
  body.classList.add("pdip");
}
function reRender() {
  location.reload();
}
