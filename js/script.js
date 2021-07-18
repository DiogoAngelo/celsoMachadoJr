/* eslint-disable import/extensions */
import AddColor from './add-color.js';
import MenuBar from './menu-bar.js';
import initMenuBurger from './menu-burger.js';
import initSongs from './songs.js';
import AddColorHeader from './headerColor.js';

const addColor = new AddColor('.listen', '.img');
addColor.init();

const addColorHeader = new AddColorHeader('.button', '.header-home');
addColorHeader.init();

const menuBar = new MenuBar('.navegacao');
menuBar.init();

initMenuBurger();
initSongs();
