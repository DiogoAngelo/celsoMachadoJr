export default function initMenuBurger() {
  const burgerTrace = document.querySelectorAll('.trace');
  const menuBurger = document.querySelector('.burger');
  const menu = document.querySelector('.menu-grow');
  const menuGrowItems = document.querySelector('.menu-grow-items');

  function openMenu() {
    burgerTrace.forEach((trace) => {
      trace.classList.toggle('ativo');
    });
    menu.classList.toggle('ativo');
    menuGrowItems.classList.toggle('ativo');
  }
  menuBurger.addEventListener('click', openMenu);
}
