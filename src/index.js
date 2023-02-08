import {component} from "./page-load";
import {componentContact} from "./contact-load";
import {componentMenu} from "./menu-load";

console.log('this is from index.js!!')

component();

const homeButton = document.querySelector('button.home');

const contactButton = document.querySelector('button.contact');

const menuButton = document.querySelector('button.menu');

homeButton.addEventListener('click', component);

contactButton.addEventListener('click', componentContact);

menuButton.addEventListener('click', componentMenu)