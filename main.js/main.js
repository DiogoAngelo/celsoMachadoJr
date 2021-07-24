/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/add-color.js":
/*!*************************!*\
  !*** ./js/add-color.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AddColor)\n/* harmony export */ });\nclass AddColor {\n  constructor(button, element) {\n    this.btnListen = document.querySelectorAll(button);\n    this.imgColor = document.querySelectorAll(element);\n  }\n\n  addColor(index) {\n    this.imgColor[index].classList.add('ativo');\n  }\n\n  removeColor() {\n    this.imgColor.forEach((item) => {\n      item.classList.remove('ativo');\n    });\n  }\n\n  bindEvents() {\n    this.removeColor = this.removeColor.bind(this);\n  }\n\n  addEvent() {\n    this.btnListen.forEach((item, index) => {\n      item.addEventListener('mouseover', () => {\n        this.addColor(index);\n      });\n      item.addEventListener('mouseleave', this.removeColor);\n    });\n  }\n\n  init() {\n    this.bindEvents();\n    if (this.btnListen.length && this.imgColor.length) {\n      this.addEvent();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://celsinho/./js/add-color.js?");

/***/ }),

/***/ "./js/headerColor.js":
/*!***************************!*\
  !*** ./js/headerColor.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AddColorHeader)\n/* harmony export */ });\nclass AddColorHeader {\n  constructor(button, element) {\n    this.btn = document.querySelector(button);\n    this.header = document.querySelector(element);\n  }\n\n  addColor() {\n    this.header.classList.add('ativo');\n  }\n\n  removeColor() {\n    this.header.classList.remove('ativo');\n  }\n\n  bindEvents() {\n    this.addColor = this.addColor.bind(this);\n    this.removeColor = this.removeColor.bind(this);\n  }\n\n  addEvents() {\n    this.btn.addEventListener('mouseover', this.addColor);\n    this.btn.addEventListener('mouseleave', this.removeColor);\n  }\n\n  init() {\n    this.bindEvents();\n    if (this.btn && this.header) {\n      this.addEvents();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://celsinho/./js/headerColor.js?");

/***/ }),

/***/ "./js/menu-bar.js":
/*!************************!*\
  !*** ./js/menu-bar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuBar)\n/* harmony export */ });\nclass MenuBar {\n  constructor(navbar) {\n    this.navBars = document.querySelectorAll(navbar);\n  }\n\n  showBar() {\n    this.navBars.forEach((navBar) => {\n      const navBarHeight = navBar.getBoundingClientRect().top;\n      if (navBarHeight < -50) {\n        if (!navBar.classList.contains('ativo')) {\n          navBar.classList.add('ativo');\n        }\n      }\n      if (window.scrollY === 0) {\n        if (navBar.classList.contains('ativo')) {\n          navBar.classList.remove('ativo');\n        }\n      }\n    });\n  }\n\n  bindEvent() {\n    this.showBar = this.showBar.bind(this);\n  }\n\n  addEvent() {\n    window.addEventListener('scroll', this.showBar);\n  }\n\n  init() {\n    this.bindEvent();\n    if (this.navBars.length) {\n      this.addEvent();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://celsinho/./js/menu-bar.js?");

/***/ }),

/***/ "./js/menu-burger.js":
/*!***************************!*\
  !*** ./js/menu-burger.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuBurger)\n/* harmony export */ });\nclass MenuBurger {\n  constructor() {\n    this.burgerTrace = document.querySelectorAll('.trace');\n    this.menuBurger = document.querySelector('.burger');\n    this.menu = document.querySelector('.menu-grow');\n    this.menuGrowItems = document.querySelector('.menu-grow-items');\n  }\n\n  openMenu() {\n    this.burgerTrace.forEach((trace) => {\n      trace.classList.toggle('ativo');\n    });\n    this.menu.classList.toggle('ativo');\n    this.menuGrowItems.classList.toggle('ativo');\n  }\n\n  bindEvents() {\n    this.openMenu = this.openMenu.bind(this);\n  }\n\n  addEvents() {\n    this.menuBurger.addEventListener('click', this.openMenu);\n  }\n\n  init() {\n    this.bindEvents();\n    this.addEvents();\n  }\n}\n\n\n//# sourceURL=webpack://celsinho/./js/menu-burger.js?");

/***/ }),

/***/ "./js/modal.js":
/*!*********************!*\
  !*** ./js/modal.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ModalTextos)\n/* harmony export */ });\nclass ModalTextos {\n  constructor(elementos, container, fechar, textoModal, texto) {\n    this.elementos = document.querySelectorAll(elementos);\n    this.modalContainer = document.querySelector(container);\n    this.fechar = document.querySelector(fechar);\n    this.textoModal = document.querySelector(textoModal);\n    this.textos = document.querySelectorAll(texto);\n  }\n\n  openModal(index) {\n    this.modalContainer.classList.add('ativo');\n    this.textoModal.innerHTML = this.textos[index].innerHTML;\n  }\n\n  closeModal() {\n    this.modalContainer.classList.remove('ativo');\n  }\n\n  handleBox(event) {\n    if (event.target === this.modalContainer) {\n      this.closeModal();\n    }\n  }\n\n  bindEvents() {\n    this.openModal = this.openModal.bind(this);\n    this.handleBox = this.handleBox.bind(this);\n    this.closeModal = this.closeModal.bind(this);\n  }\n\n  addEvents() {\n    this.elementos.forEach((elemento, index) => {\n      elemento.addEventListener('click', () => {\n        this.openModal(index);\n      });\n    });\n    this.fechar.addEventListener('click', this.closeModal);\n    this.modalContainer.addEventListener('click', this.handleBox);\n  }\n\n  init() {\n    this.bindEvents();\n    if (this.elementos.length && this.container) {\n      this.addEvents();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://celsinho/./js/modal.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-color.js */ \"./js/add-color.js\");\n/* harmony import */ var _menu_bar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-bar.js */ \"./js/menu-bar.js\");\n/* harmony import */ var _headerColor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./headerColor.js */ \"./js/headerColor.js\");\n/* harmony import */ var _menu_burger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-burger.js */ \"./js/menu-burger.js\");\n/* harmony import */ var _songs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./songs.js */ \"./js/songs.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal.js */ \"./js/modal.js\");\n/* eslint-disable import/extensions */\n\n\n\n\n\n\n\nconst addColor = new _add_color_js__WEBPACK_IMPORTED_MODULE_0__.default('.listen', '.img');\naddColor.init();\n\nconst addColorHeader = new _headerColor_js__WEBPACK_IMPORTED_MODULE_2__.default('.button', '.header-home');\naddColorHeader.init();\n\nconst menuBar = new _menu_bar_js__WEBPACK_IMPORTED_MODULE_1__.default('.navegacao');\nmenuBar.init();\n\nconst menuBurger = new _menu_burger_js__WEBPACK_IMPORTED_MODULE_3__.default();\nmenuBurger.init();\n\nconst songs = new _songs_js__WEBPACK_IMPORTED_MODULE_4__.default('#video', '.track');\nsongs.init();\n\nconst modalTextos = new _modal_js__WEBPACK_IMPORTED_MODULE_5__.default('.projects-display .listen', '.modal-container', '.close', '.texto-modal', '.texto');\nmodalTextos.init();\n\n\n//# sourceURL=webpack://celsinho/./js/script.js?");

/***/ }),

/***/ "./js/songs.js":
/*!*********************!*\
  !*** ./js/songs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Songs)\n/* harmony export */ });\nclass Songs {\n  constructor(video, track) {\n    this.frame = document.querySelector(video);\n    this.faixas = document.querySelectorAll(track);\n    this.arraySongs = [\n      'https://www.youtube.com/embed/_oI_rZE1UWY',\n      'https://www.youtube.com/embed/OjbYDq1ATMc',\n      'https://www.youtube.com/embed/U51Ul6iyMAA',\n      'https://www.youtube.com/embed/2xhT82R3DkQ',\n      'https://www.youtube.com/embed/RrcGvbikMeM',\n      'https://www.youtube.com/embed/SJpSu8SVd1E',\n      'https://www.youtube.com/embed/JkyczBrrQL8',\n      'https://www.youtube.com/embed/4ggZQjtH78U',\n      'https://www.youtube.com/embed/RcEmQ2Q7f94',\n      'https://www.youtube.com/embed/KH0UEvJ_ES8',\n    ];\n  }\n\n  playSong(index) {\n    this.frame.src = this.arraySongs[index];\n  }\n\n  bindEvents() {\n    this.playSong = this.playSong.bind(this);\n  }\n\n  addEvents() {\n    this.faixas.forEach((faixa, index) => {\n      faixa.addEventListener('click', () => {\n        this.playSong(index);\n      });\n    });\n  }\n\n  init() {\n    this.bindEvents();\n    if (this.frame && this.faixas.length) {\n      this.addEvents();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://celsinho/./js/songs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;