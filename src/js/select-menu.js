const menuItems = document.querySelectorAll('.js-menu-item');
menuItems.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    removeActiveClass();
    addActiveClass(item);
    const targetId = item.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

export function removeActiveClass() {
  const menuItems = document.querySelectorAll('.js-menu-item');
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
