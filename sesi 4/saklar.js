let toggleKeluarga1 = document.getElementById("toggle-keluarga1");
let toggleKeluarga2 = document.getElementById("toggle-keluarga2");
let toggleKeluarga3 = document.getElementById("toggle-keluarga3");
let toggleKeluargaAll = document.getElementById("toggle-keluarga-all");

let toggleMakan1 = document.getElementById("toggle-makan1");
let toggleMakanAll = document.getElementById("toggle-makan-all");

let toggleTidur1 = document.getElementById("toggle-tidur1");
let toggleTidur2 = document.getElementById("toggle-tidur2");
let toggleTidurAll = document.getElementById("toggle-tidur-all");

let toggleTamu1 = document.getElementById("toggle-tamu1");
let toggleTamu2 = document.getElementById("toggle-tamu2");
let toggleTamu3 = document.getElementById("toggle-tamu3");
let toggleTamu4 = document.getElementById("toggle-tamu4");
let toggleTamuAll = document.getElementById("toggle-tamu-all");

let lampu1 = document.getElementById("lampu1");
let lampu2 = document.getElementById("lampu2");
let lampu3 = document.getElementById("lampu3");
let lampu4 = document.getElementById("lampu4");
let lampu5 = document.getElementById("lampu5");
let lampu6 = document.getElementById("lampu6");
let lampu7 = document.getElementById("lampu7");
let lampu8 = document.getElementById("lampu8");
let lampu9 = document.getElementById("lampu9");
let lampu10 = document.getElementById("lampu10");

function saklarKeluarga() {
  if (toggleKeluarga1.checked) {
    lampu1.src = "assets/images/on.gif";
  } else {
    lampu1.src = "assets/images/off.gif";
  }
  if (toggleKeluarga2.checked) {
    lampu2.src = "assets/images/on.gif";
  } else {
    lampu2.src = "assets/images/off.gif";
  }
  if (toggleKeluarga3.checked) {
    lampu3.src = "assets/images/on.gif";
  } else {
    lampu3.src = "assets/images/off.gif";
  }
  if (
    toggleKeluarga1.checked &&
    toggleKeluarga2.checked &&
    toggleKeluarga3.checked
  ) {
    toggleKeluargaAll.checked = true;
  } else if (
    !toggleKeluarga1.checked ||
    !toggleKeluarga2.checked ||
    !toggleKeluarga3.checked
  ) {
    toggleKeluargaAll.checked = false;
  }
}
function saklarKeluargaAll() {
  if (toggleKeluargaAll.checked) {
    lampu1.src = "assets/images/on.gif";
    lampu2.src = "assets/images/on.gif";
    lampu3.src = "assets/images/on.gif";
    toggleKeluarga1.checked = true;
    toggleKeluarga2.checked = true;
    toggleKeluarga3.checked = true;
  } else if (!toggleKeluargaAll.checked) {
    lampu1.src = "assets/images/off.gif";
    lampu2.src = "assets/images/off.gif";
    lampu3.src = "assets/images/off.gif";
    toggleKeluarga1.checked = false;
    toggleKeluarga2.checked = false;
    toggleKeluarga3.checked = false;
  }
}

function saklarMakan() {
  if (toggleMakan1.checked) {
    lampu4.src = "assets/images/on.gif";
  } else {
    lampu4.src = "assets/images/off.gif";
  }
  if (toggleMakan1.checked) {
    toggleMakanAll.checked = true;
  } else if (!toggleMakan1.checked) {
    toggleMakanAll.checked = false;
  }
}
function saklarMakanAll() {
  if (toggleMakanAll.checked) {
    lampu4.src = "assets/images/on.gif";
    toggleMakan1.checked = true;
  } else if (!toggleMakanAll.checked) {
    lampu4.src = "assets/images/off.gif";
    toggleMakan1.checked = false;
  }
}

function saklarTidur() {
  if (toggleTidur1.checked) {
    lampu5.src = "assets/images/on.gif";
  } else {
    lampu5.src = "assets/images/off.gif";
  }
  if (toggleTidur2.checked) {
    lampu6.src = "assets/images/on.gif";
  } else {
    lampu6.src = "assets/images/off.gif";
  }
  if (toggleTidur1.checked && toggleTidur2.checked) {
    toggleTidurAll.checked = true;
  } else if (!toggleTidur1.checked || !toggleTidur2.checked) {
    toggleTidurAll.checked = false;
  }
}
function saklarTidurAll() {
  if (toggleTidurAll.checked) {
    lampu5.src = "assets/images/on.gif";
    lampu6.src = "assets/images/on.gif";
    toggleTidur1.checked = true;
    toggleTidur2.checked = true;
  } else if (!toggleTidurAll.checked) {
    lampu5.src = "assets/images/off.gif";
    lampu6.src = "assets/images/off.gif";
    toggleTidur1.checked = false;
    toggleTidur2.checked = false;
  }
}

function saklarTamu() {
  if (toggleTamu1.checked) {
    lampu7.src = "assets/images/on.gif";
  } else {
    lampu7.src = "assets/images/off.gif";
  }
  if (toggleTamu2.checked) {
    lampu8.src = "assets/images/on.gif";
  } else {
    lampu8.src = "assets/images/off.gif";
  }
  if (toggleTamu3.checked) {
    lampu9.src = "assets/images/on.gif";
  } else {
    lampu9.src = "assets/images/off.gif";
  }
  if (toggleTamu4.checked) {
    lampu10.src = "assets/images/on.gif";
  } else {
    lampu10.src = "assets/images/off.gif";
  }
  if (
    toggleTamu1.checked &&
    toggleTamu2.checked &&
    toggleTamu3.checked &&
    toggleTamu4.checked
  ) {
    toggleTamuAll.checked = true;
  } else if (
    !toggleTamu1.checked ||
    !toggleTamu2.checked ||
    !toggleTamu3.checked ||
    !toggleTamu4.checked
  ) {
    toggleTamuAll.checked = false;
  }
}
function saklarTamuAll() {
  if (toggleTamuAll.checked) {
    lampu7.src = "assets/images/on.gif";
    lampu8.src = "assets/images/on.gif";
    lampu9.src = "assets/images/on.gif";
    lampu10.src = "assets/images/on.gif";
    toggleTamu1.checked = true;
    toggleTamu2.checked = true;
    toggleTamu3.checked = true;
    toggleTamu4.checked = true;
  } else if (!toggleTamuAll.checked) {
    lampu7.src = "assets/images/off.gif";
    lampu8.src = "assets/images/off.gif";
    lampu9.src = "assets/images/off.gif";
    lampu10.src = "assets/images/off.gif";
    toggleTamu1.checked = false;
    toggleTamu2.checked = false;
    toggleTamu3.checked = false;
    toggleTamu4.checked = false;
  }
}
