// Computer
function getPilihanKomputer() {
  const com = Math.random();
  if (com <= 0.34) return "semut";
  if (com > 0.34 && com < 0.67) return "orang";
  return "gajah";
}

// Rules
function getHasil(com, p) {
  if (p == com) return "Imbang";
  if (p == "semut") return com == "orang" ? "Kalah" : "Menang";
  if (p == "orang") return com == "gajah" ? "Kalah" : "Menang";
  if (p == "gajah") return com == "semut" ? "Kalah" : "Menang";
}

// Roll
function putar() {
  const imgComputer = document.getElementsByClassName("img-computer")[0];
  const gambar = ["semut", "orang", "gajah"];
  const waktuMulai = new Date().getTime();
  let i = 0;
  setInterval(function () {
    // Loop Image
    if (i == gambar.length) i = 0;

    // Condition Interval
    if (new Date().getTime() - waktuMulai > 1000) return clearInterval;
    return imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
  }, 100);
}

// Result
const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);
    putar();
    setTimeout(function () {
      // Image
      const imgComputer = document.getElementsByClassName("img-computer")[0];
      imgComputer.setAttribute("src", "img/" + pilihanKomputer + ".png");

      // Teks
      const info = document.getElementsByClassName("info")[0];
      info.innerHTML = hasil;
    }, 1000);
  });
});
