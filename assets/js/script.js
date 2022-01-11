let $ = document;

// show navbar
const hamburgerIcon = $.querySelector(".header__hamburger-icon");
const closeIcon = $.querySelector(".header__close-icon");
const navbar = $.querySelector(".navbar");
// click on menu item
let menuItems = $.querySelectorAll("header .menu a");

// Function

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

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", colorFunc);
});

function colorFunc() {
  menuItems.forEach((menuItem) => {
    menuItem.classList.remove("active");
    this.classList.add("active");
  });
}
