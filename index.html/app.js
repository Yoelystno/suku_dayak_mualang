// Toggle menu mobile
function toggleMenu() {
  document.querySelector('.top-nav').classList.toggle('active');
}

// Typewriter effect
const messages = [
  "SELAMAT DATANG DI WEBSITE SAYA",
  "MENGENAL SUKU DAYAK MUALANG",
  "TERIMA KASIH TELAH BERKUNJUNG",
];
let idx = 0, pos = 0, out = false;
const speed = 100, delay = 2000;
const el = document.getElementById("typewriter");

function typeEffect() {
  const txt = messages[idx];
  if (!out) {
    el.textContent = txt.substring(0, pos++);
    if (pos > txt.length) {
      out = true;
      setTimeout(typeEffect, delay);
    } else setTimeout(typeEffect, speed);
  } else {
    el.textContent = txt.substring(0, pos--);
    if (pos < 0) {
      out = false;
      idx = (idx + 1) % messages.length;
      setTimeout(typeEffect, 500);
    } else setTimeout(typeEffect, speed / 2);
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);

function closeLightbox() {
  lightbox.classList.remove('show'); // aktifkan animasi keluar
  setTimeout(() => {
    lightbox.style.display = 'none';
    lightboxImg.src = ''; // bersihkan gambar setelah hilang
  }, 400); // sesuai durasi transisi di CSS
}
