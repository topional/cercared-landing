const userThemePrefs = JSON.parse(localStorage.getItem('cercared_currentUser'));
if (userThemePrefs && userThemePrefs.preferences && userThemePrefs.preferences.fontSize === 'large') {
  document.body.classList.add('font-large');
}

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const brandLink = document.querySelector(".brand");

if (brandLink) {
  brandLink.href = "https://cercared.netlify.app/";
}

function closeMenu() {
  navMenu.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Abrir menú");
}

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    closeMenu();
  }
});