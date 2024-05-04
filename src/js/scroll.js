import {
  removeActiveClass,
  addActiveClass,
  getLastElementMenu,
  getFirstElementMenu,
} from '../js/select-menu.js';
const onScrollUp = () => {
  if (window.scrollY != 0) {
    setTimeout(function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
    removeActiveClass();
    addActiveClass(getFirstElementMenu());
  }
};

const onScrollDown = () => {
  const documentHeight = document.documentElement.scrollHeight;
  const scrollPosition = window.scrollY;

  if (scrollPosition < documentHeight) {
    setTimeout(function () {
      window.scrollBy({
        top: documentHeight - scrollPosition,
        behavior: 'smooth',
      });
    }, 300);
    removeActiveClass();
    addActiveClass(getLastElementMenu());
  }
};

const scrollUpBtn = document.querySelector('.js-footer-scroll');
scrollUpBtn && scrollUpBtn.addEventListener('click', onScrollUp);

const scrollDownBtn = document.querySelector('.js-hero-scroll');
scrollDownBtn && scrollDownBtn.addEventListener('click', onScrollDown);
