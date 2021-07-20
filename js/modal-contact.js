/* eslint-disable indent */
export default class ModalContact {
    constructor(modal, fechar, link) {
        this.modalContainer = document.querySelector(modal);
        this.link = document.querySelector(link);
        this.fechar = document.querySelector(fechar);
    }

    openModal() {
        this.modalContainer.classList.add('ativo');
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
        this.link.addEventListener('click', this.openModal);
        this.fechar.addEventListener('click', this.closeModal);
        this.modalContainer.addEventListener('click', this.handleBox);
    }

    init() {
      this.bindEvents();
      this.addEvents();
    }
  }
