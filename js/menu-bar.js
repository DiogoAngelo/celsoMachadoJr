export default class MenuBar {
  constructor(navbar) {
    this.navBars = document.querySelectorAll(navbar);
  }

  showBar() {
    this.navBars.forEach((navBar) => {
      const navBarHeight = navBar.getBoundingClientRect().top;
      if (navBarHeight < -50) {
        if (!navBar.classList.contains('ativo')) {
          navBar.classList.add('ativo');
        }
      }
      if (window.scrollY === 0) {
        if (navBar.classList.contains('ativo')) {
          navBar.classList.remove('ativo');
        }
      }
    });
  }

  bindEvent() {
    this.showBar = this.showBar.bind(this);
  }

  addEvent() {
    window.addEventListener('scroll', this.showBar);
  }

  init() {
    this.bindEvent();
    if (this.navBars.length) {
      this.addEvent();
    }
  }
}
