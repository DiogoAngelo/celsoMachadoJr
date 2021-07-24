/* eslint-disable import/extensions */
import AddColor from './add-color.js';
import MenuBar from './menu-bar.js';
import AddColorHeader from './headerColor.js';
import MenuBurger from './menu-burger.js';
import Songs from './songs.js';
import ModalTextos from './modal.js';
import ModalIndex from './modal-index.js';

const addColor = new AddColor('.listen', '.img');
addColor.init();

const addColorHeader = new AddColorHeader('.button', '.header-home');
addColorHeader.init();

const menuBar = new MenuBar('.navegacao');
menuBar.init();

const menuBurger = new MenuBurger();
menuBurger.init();

const songs = new Songs('#video', '.track');
songs.init();

const modalTextos = new ModalTextos('.projects-display .listen', '.modal-container', '.close', '.texto-modal', '.texto');
modalTextos.init();

const modalIndex = new ModalIndex('[data-modal="oficinag3"]', '.modal-container', '.close');
modalIndex.init();
