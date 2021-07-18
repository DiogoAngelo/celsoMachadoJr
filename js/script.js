/* eslint-disable import/extensions */
import AddColor from './add-color.js';
import MenuBar from './menu-bar.js';
import AddColorHeader from './headerColor.js';
import MenuBurger from './menu-burger.js';
import Songs from './songs.js';

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
