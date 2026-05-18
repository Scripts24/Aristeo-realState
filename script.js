
// Lógica del Scroll Reveal
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        }
    });
}
window.addEventListener("scroll", reveal);
window.addEventListener("DOMContentLoaded", reveal);

// Lógica del Menú Mobile
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');

function openMenu() {
    mobileMenu.classList.remove('-translate-x-full');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    mobileMenu.classList.add('-translate-x-full');
    document.body.style.overflow = '';
}

menuToggle.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);

const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});