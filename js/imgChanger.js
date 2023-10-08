const image = document.querySelector('.section__image-five');

window.addEventListener('resize', () => {
  if (window.innerWidth > 1200) {
    image.src = 'utils/images/comp_lady-side.png';
  } else {
    image.src = 'utils/images/comp_lady_hd.png', console.log('Mobile view')
  }
});

window.addEventListener('load', () => {
  if (window.innerWidth > 1200) {
    image.src = 'utils/images/comp_lady-side.png';
  } else {
    image.src = 'utils/images/comp_lady_hd.png';
  }
});