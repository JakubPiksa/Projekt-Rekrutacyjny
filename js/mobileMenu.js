const hamburger = document.querySelector('.header__hamburger');
const navList = document.querySelector('.header__nav-list');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('active');
});