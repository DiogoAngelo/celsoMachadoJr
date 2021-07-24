/* eslint-disable indent */
export default class ModalIndex {
    constructor(button, container, close) {
        this.button = document.querySelector(button);
        this.container = document.querySelector(container);
        this.close = document.querySelector(close);
    }

    openModalIndex() {
        this.container.classList.add('ativo');
    }

    closeModalIndex() {
        this.container.classList.remove('ativo');
    }

    clickOutside(event) {
        if (event.target === this.container) {
            this.closeModalIndex();
        }
    }

    bindEvents() {
        this.openModalIndex = this.openModalIndex.bind(this);
        this.closeModalIndex = this.closeModalIndex.bind(this);
        this.clickOutside = this.clickOutside.bind(this);
    }

    addEvents() {
        this.button.addEventListener('click', this.openModalIndex);
        this.close.addEventListener('click', this.closeModalIndex);
        this.container.addEventListener('click', this.clickOutside);
    }

    init() {
        this.bindEvents();
        this.addEvents();
    }
  }
