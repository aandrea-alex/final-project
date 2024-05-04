const headerMenuRef = document.querySelector('.js-menu');
let menuItems = [];
if (headerMenuRef) {
  menuItems = headerMenuRef.querySelectorAll('a');
}

headerMenuRef &&
  headerMenuRef.addEventListener('click', event => {
    const item = event.target;
    if (!item.matches('a')) return;
    event.preventDefault();
    removeActiveClass();
    addActiveClass(item);
    const targetId = item.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement && targetElement.scrollIntoView({ behavior: 'smooth' });
  });

export function removeActiveClass() {
  menuItems.forEach(item => {
    item.classList.remove('header-menu-item-link-active');
  });
}

export function addActiveClass(item) {
  item.classList.add('header-menu-item-link-active');
}

export function getLastElementMenu() {
  return menuItems[menuItems.length - 1];
}

export function getFirstElementMenu() {
  return menuItems[0];
}
