// Mobile Navigation Toggle
const burger = document.getElementById("burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Dynamic Year in Footer
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();