const currentYear = () => new Date().getFullYear();
const currYearRef = document.querySelector('.js-year');

currYearRef.textContent = currentYear();
