const hamburger = document.querySelector('.header__hamburger');
const navList = document.querySelector('.header__nav-list');
const navLinks = document.querySelectorAll('.header__nav-link')


hamburger.addEventListener('click', () => {
  navList.classList.toggle('active');
  hamburger.classList.toggle('active');  
});


navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');

    const header = document.querySelector('.header');
    const id = link.getAttribute('href');
    const element = document.querySelector(id);
    const { height } = header.getBoundingClientRect();
    const { offsetTop } = element;
    const y = offsetTop - height;

    window.scrollTo({top: y, behavior: 'smooth'
});
  });
});