const images = document.querySelectorAll('.section__image-five');

window.addEventListener('resize', () => {
  images.forEach(image => {
    if (window.innerWidth > 1200) {
      image.src = 'utils/images/comp_lady-side.png';
    } else {
console.log('Mobile view')
    }
  });
});