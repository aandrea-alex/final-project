const onScrollUp = () => {
  if (window.scrollY != 0) {
    setTimeout(function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  }
}

const onScrollDown = () => {
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition < documentHeight) {
        setTimeout(function () {
            window.scrollBy({ top: documentHeight - scrollPosition, behavior: 'smooth' });
        }, 300);
    }
}

const scrollUpBtn = document.querySelector('.js-footer-scroll');
scrollUpBtn && scrollUpBtn.addEventListener("click", onScrollUp);

const scrollDownBtn = document.querySelector('.js-hero-scroll');
scrollUpBtn && scrollDownBtn.addEventListener("click", onScrollDown);