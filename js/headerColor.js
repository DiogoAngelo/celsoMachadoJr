export default class AddColorHeader {
  constructor(button, element) {
    this.btn = document.querySelector(button);
    this.header = document.querySelector(element);
  }

  addColor() {
    this.header.classList.add('ativo');
  }

  removeColor() {
    this.header.classList.remove('ativo');
  }

  bindEvents() {
    this.addColor = this.addColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
  }

  addEvents() {
    this.btn.addEventListener('mouseover', this.addColor);
    this.btn.addEventListener('mouseleave', this.removeColor);
  }

  init() {
    this.bindEvents();
    if (this.btn && this.header) {
      this.addEvents();
    }
  }
}
