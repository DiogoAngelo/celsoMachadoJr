export default class MenuBurger {
  constructor() {
    this.burgerTrace = document.querySelectorAll('.trace');
    this.menuBurger = document.querySelector('.burger');
    this.menu = document.querySelector('.menu-grow');
    this.menuGrowItems = document.querySelector('.menu-grow-items');
  }

  openMenu() {
    this.burgerTrace.forEach((trace) => {
      trace.classList.toggle('ativo');
    });
    this.menu.classList.toggle('ativo');
    this.menuGrowItems.classList.toggle('ativo');
  }

  bindEvents() {
    this.openMenu = this.openMenu.bind(this);
  }

  addEvents() {
    this.menuBurger.addEventListener('click', this.openMenu);
  }

  init() {
    this.bindEvents();
    this.addEvents();
  }
}
