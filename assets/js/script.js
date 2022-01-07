let $ = document;

const hamburgerIcon = $.querySelector('.header__hamburger-icon');
const closeIcon = $.querySelector('.header__close-icon');
const navbar = $.querySelector('.navbar');

// Functions
hamburgerIcon.addEventListener('click', ()=>{
    hamburgerIcon.classList.toggle('active');
    closeIcon.classList.toggle('active');
    navbar.classList.toggle('active');
});

closeIcon.addEventListener('click', ()=>{
    hamburgerIcon.classList.toggle('active');
    closeIcon.classList.toggle('active');
    navbar.classList.toggle('active');
});