// Hedeflenen tarih ve saat
var hedefTarih = new Date("2023-07-15T23:59:59").getTime();

// Her 1 saniyede bir süreyi güncelleyen fonksiyon
function updateCountdown() {
  // Şu anki tarih ve saat
  var suAn = new Date().getTime();

  // Kalan süre hesaplama
  var kalanSure = hedefTarih - suAn;

  // Gün, saat, dakika ve saniye hesaplama
  var gunler = Math.floor(kalanSure / (1000 * 60 * 60 * 24));
  var saatler = Math.floor((kalanSure % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var dakikalar = Math.floor((kalanSure % (1000 * 60 * 60)) / (1000 * 60));
  var saniyeler = Math.floor((kalanSure % (1000 * 60)) / 1000);

  // Sayaç HTML elementini güncelleme
  document.getElementById("days").innerHTML = gunler + " day(s)";
  document.getElementById("hours").innerHTML = saatler + " hour(s)";
  document.getElementById("minutes").innerHTML = dakikalar + " minute(s)";
  document.getElementById("seconds").innerHTML = saniyeler + " second(s)";

  // Hedef tarihe ulaşıldığında sayaç durdurma
  if (kalanSure < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Time is up!";
  }
}

// İlk çalıştırma
updateCountdown();

// Her 1 saniyede bir sayaç güncelleme
var countdown = setInterval(updateCountdown, 1000);
