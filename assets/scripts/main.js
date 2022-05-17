const hamburgar = document.getElementById('hamburger-icon');
const mobileMenu = document.querySelector('.mobile-menu')
const navClose = document.querySelectorAll('.mobile-nav-link');

// Open and close mobile menu bar
const toggleMobileMenu = () => {
  mobileMenu.classList.toggle('open');
  hamburgar.classList.toggle('change');
};

const closeNav = () => {
  hamburgar.classList.remove('change');
  mobileMenu.classList.remove('open');
};

hamburgar.addEventListener('click', toggleMobileMenu);

navClose.forEach((elem) => {
  elem.addEventListener('click', closeNav);
});