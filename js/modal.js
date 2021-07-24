export default class ModalTextos {
  constructor(elementos, container, fechar, textoModal, texto) {
    this.elementos = document.querySelectorAll(elementos);
    this.modalContainer = document.querySelector(container);
    this.fechar = document.querySelector(fechar);
    this.textoModal = document.querySelector(textoModal);
    this.textos = document.querySelectorAll(texto);
  }

  openModal(index) {
    this.modalContainer.classList.add('ativo');
    this.textoModal.innerHTML = this.textos[index].innerHTML;
  }

  closeModal() {
    this.modalContainer.classList.remove('ativo');
  }

  handleBox(event) {
    if (event.target === this.modalContainer) {
      this.closeModal();
    }
  }

  bindEvents() {
    this.openModal = this.openModal.bind(this);
    this.handleBox = this.handleBox.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  addEvents() {
    this.elementos.forEach((elemento, index) => {
      elemento.addEventListener('click', () => {
        this.openModal(index);
      });
    });
    this.fechar.addEventListener('click', this.closeModal);
    this.modalContainer.addEventListener('click', this.handleBox);
  }

  init() {
    this.bindEvents();
    if (this.elementos.length && this.container) {
      this.addEvents();
    }
  }
}
