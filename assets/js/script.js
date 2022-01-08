let $ = document;

// header fixed top
const header = $.querySelector("header");
// show navbar
const hamburgerIcon = $.querySelector(".header__hamburger-icon");
const closeIcon = $.querySelector(".header__close-icon");
const navbar = $.querySelector(".navbar");

// Functions
window.addEventListener("scroll", () => {
  if (window.scrollY > 620) {
    header.style.position = "fixed";
  } else {
    header.style.position = "sticky";
  }
});

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("active");
  closeIcon.classList.toggle("active");
  navbar.classList.toggle("active");
});

closeIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("active");
  closeIcon.classList.toggle("active");
  navbar.classList.toggle("active");
});
