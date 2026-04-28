const header = document.getElementById("header");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");
const cursorGlow = document.querySelector(".cursor-glow");
const revealItems = document.querySelectorAll(".reveal");

year.textContent = new Date().getFullYear();

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 30);
});

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

window.addEventListener("mousemove", (event) => {
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

const revealOnScroll = () => {
  revealItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < window.innerHeight - 110) {
      item.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);