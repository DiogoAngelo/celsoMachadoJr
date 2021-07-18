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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AddColor)\n/* harmony export */ });\nclass AddColor {\n  constructor(button, element) {\n    this.btnListen = document.querySelectorAll(button);\n    this.imgColor = document.querySelectorAll(element);\n  }\n\n  addColor(index) {\n    this.imgColor[index].classList.add('ativo');\n  }\n\n  removeColor() {\n    this.imgColor.forEach((item) => {\n      item.classList.remove('ativo');\n    });\n  }\n\n  bindEvents() {\n    this.removeColor = this.removeColor.bind(this);\n  }\n\n  addEvent() {\n    this.btnListen.forEach((item, index) => {\n      item.addEventListener('mouseover', () => {\n        this.addColor(index);\n      });\n      item.addEventListener('mouseleave', this.removeColor);\n    });\n  }\n\n  init() {\n    this.bindEvents();\n    this.addEvent();\n  }\n}\n\n\n//# sourceURL=webpack://celsinho/./js/add-color.js?");

/***/ }),

/***/ "./js/headerColor.js":
/*!***************************!*\
  !*** ./js/headerColor.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AddColorHeader)\n/* harmony export */ });\nclass AddColorHeader {\n  constructor(button, element) {\n    this.header = document.querySelector(element);\n    this.btn = document.querySelector(button);\n  }\n\n  addColor() {\n    this.header.classList.add('ativo');\n  }\n\n  removeColor() {\n    this.header.classList.remove('ativo');\n  }\n\n  bindEvents() {\n    this.addColor = this.addColor.bind(this);\n    this.removeColor = this.removeColor.bind(this);\n  }\n\n  addEvents() {\n    this.btn.addEventListener('mouseover', this.addColor);\n    this.btn.addEventListener('mouseleave', this.removeColor);\n  }\n\n  init() {\n    this.bindEvents();\n    this.addEvents();\n  }\n}\n\n\n//# sourceURL=webpack://celsinho/./js/headerColor.js?");

/***/ }),

/***/ "./js/menu-bar.js":
/*!************************!*\
  !*** ./js/menu-bar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuBar)\n/* harmony export */ });\nclass MenuBar {\n  constructor(navbar) {\n    this.navBars = document.querySelectorAll(navbar);\n  }\n\n  showBar() {\n    this.navBars.forEach((navBar) => {\n      const navBarHeight = navBar.getBoundingClientRect().top;\n      if (navBarHeight < -50) {\n        if (!navBar.classList.contains('ativo')) {\n          navBar.classList.add('ativo');\n        }\n      }\n      if (window.scrollY === 0) {\n        if (navBar.classList.contains('ativo')) {\n          navBar.classList.remove('ativo');\n        }\n      }\n    });\n  }\n\n  bindEvent() {\n    this.showBar = this.showBar.bind(this);\n  }\n\n  addEvent() {\n    window.addEventListener('scroll', this.showBar);\n  }\n\n  init() {\n    this.bindEvent();\n    this.addEvent();\n  }\n}\n\n\n//# sourceURL=webpack://celsinho/./js/menu-bar.js?");

/***/ }),

/***/ "./js/menu-burger.js":
/*!***************************!*\
  !*** ./js/menu-burger.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuBurger)\n/* harmony export */ });\nfunction initMenuBurger() {\n  const burgerTrace = document.querySelectorAll('.trace');\n  const menuBurger = document.querySelector('.burger');\n  const menu = document.querySelector('.menu-grow');\n  const menuGrowItems = document.querySelector('.menu-grow-items');\n\n  function openMenu() {\n    burgerTrace.forEach((trace) => {\n      trace.classList.toggle('ativo');\n    });\n    menu.classList.toggle('ativo');\n    menuGrowItems.classList.toggle('ativo');\n  }\n  menuBurger.addEventListener('click', openMenu);\n}\n\n\n//# sourceURL=webpack://celsinho/./js/menu-burger.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-color.js */ \"./js/add-color.js\");\n/* harmony import */ var _menu_bar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-bar.js */ \"./js/menu-bar.js\");\n/* harmony import */ var _menu_burger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-burger.js */ \"./js/menu-burger.js\");\n/* harmony import */ var _songs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./songs.js */ \"./js/songs.js\");\n/* harmony import */ var _headerColor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./headerColor.js */ \"./js/headerColor.js\");\n/* eslint-disable import/extensions */\n\n\n\n\n\n\nconst addColor = new _add_color_js__WEBPACK_IMPORTED_MODULE_0__.default('.listen', '.img');\naddColor.init();\n\nconst addColorHeader = new _headerColor_js__WEBPACK_IMPORTED_MODULE_4__.default('.button', '.header-home');\naddColorHeader.init();\n\nconst menuBar = new _menu_bar_js__WEBPACK_IMPORTED_MODULE_1__.default('.navegacao');\nmenuBar.init();\n\n(0,_menu_burger_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_songs_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n\n\n//# sourceURL=webpack://celsinho/./js/script.js?");

/***/ }),

/***/ "./js/songs.js":
/*!*********************!*\
  !*** ./js/songs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initSongs)\n/* harmony export */ });\nfunction initSongs() {\n  const arraySongs = [\n    'https://www.youtube.com/embed/_oI_rZE1UWY',\n    'https://www.youtube.com/embed/OjbYDq1ATMc',\n    'https://www.youtube.com/embed/U51Ul6iyMAA',\n    'https://www.youtube.com/embed/2xhT82R3DkQ',\n    'https://www.youtube.com/embed/RrcGvbikMeM',\n    'https://www.youtube.com/embed/SJpSu8SVd1E',\n    'https://www.youtube.com/embed/JkyczBrrQL8',\n    'https://www.youtube.com/embed/4ggZQjtH78U',\n    'https://www.youtube.com/embed/RcEmQ2Q7f94',\n    'https://www.youtube.com/embed/KH0UEvJ_ES8',\n  ];\n  const frame = document.querySelector('#video');\n  function playSong(index) {\n    frame.src = arraySongs[index];\n    // frame.src += \"&autoplay=1\";\n  }\n  const faixas = document.querySelectorAll('.track');\n  faixas.forEach((faixa, index) => {\n    faixa.addEventListener('click', () => {\n      playSong(index);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://celsinho/./js/songs.js?");

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