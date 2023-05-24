const trachea = document.querySelector('.slide-left');
const pic2 = document.querySelector('.slide-right');
const pic3 = document.querySelector('.slide-left');
const pic4 = document.querySelector('.slide-right');

window.addEventListener('scroll', () => {
  const tracheaPosition = trachea.getBoundingClientRect().top;
  const pic2Position = pic2.getBoundingClientRect().top;
  const pic3Position = pic3.getBoundingClientRect().top;
  const pic4Position = pic4.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (tracheaPosition < windowHeight) {
    trachea.classList.add('slide-left');
  }

  if (pic2Position < windowHeight) {
    pic2.classList.add('slide-right');
  }

  if (pic3Position < windowHeight) {
    pic3.classList.add('slide-left');
  }

  if (pic4Position < windowHeight) {
    pic4.classList.add('slide-right');
  }
});