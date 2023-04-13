const nama = "Alfian";
let usia = 17;
// console.log("nama saya adalah ", nama, "dan usia saya ", usia, "tahun");
let biodata = document.getElementById("biodata");

function genereateBiodata() {
  let generasi;
  if (usia > 10 && usia <= 17) {
    generasi = "Generasi Remaja";
  } else if (usia > 17 && usia < 30) {
    generasi = "Generasi Dewasa";
  } else if (usia >= 30) {
    generasi = "Generasi Tua";
  } else if (usia > 2 && usia < 10) {
    generasi = "Generasi Anak-Anak";
  } else {
    generasi = "Generasi Bayi";
  }
  return (biodata.innerHTML = generasi);
}
genereateBiodata();
