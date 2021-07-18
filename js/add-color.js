export default class AddColor {
  constructor(button, element) {
    this.btnListen = document.querySelectorAll(button);
    this.imgColor = document.querySelectorAll(element);
  }

  addColor(index) {
    this.imgColor[index].classList.add('ativo');
  }

  removeColor() {
    this.imgColor.forEach((item) => {
      item.classList.remove('ativo');
    });
  }

  bindEvents() {
    this.removeColor = this.removeColor.bind(this);
  }

  addEvent() {
    this.btnListen.forEach((item, index) => {
      item.addEventListener('mouseover', () => {
        this.addColor(index);
      });
      item.addEventListener('mouseleave', this.removeColor);
    });
  }

  init() {
    this.bindEvents();
    this.addEvent();
  }
}
