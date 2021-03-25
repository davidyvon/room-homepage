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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _javascript_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./javascript/app */ \"./src/javascript/app.js\");\n/* harmony import */ var _sass_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sass/app.scss */ \"./src/sass/app.scss\");\n\n\n\n//# sourceURL=webpack://room-homepage/./src/index.js?");

/***/ }),

/***/ "./src/javascript/app.js":
/*!*******************************!*\
  !*** ./src/javascript/app.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/javascript/header.js\");\n/* harmony import */ var _slideshow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideshow */ \"./src/javascript/slideshow.js\");\n\n\n\n//# sourceURL=webpack://room-homepage/./src/javascript/app.js?");

/***/ }),

/***/ "./src/javascript/header.js":
/*!**********************************!*\
  !*** ./src/javascript/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction showMenu() {\n  var navigation = document.querySelector('.nav');\n\n  function toggleMenu() {\n    navigation.classList.toggle('show');\n  }\n\n  document.querySelector('.nav__control--open').addEventListener('click', toggleMenu);\n  document.querySelector('.nav__control--close').addEventListener('click', toggleMenu);\n}\n\nshowMenu();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMenu);\n\n//# sourceURL=webpack://room-homepage/./src/javascript/header.js?");

/***/ }),

/***/ "./src/javascript/slideshow.js":
/*!*************************************!*\
  !*** ./src/javascript/slideshow.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.json */ \"./src/javascript/data.json\");\n/* harmony import */ var _assets_images_slideshow_mobile_image_hero_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/slideshow/mobile-image-hero-1.jpg */ \"./src/assets/images/slideshow/mobile-image-hero-1.jpg\");\n/* harmony import */ var _assets_images_slideshow_mobile_image_hero_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/slideshow/mobile-image-hero-2.jpg */ \"./src/assets/images/slideshow/mobile-image-hero-2.jpg\");\n/* harmony import */ var _assets_images_slideshow_mobile_image_hero_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/slideshow/mobile-image-hero-3.jpg */ \"./src/assets/images/slideshow/mobile-image-hero-3.jpg\");\n/* harmony import */ var _assets_images_slideshow_desktop_image_hero_1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/slideshow/desktop-image-hero-1.jpg */ \"./src/assets/images/slideshow/desktop-image-hero-1.jpg\");\n/* harmony import */ var _assets_images_slideshow_desktop_image_hero_2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/slideshow/desktop-image-hero-2.jpg */ \"./src/assets/images/slideshow/desktop-image-hero-2.jpg\");\n/* harmony import */ var _assets_images_slideshow_desktop_image_hero_3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/slideshow/desktop-image-hero-3.jpg */ \"./src/assets/images/slideshow/desktop-image-hero-3.jpg\");\n\n\n\n\n\n\n\n\nfunction showSlide() {\n  var image = document.querySelector('.slide__image');\n  var title = document.querySelector('.slide__title');\n  var text = document.querySelector('.slide__text');\n  var slideData = _data_json__WEBPACK_IMPORTED_MODULE_0__;\n  var mobileImages = [_assets_images_slideshow_mobile_image_hero_1_jpg__WEBPACK_IMPORTED_MODULE_1__, _assets_images_slideshow_mobile_image_hero_2_jpg__WEBPACK_IMPORTED_MODULE_2__, _assets_images_slideshow_mobile_image_hero_3_jpg__WEBPACK_IMPORTED_MODULE_3__];\n  var desktopImages = [_assets_images_slideshow_desktop_image_hero_1_jpg__WEBPACK_IMPORTED_MODULE_4__, _assets_images_slideshow_desktop_image_hero_2_jpg__WEBPACK_IMPORTED_MODULE_5__, _assets_images_slideshow_desktop_image_hero_3_jpg__WEBPACK_IMPORTED_MODULE_6__];\n  var currentSlide = 0;\n\n  function updateData() {\n    if (window.matchMedia('(min-width: 576px)').matches) {\n      image.style.backgroundImage = \"url(\".concat(desktopImages[currentSlide], \")\");\n    } else {\n      image.style.backgroundImage = \"url(\".concat(mobileImages[currentSlide], \")\");\n    }\n\n    title.innerHTML = slideData[currentSlide].slideTitle;\n    text.innerHTML = slideData[currentSlide].slideText;\n  }\n\n  function showPrev() {\n    currentSlide -= 1;\n\n    if (currentSlide < 0) {\n      currentSlide = slideData.length - 1;\n    }\n\n    updateData();\n  }\n\n  function showNext() {\n    currentSlide += 1;\n\n    if (currentSlide > slideData.length - 1) {\n      currentSlide = 0;\n    }\n\n    updateData();\n  }\n\n  function keyDownHandler(event) {\n    if (event.keyCode === 37) {\n      showPrev();\n    } else if (event.keyCode === 39) {\n      showNext();\n    }\n  }\n\n  document.querySelector('.button--prev').addEventListener('click', showPrev);\n  document.querySelector('.button--next').addEventListener('click', showNext);\n  document.addEventListener('keydown', keyDownHandler);\n}\n\nshowSlide();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showSlide);\n\n//# sourceURL=webpack://room-homepage/./src/javascript/slideshow.js?");

/***/ }),

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://room-homepage/./src/sass/app.scss?");

/***/ }),

/***/ "./src/assets/images/slideshow/desktop-image-hero-1.jpg":
/*!**************************************************************!*\
  !*** ./src/assets/images/slideshow/desktop-image-hero-1.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/91901d0d47ea68db9434.jpg\";\n\n//# sourceURL=webpack://room-homepage/./src/assets/images/slideshow/desktop-image-hero-1.jpg?");

/***/ }),

/***/ "./src/assets/images/slideshow/desktop-image-hero-2.jpg":
/*!**************************************************************!*\
  !*** ./src/assets/images/slideshow/desktop-image-hero-2.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/9d35405672f4fca67945.jpg\";\n\n//# sourceURL=webpack://room-homepage/./src/assets/images/slideshow/desktop-image-hero-2.jpg?");

/***/ }),

/***/ "./src/assets/images/slideshow/desktop-image-hero-3.jpg":
/*!**************************************************************!*\
  !*** ./src/assets/images/slideshow/desktop-image-hero-3.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/05fd679aa0d31e01c176.jpg\";\n\n//# sourceURL=webpack://room-homepage/./src/assets/images/slideshow/desktop-image-hero-3.jpg?");

/***/ }),

/***/ "./src/assets/images/slideshow/mobile-image-hero-1.jpg":
/*!*************************************************************!*\
  !*** ./src/assets/images/slideshow/mobile-image-hero-1.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/5de3d1472db703fb2f8a.jpg\";\n\n//# sourceURL=webpack://room-homepage/./src/assets/images/slideshow/mobile-image-hero-1.jpg?");

/***/ }),

/***/ "./src/assets/images/slideshow/mobile-image-hero-2.jpg":
/*!*************************************************************!*\
  !*** ./src/assets/images/slideshow/mobile-image-hero-2.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/51db290a00388a5a0bea.jpg\";\n\n//# sourceURL=webpack://room-homepage/./src/assets/images/slideshow/mobile-image-hero-2.jpg?");

/***/ }),

/***/ "./src/assets/images/slideshow/mobile-image-hero-3.jpg":
/*!*************************************************************!*\
  !*** ./src/assets/images/slideshow/mobile-image-hero-3.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/601d0f37f7ff5e62008c.jpg\";\n\n//# sourceURL=webpack://room-homepage/./src/assets/images/slideshow/mobile-image-hero-3.jpg?");

/***/ }),

/***/ "./src/javascript/data.json":
/*!**********************************!*\
  !*** ./src/javascript/data.json ***!
  \**********************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"slideTitle\":\"Discover innovative ways to decorate\",\"slideText\":\"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.\"},{\"slideTitle\":\"We are available all across the globe\",\"slideText\":\"With stores all over the world, it\\'s easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don\\'t hesitate to contact us today.\"},{\"slideTitle\":\"Manufactured with the best materials\",\"slideText\":\"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.\"}]');\n\n//# sourceURL=webpack://room-homepage/./src/javascript/data.json?");

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
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