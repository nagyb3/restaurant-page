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

/***/ "./src/contact-load.js":
/*!*****************************!*\
  !*** ./src/contact-load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"componentContact\": () => (/* binding */ componentContact)\n/* harmony export */ });\nfunction componentContact() {\r\n    const element = document.querySelector('#content');\r\n\r\n    while (element.firstChild) {\r\n        element.removeChild(element.lastChild);\r\n    }\r\n\r\n    const headerdiv = document.createElement('div');\r\n    headerdiv.classList.add('header');\r\n\r\n    const headerh1 = document.createElement('h1');\r\n    headerh1.textContent = 'Contact';\r\n    headerdiv.appendChild(headerh1);\r\n\r\n    element.appendChild(headerdiv);\r\n\r\n    const unorderedList = document.createElement('ul')\r\n\r\n    let li = document.createElement('li');\r\n    li.textContent = 'Phone: +123 4567'\r\n    unorderedList.appendChild(li);\r\n\r\n    element.appendChild(unorderedList);\r\n\r\n\r\n    return element\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact-load.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n/* harmony import */ var _contact_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-load */ \"./src/contact-load.js\");\n/* harmony import */ var _menu_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-load */ \"./src/menu-load.js\");\n\r\n\r\n\r\n\r\nconsole.log('this is from index.js!!')\r\n\r\n;(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.component)();\r\n\r\nconst homeButton = document.querySelector('button.home');\r\n\r\nconst contactButton = document.querySelector('button.contact');\r\n\r\nconst menuButton = document.querySelector('button.menu');\r\n\r\nhomeButton.addEventListener('click', _page_load__WEBPACK_IMPORTED_MODULE_0__.component);\r\n\r\ncontactButton.addEventListener('click', _contact_load__WEBPACK_IMPORTED_MODULE_1__.componentContact);\r\n\r\nmenuButton.addEventListener('click', _menu_load__WEBPACK_IMPORTED_MODULE_2__.componentMenu)\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu-load.js":
/*!**************************!*\
  !*** ./src/menu-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"componentMenu\": () => (/* binding */ componentMenu)\n/* harmony export */ });\nfunction componentMenu() {\r\n    const element = document.querySelector('#content');\r\n\r\n    while (element.firstChild) {\r\n        element.removeChild(element.lastChild);\r\n    }\r\n\r\n    const headerdiv = document.createElement('div');\r\n    headerdiv.classList.add('header');\r\n\r\n    const headerh1 = document.createElement('h1');\r\n    headerh1.textContent = 'Our Menu';\r\n    headerdiv.appendChild(headerh1);\r\n\r\n    element.appendChild(headerdiv);\r\n\r\n\r\n    return element\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu-load.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"component\": () => (/* binding */ component)\n/* harmony export */ });\n/* harmony import */ var _images_restaurantimage_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/restaurantimage.jpg */ \"./images/restaurantimage.jpg\");\n\r\n\r\nfunction component() {\r\n    const element = document.querySelector('#content');\r\n\r\n    while (element.firstChild) {\r\n        element.removeChild(element.lastChild);\r\n    }\r\n\r\n    const headerdiv = document.createElement('div');\r\n    headerdiv.classList.add('header');\r\n\r\n    const headerh1 = document.createElement('h1');\r\n    headerh1.textContent = 'My restaurant';\r\n\r\n    headerdiv.appendChild(headerh1);\r\n    element.appendChild(headerdiv);\r\n\r\n    const myIcon = document.createElement('img');\r\n    myIcon.src = _images_restaurantimage_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    myIcon.classList.add('restaurant-image');\r\n\r\n\r\n    element.appendChild(myIcon);\r\n\r\n\r\n\r\n    return element\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/page-load.js?");

/***/ }),

/***/ "./images/restaurantimage.jpg":
/*!************************************!*\
  !*** ./images/restaurantimage.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3d2794dc83c9f6633434.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./images/restaurantimage.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;