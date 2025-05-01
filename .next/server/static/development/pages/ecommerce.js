module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./assets/img/dg1.jpg":
/*!****************************!*\
  !*** ./assets/img/dg1.jpg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2RnMS5qcGciOw==");

/***/ }),

/***/ "./assets/img/dg10.jpg":
/*!*****************************!*\
  !*** ./assets/img/dg10.jpg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2RnMTAuanBnIjs=");

/***/ }),

/***/ "./assets/img/dg3.jpg":
/*!****************************!*\
  !*** ./assets/img/dg3.jpg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2RnMy5qcGciOw==");

/***/ }),

/***/ "./assets/img/dg6.jpg":
/*!****************************!*\
  !*** ./assets/img/dg6.jpg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2RnNi5qcGciOw==");

/***/ }),

/***/ "./assets/img/dg9.jpg":
/*!****************************!*\
  !*** ./assets/img/dg9.jpg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2RnOS5qcGciOw==");

/***/ }),

/***/ "./assets/img/examples/clark-street-merc.jpg":
/*!***************************************************!*\
  !*** ./assets/img/examples/clark-street-merc.jpg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NsYXJrLXN0cmVldC1tZXJjLmpwZyI7");

/***/ }),

/***/ "./assets/img/examples/color1.jpg":
/*!****************************************!*\
  !*** ./assets/img/examples/color1.jpg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NvbG9yMS5qcGciOw==");

/***/ }),

/***/ "./assets/img/examples/color2.jpg":
/*!****************************************!*\
  !*** ./assets/img/examples/color2.jpg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NvbG9yMi5qcGciOw==");

/***/ }),

/***/ "./assets/img/examples/color3.jpg":
/*!****************************************!*\
  !*** ./assets/img/examples/color3.jpg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NvbG9yMy5qcGciOw==");

/***/ }),

/***/ "./assets/img/examples/dolce.jpg":
/*!***************************************!*\
  !*** ./assets/img/examples/dolce.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2RvbGNlLmpwZyI7");

/***/ }),

/***/ "./assets/img/examples/ecommerce-header.jpg":
/*!**************************************************!*\
  !*** ./assets/img/examples/ecommerce-header.jpg ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Vjb21tZXJjZS1oZWFkZXIuanBnIjs=");

/***/ }),

/***/ "./assets/img/examples/gucci.jpg":
/*!***************************************!*\
  !*** ./assets/img/examples/gucci.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2d1Y2NpLmpwZyI7");

/***/ }),

/***/ "./assets/img/examples/suit-1.jpg":
/*!****************************************!*\
  !*** ./assets/img/examples/suit-1.jpg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3N1aXQtMS5qcGciOw==");

/***/ }),

/***/ "./assets/img/examples/suit-2.jpg":
/*!****************************************!*\
  !*** ./assets/img/examples/suit-2.jpg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3N1aXQtMi5qcGciOw==");

/***/ }),

/***/ "./assets/img/examples/suit-3.jpg":
/*!****************************************!*\
  !*** ./assets/img/examples/suit-3.jpg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3N1aXQtMy5qcGciOw==");

/***/ }),

/***/ "./assets/img/examples/suit-4.jpg":
/*!****************************************!*\
  !*** ./assets/img/examples/suit-4.jpg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3N1aXQtNC5qcGciOw==");

/***/ }),

/***/ "./assets/img/examples/suit-5.jpg":
/*!****************************************!*\
  !*** ./assets/img/examples/suit-5.jpg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3N1aXQtNS5qcGciOw==");

/***/ }),

/***/ "./assets/img/examples/suit-6.jpg":
/*!****************************************!*\
  !*** ./assets/img/examples/suit-6.jpg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3N1aXQtNi5qcGciOw==");

/***/ }),

/***/ "./assets/img/examples/tom-ford.jpg":
/*!******************************************!*\
  !*** ./assets/img/examples/tom-ford.jpg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3RvbS1mb3JkLmpwZyI7");

/***/ }),

/***/ "./assets/img/faces/card-profile1-square.jpg":
/*!***************************************************!*\
  !*** ./assets/img/faces/card-profile1-square.jpg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NhcmQtcHJvZmlsZTEtc3F1YXJlLmpwZyI7");

/***/ }),

/***/ "./assets/img/faces/card-profile2-square.jpg":
/*!***************************************************!*\
  !*** ./assets/img/faces/card-profile2-square.jpg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NhcmQtcHJvZmlsZTItc3F1YXJlLmpwZyI7");

/***/ }),

/***/ "./assets/img/faces/card-profile4-square.jpg":
/*!***************************************************!*\
  !*** ./assets/img/faces/card-profile4-square.jpg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NhcmQtcHJvZmlsZTQtc3F1YXJlLmpwZyI7");

/***/ }),

/***/ "./assets/img/faces/card-profile5-square.jpg":
/*!***************************************************!*\
  !*** ./assets/img/faces/card-profile5-square.jpg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NhcmQtcHJvZmlsZTUtc3F1YXJlLmpwZyI7");

/***/ }),

/***/ "./assets/img/faces/card-profile6-square.jpg":
/*!***************************************************!*\
  !*** ./assets/img/faces/card-profile6-square.jpg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NhcmQtcHJvZmlsZTYtc3F1YXJlLmpwZyI7");

/***/ }),

/***/ "./assets/img/faces/christian.jpg":
/*!****************************************!*\
  !*** ./assets/img/faces/christian.jpg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NocmlzdGlhbi5qcGciOw==");

/***/ }),

/***/ "./assets/img/faces/kendall.jpg":
/*!**************************************!*\
  !*** ./assets/img/faces/kendall.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2tlbmRhbGwuanBnIjs=");

/***/ }),

/***/ "./assets/img/faces/marc.jpg":
/*!***********************************!*\
  !*** ./assets/img/faces/marc.jpg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21hcmMuanBnIjs=");

/***/ }),

/***/ "./assets/jss/nextjs-material-tim-andrus.js":
/*!**************************************************!*\
  !*** ./assets/jss/nextjs-material-tim-andrus.js ***!
  \**************************************************/
/*! exports provided: drawerWidth, transition, container, containerFluid, boxShadow, card, defaultFont, primaryColor, secondaryColor, warningColor, dangerColor, successColor, infoColor, roseColor, grayColor, whiteColor, blackColor, twitterColor, facebookColor, googleColor, linkedinColor, pinterestColor, youtubeColor, tumblrColor, behanceColor, dribbbleColor, redditColor, instagramColor, primaryBoxShadow, infoBoxShadow, successBoxShadow, warningBoxShadow, dangerBoxShadow, roseBoxShadow, warningCardHeader, successCardHeader, dangerCardHeader, infoCardHeader, primaryCardHeader, roseCardHeader, cardActions, cardHeader, defaultBoxShadow, title, cardTitle, description, cardLink, cardSubtitle, main, mainRaised, section, sectionDark, sectionDescription, mlAuto, mrAuto, btnLink, coloredShadow, hexToRgb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawerWidth", function() { return drawerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "container", function() { return container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerFluid", function() { return containerFluid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxShadow", function() { return boxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "card", function() { return card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFont", function() { return defaultFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryColor", function() { return primaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secondaryColor", function() { return secondaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningColor", function() { return warningColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerColor", function() { return dangerColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successColor", function() { return successColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoColor", function() { return infoColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseColor", function() { return roseColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grayColor", function() { return grayColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whiteColor", function() { return whiteColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blackColor", function() { return blackColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "twitterColor", function() { return twitterColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "facebookColor", function() { return facebookColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleColor", function() { return googleColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkedinColor", function() { return linkedinColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pinterestColor", function() { return pinterestColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "youtubeColor", function() { return youtubeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tumblrColor", function() { return tumblrColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "behanceColor", function() { return behanceColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dribbbleColor", function() { return dribbbleColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redditColor", function() { return redditColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instagramColor", function() { return instagramColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryBoxShadow", function() { return primaryBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoBoxShadow", function() { return infoBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successBoxShadow", function() { return successBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningBoxShadow", function() { return warningBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerBoxShadow", function() { return dangerBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseBoxShadow", function() { return roseBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningCardHeader", function() { return warningCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successCardHeader", function() { return successCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerCardHeader", function() { return dangerCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoCardHeader", function() { return infoCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryCardHeader", function() { return primaryCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseCardHeader", function() { return roseCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardActions", function() { return cardActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardHeader", function() { return cardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBoxShadow", function() { return defaultBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardTitle", function() { return cardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "description", function() { return description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardLink", function() { return cardLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardSubtitle", function() { return cardSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainRaised", function() { return mainRaised; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "section", function() { return section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sectionDark", function() { return sectionDark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sectionDescription", function() { return sectionDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mlAuto", function() { return mlAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrAuto", function() { return mrAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btnLink", function() { return btnLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coloredShadow", function() { return coloredShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return hexToRgb; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const hexToRgb = input => {
  input = input + "";
  input = input.replace("#", "");
  let hexRegex = /[0-9A-Fa-f]/g;

  if (!hexRegex.test(input) || input.length !== 3 && input.length !== 6) {
    throw new Error("input is not a valid hex color.");
  }

  if (input.length === 3) {
    let first = input[0];
    let second = input[1];
    let last = input[2];
    input = first + first + second + second + last + last;
  }

  input = input.toUpperCase(input);
  let first = input[0] + input[1];
  let second = input[2] + input[3];
  let last = input[4] + input[5];
  return parseInt(first, 16) + ", " + parseInt(second, 16) + ", " + parseInt(last, 16);
};

const drawerWidth = 260;
const primaryColor = ["#9c27b0", "#ab47bc", "#8e24aa", "#af2cc5", "#e1bee7", "#ba68c8"];
const secondaryColor = ["#fafafa"];
const warningColor = ["#ff9800", "#ffa726", "#fb8c00", "#ffa21a", "#fcf8e3", "#faf2cc", "#ffe0b2", "#ffb74d"];
const dangerColor = ["#f44336", "#ef5350", "#e53935", "#f55a4e", "#f2dede", "#ebcccc", "ef9a9a", "#ef5350"];
const successColor = ["#4caf50", "#66bb6a", "#43a047", "#5cb860", "#dff0d8", "#d0e9c6", "#a5d6a7", "#66bb6a"];
const infoColor = ["#00acc1", "#26c6da", "#00acc1", "#00d3ee", "#d9edf7", "#c4e3f3", "#b2ebf2", "#4dd0e1"];
const roseColor = ["#e91e63", "#ec407a", "#d81b60", "#f8bbd0", "#f06292"];
const grayColor = ["#999", "#3C4858", "#eee", "#343434", "#585858", "#232323", "#ddd", "#6c757d", "#333", "#212121", "#777", "#D2D2D2", "#AAA", "#495057", "#e5e5e5", "#555", "#f9f9f9", "#ccc", "#444", "#f2f2f2", "#89229b", "#c0c1c2", "#9a9a9a", "#f5f5f5", "#505050", "#1f1f1f"];
const whiteColor = "#FFF";
const blackColor = "#000";
const twitterColor = "#55acee";
const facebookColor = "#3b5998";
const googleColor = "#dd4b39";
const linkedinColor = "#0976b4";
const pinterestColor = "#cc2127";
const youtubeColor = "#e52d27";
const tumblrColor = "#35465c";
const behanceColor = "#1769ff";
const dribbbleColor = "#ea4c89";
const redditColor = "#ff4500";
const instagramColor = "#125688";
const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};
const containerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%"
};

const container = _objectSpread({}, containerFluid, {
  "@media (min-width: 576px)": {
    maxWidth: "540px"
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px"
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px"
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px"
  }
});

const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
  borderRadius: "3px",
  color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
  background: whiteColor
};
const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};
const boxShadow = {
  boxShadow: "0 10px 30px -12px rgba(" + hexToRgb(blackColor) + ", 0.42), 0 4px 25px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)"
};
const primaryBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(" + hexToRgb(primaryColor[0]) + ", 0.28), 0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 7px 8px -5px rgba(" + hexToRgb(primaryColor[0]) + ", 0.2)"
};
const infoBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(" + hexToRgb(infoColor[0]) + ", 0.28), 0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 7px 8px -5px rgba(" + hexToRgb(infoColor[0]) + ", 0.2)"
};
const successBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(" + hexToRgb(successColor[0]) + ", 0.28), 0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 7px 8px -5px rgba(" + hexToRgb(successColor[0]) + ", 0.2)"
};
const warningBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(" + hexToRgb(warningColor[0]) + ", 0.28), 0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 7px 8px -5px rgba(" + hexToRgb(warningColor[0]) + ", 0.2)"
};
const dangerBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(" + hexToRgb(dangerColor[0]) + ", 0.28), 0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 7px 8px -5px rgba(" + hexToRgb(dangerColor[0]) + ", 0.2)"
};
const roseBoxShadow = {
  boxShadow: "0 4px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.14), 0 7px 10px -5px rgba(" + hexToRgb(roseColor[0]) + ", 0.4)"
};

const warningCardHeader = _objectSpread({
  color: whiteColor,
  background: "linear-gradient(60deg, " + warningColor[1] + ", " + warningColor[2] + ")"
}, warningBoxShadow);

const successCardHeader = _objectSpread({
  color: whiteColor,
  background: "linear-gradient(60deg, " + successColor[1] + ", " + successColor[2] + ")"
}, successBoxShadow);

const dangerCardHeader = _objectSpread({
  color: whiteColor,
  background: "linear-gradient(60deg, " + dangerColor[1] + ", " + dangerColor[2] + ")"
}, dangerBoxShadow);

const infoCardHeader = _objectSpread({
  color: whiteColor,
  background: "linear-gradient(60deg, " + infoColor[1] + ", " + infoColor[2] + ")"
}, infoBoxShadow);

const primaryCardHeader = _objectSpread({
  color: whiteColor,
  background: "linear-gradient(60deg, " + primaryColor[1] + ", " + primaryColor[2] + ")"
}, primaryBoxShadow);

const roseCardHeader = _objectSpread({
  color: whiteColor,
  background: "linear-gradient(60deg, " + roseColor[1] + ", " + roseColor[2] + ")"
}, roseBoxShadow);

const cardActions = _objectSpread({
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid  " + grayColor[2],
  height: "auto"
}, defaultFont);

const cardHeader = {
  margin: "-30px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};
const defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow: "0 10px 20px -12px rgba(" + hexToRgb(blackColor) + ", 0.42), 0 3px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};
const title = {
  color: grayColor[1],
  textDecoration: "none",
  fontWeight: "700",
  marginTop: "30px",
  marginBottom: "25px",
  minHeight: "32px",
  fontFamily: `"Roboto Slab", "Times New Roman", serif`
};
const cardTitle = {
  "&, & a": _objectSpread({}, title, {
    marginTop: ".625rem",
    marginBottom: "0.75rem",
    minHeight: "auto"
  })
};
const cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};
const cardSubtitle = {
  marginBottom: "0",
  marginTop: "-.375rem"
};
const main = {
  background: whiteColor,
  position: "relative",
  zIndex: "3"
};
const mainRaised = {
  "@media (max-width: 576px)": {
    marginTop: "-30px"
  },
  "@media (max-width: 830px)": {
    marginLeft: "10px",
    marginRight: "10px"
  },
  margin: "-60px 30px 0px",
  borderRadius: "6px",
  boxShadow: "0 16px 24px 2px rgba(" + hexToRgb(blackColor) + ", 0.14), 0 6px 30px 5px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)"
};
const section = {
  backgroundPosition: "50%",
  backgroundSize: "cover"
};
const sectionDark = {
  backgroundColor: grayColor[3],
  background: "radial-gradient(ellipse at center," + grayColor[4] + " 0," + grayColor[5] + " 100%)"
};
const sectionDescription = {
  marginTop: "130px"
};
const description = {
  color: grayColor[0]
};
const mlAuto = {
  marginLeft: "auto"
};
const mrAuto = {
  marginRight: "auto"
};
const btnLink = {
  backgroundColor: "transparent",
  boxShdow: "none",
  marginTop: "5px",
  marginBottom: "5px"
};
const coloredShadow = {
  // some jss/css to make the cards look a bit better on Internet Explorer
  "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
    display: "none !important"
  },
  transform: "scale(0.94)",
  top: "12px",
  filter: "blur(12px)",
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  zIndex: "-1",
  transition: "opacity .45s",
  opacity: "0"
};


/***/ }),

/***/ "./assets/jss/nextjs-material-tim-andrus/components/accordionStyle.js":
/*!****************************************************************************!*\
  !*** ./assets/jss/nextjs-material-tim-andrus/components/accordionStyle.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus.js */ "./assets/jss/nextjs-material-tim-andrus.js");


const accordionStyle = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: "20px"
  },
  expansionPanel: {
    boxShadow: "none",
    "&:before": {
      display: "none !important"
    }
  },
  expansionPanelExpanded: {
    margin: "0 !important"
  },
  expansionPanelSummary: {
    minHeight: "auto !important",
    backgroundColor: "transparent",
    borderBottom: "1px solid " + assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][6],
    padding: "25px 10px 5px 0px",
    borderTopLeftRadius: "3px",
    borderTopRightRadius: "3px",
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][1]
  },
  primaryExpansionPanelSummary: {
    "&:hover": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]
    }
  },
  secondaryExpansionPanelSummary: {
    "&:hover": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["secondaryColor"][0]
    }
  },
  warningExpansionPanelSummary: {
    "&:hover": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]
    }
  },
  dangerExpansionPanelSummary: {
    "&:hover": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]
    }
  },
  successExpansionPanelSummary: {
    "&:hover": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]
    }
  },
  infoExpansionPanelSummary: {
    "&:hover": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]
    }
  },
  roseExpansionPanelSummary: {
    "&:hover": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]
    }
  },
  expansionPanelSummaryExpaned: {
    "& $expansionPanelSummaryExpandIcon": {
      [theme.breakpoints.up("md")]: {
        top: "auto !important"
      },
      transform: "rotate(180deg)",
      [theme.breakpoints.down("sm")]: {
        top: "10px !important"
      },
      // some jss/css to make the cards look a bit better on Internet Explorer
      "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
        display: "inline-block !important",
        top: "10px !important"
      }
    }
  },
  primaryExpansionPanelSummaryExpaned: {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]
  },
  secondaryExpansionPanelSummaryExpaned: {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["secondaryColor"][0]
  },
  warningExpansionPanelSummaryExpaned: {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]
  },
  dangerExpansionPanelSummaryExpaned: {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]
  },
  successExpansionPanelSummaryExpaned: {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]
  },
  infoExpansionPanelSummaryExpaned: {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]
  },
  roseExpansionPanelSummaryExpaned: {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]
  },
  expansionPanelSummaryContent: {
    margin: "0 !important"
  },
  expansionPanelSummaryExpandIcon: {
    [theme.breakpoints.up("md")]: {
      top: "auto !important"
    },
    transform: "rotate(0deg)",
    color: "inherit",
    right: "10px",
    position: "absolute",
    [theme.breakpoints.down("sm")]: {
      top: "10px !important"
    },
    // some jss/css to make the cards look a bit better on Internet Explorer
    "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
      display: "inline-block !important"
    }
  },
  expansionPanelSummaryExpandIconExpanded: {},
  title: {
    fontSize: "15px",
    fontWeight: "bolder",
    marginTop: "0",
    marginBottom: "0",
    color: "inherit"
  },
  expansionPanelDetails: {
    display: "block",
    padding: "15px 0px 5px",
    fontSize: ".875rem"
  }
});

/* harmony default export */ __webpack_exports__["default"] = (accordionStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-tim-andrus/components/buttonStyle.js":
/*!*************************************************************************!*\
  !*** ./assets/jss/nextjs-material-tim-andrus/components/buttonStyle.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus.js */ "./assets/jss/nextjs-material-tim-andrus.js");

const buttonStyle = {
  button: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0],
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]) + ", 0.12)",
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    fontSize: "12px",
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]) + ", 0.2)"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      display: "inline-block",
      top: "0",
      marginTop: "-1em",
      marginBottom: "-1em",
      fontSize: "1.1rem",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "& svg": {
      position: "relative",
      display: "inline-block",
      top: "0",
      width: "18px",
      height: "18px",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        marginTop: "0px",
        marginRight: "0px",
        position: "absolute",
        width: "100%",
        transform: "none",
        left: "0px",
        top: "0px",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px"
      }
    }
  },
  fullWidth: {
    width: "100%"
  },
  primary: {
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]) + ", 0.2)"
    }
  },
  secondary: {
    color: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ",.87)",
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["secondaryColor"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["secondaryColor"][0]) + ",.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["secondaryColor"][0]) + ",.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["secondaryColor"][0]) + ",.12)",
    "&:hover,&:focus": {
      boxShdow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["secondaryColor"][0]) + ",.42), 0 4px 23px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ",.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["secondaryColor"][0]) + ",.2)",
      color: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ",.87)",
      backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][19]
    }
  },
  info: {
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]) + ", 0.2)"
    }
  },
  success: {
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]) + ", 0.2)"
    }
  },
  warning: {
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]) + ", 0.2)"
    }
  },
  danger: {
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]) + ", 0.2)"
    }
  },
  rose: {
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]) + ", 0.2)"
    }
  },
  white: {
    "&,&:focus,&:hover": {
      backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]
    }
  },
  twitter: {
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["twitterColor"],
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["twitterColor"]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["twitterColor"]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["twitterColor"]) + ", 0.12)",
    "&:hover,&:focus,&:visited": {
      backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["twitterColor"],
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["twitterColor"]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["twitterColor"]) + ", 0.2)"
    }
  },
  facebook: {
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["facebookColor"],
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["facebookColor"]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["facebookColor"]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["facebookColor"]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["facebookColor"],
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["facebookColor"]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["facebookColor"]) + ", 0.2)"
    }
  },
  google: {
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["googleColor"],
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["googleColor"]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["googleColor"]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["googleColor"]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["googleColor"],
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["googleColor"]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["googleColor"]) + ", 0.2)"
    }
  },
  linkedin: {
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["linkedinColor"],
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["linkedinColor"]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["linkedinColor"]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["linkedinColor"]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["linkedinColor"],
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["linkedinColor"]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["linkedinColor"]) + ", 0.2)"
    }
  },
  pinterest: {
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["pinterestColor"],
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["pinterestColor"]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["pinterestColor"]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["pinterestColor"]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["pinterestColor"],
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["pinterestColor"]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["pinterestColor"]) + ", 0.2)"
    }
  },
  youtube: {
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["youtubeColor"],
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["youtubeColor"]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["youtubeColor"]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["youtubeColor"]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["youtubeColor"],
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["youtubeColor"]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["youtubeColor"]) + ", 0.2)"
    }
  },
  tumblr: {
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["tumblrColor"],
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["tumblrColor"]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["tumblrColor"]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["tumblrColor"]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["tumblrColor"],
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["tumblrColor"]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["tumblrColor"]) + ", 0.2)"
    }
  },
  github: {
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][8],
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][8]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][8]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][8]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][8],
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][8]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][8]) + ", 0.2)"
    }
  },
  behance: {
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["behanceColor"],
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["behanceColor"]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["behanceColor"]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["behanceColor"]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["behanceColor"],
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["behanceColor"]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["behanceColor"]) + ", 0.2)"
    }
  },
  dribbble: {
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dribbbleColor"],
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dribbbleColor"]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dribbbleColor"]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dribbbleColor"]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dribbbleColor"],
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dribbbleColor"]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dribbbleColor"]) + ", 0.2)"
    }
  },
  reddit: {
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["redditColor"],
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["redditColor"]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["redditColor"]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["redditColor"]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["redditColor"],
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["redditColor"]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["redditColor"]) + ", 0.2)"
    }
  },
  instagram: {
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["instagramColor"],
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["instagramColor"]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["instagramColor"]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["instagramColor"]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["instagramColor"],
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["instagramColor"]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["instagramColor"]) + ", 0.2)"
    }
  },
  simple: {
    "&,&:focus,&:hover": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      background: "transparent",
      boxShadow: "none"
    },
    "&$primary": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]
      }
    },
    "&$info": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]
      }
    },
    "&$success": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]
      }
    },
    "&$warning": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]
      }
    },
    "&$rose": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]
      }
    },
    "&$danger": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]
      }
    },
    "&$twitter": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["twitterColor"]
      }
    },
    "&$facebook": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["facebookColor"]
      }
    },
    "&$google": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["googleColor"]
      }
    },
    "&$linkedin": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["linkedinColor"]
      }
    },
    "&$pinterest": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["pinterestColor"]
      }
    },
    "&$youtube": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["youtubeColor"]
      }
    },
    "&$tumblr": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["tumblrColor"]
      }
    },
    "&$github": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][8]
      }
    },
    "&$behance": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["behanceColor"]
      }
    },
    "&$dribbble": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dribbbleColor"]
      }
    },
    "&$reddit": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["redditColor"]
      }
    },
    "&$instagram": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["instagramColor"]
      }
    }
  },
  transparent: {
    "&,&:focus,&:hover": {
      color: "inherit",
      background: "transparent",
      boxShadow: "none"
    }
  },
  disabled: {
    opacity: "0.65",
    pointerEvents: "none"
  },
  lg: {
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
        marginTop: "-4px"
      }
    },
    padding: "1.125rem 2.25rem",
    fontSize: "0.875rem",
    lineHeight: "1.333333",
    borderRadius: "0.2rem"
  },
  sm: {
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
        marginTop: "1px"
      }
    },
    padding: "0.40625rem 1.25rem",
    fontSize: "0.6875rem",
    lineHeight: "1.5",
    borderRadius: "0.2rem"
  },
  round: {
    borderRadius: "30px"
  },
  block: {
    width: "100% !important"
  },
  link: {
    "&,&:hover,&:focus": {
      backgroundColor: "transparent",
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0],
      boxShadow: "none"
    }
  },
  justIcon: {
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "20px",
    height: "41px",
    minWidth: "41px",
    width: "41px",
    "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
      marginRight: "0px"
    },
    "&$lg": {
      height: "57px",
      minWidth: "57px",
      width: "57px",
      lineHeight: "56px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "32px",
        lineHeight: "56px"
      },
      "& svg": {
        width: "32px",
        height: "32px"
      }
    },
    "&$sm": {
      height: "30px",
      minWidth: "30px",
      width: "30px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "17px",
        lineHeight: "29px"
      },
      "& svg": {
        width: "17px",
        height: "17px"
      }
    }
  },
  fileButton: {// display: "inline-block"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (buttonStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-tim-andrus/components/cardBodyStyle.js":
/*!***************************************************************************!*\
  !*** ./assets/jss/nextjs-material-tim-andrus/components/cardBodyStyle.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus.js */ "./assets/jss/nextjs-material-tim-andrus.js");

const cardBodyStyle = {
  cardBody: {
    padding: "0.9375rem 1.875rem",
    flex: "1 1 auto",
    WebkitBoxFlex: "1"
  },
  cardBodyBackground: {
    position: "relative",
    zIndex: "2",
    minHeight: "280px",
    paddingTop: "40px",
    paddingBottom: "40px",
    maxWidth: "440px",
    margin: "0 auto"
  },
  cardBodyPlain: {
    paddingLeft: "5px",
    paddingRight: "5px"
  },
  cardBodyFormHorizontal: {
    paddingLeft: "15px",
    paddingRight: "15px",
    "& form": {
      margin: "0"
    }
  },
  cardPricing: {
    padding: "15px!important",
    margin: "0px!important"
  },
  cardSignup: {
    padding: "0px 30px 0px 30px"
  },
  cardBodyColor: {
    borderRadius: "6px",
    "& h1,& h2,& h3": {
      "& small": {
        color: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]) + ", 0.8)"
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (cardBodyStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-tim-andrus/components/cardFooterStyle.js":
/*!*****************************************************************************!*\
  !*** ./assets/jss/nextjs-material-tim-andrus/components/cardFooterStyle.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const cardFooterStyle = {
  cardFooter: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: "0.9375rem 1.875rem",
    paddingTop: "0"
  },
  cardFooterProfile: {
    marginTop: "-15px"
  },
  cardFooterPlain: {
    paddingLeft: "5px",
    paddingRight: "5px",
    backgroundColor: "transparent"
  },
  cardFooterPricing: {
    zIndex: "2"
  },
  cardFooterTestimonial: {
    display: "block"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (cardFooterStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-tim-andrus/components/cardHeaderStyle.js":
/*!*****************************************************************************!*\
  !*** ./assets/jss/nextjs-material-tim-andrus/components/cardHeaderStyle.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus.js */ "./assets/jss/nextjs-material-tim-andrus.js");

const cardHeaderStyle = {
  cardHeader: {
    borderRadius: "3px",
    padding: "1rem 15px",
    marginLeft: "15px",
    marginRight: "15px",
    marginTop: "-30px",
    border: "0",
    marginBottom: "0"
  },
  cardHeaderPlain: {
    marginLeft: "0px",
    marginRight: "0px",
    "&$cardHeaderImage": {
      margin: "0 !important"
    }
  },
  cardHeaderImage: {
    position: "relative",
    padding: "0",
    zIndex: "1",
    marginLeft: "15px",
    marginRight: "15px",
    marginTop: "-30px",
    borderRadius: "6px",
    "& img": {
      width: "100%",
      borderRadius: "6px",
      pointerEvents: "none",
      boxShadow: "0 5px 15px -8px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.24), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.2)"
    },
    "& a": {
      display: "block"
    }
  },
  noShadow: {
    "& img": {
      boxShadow: "none !important"
    }
  },
  cardHeaderContact: {
    margin: "0 15px",
    marginTop: "-20px"
  },
  cardHeaderSignup: {
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    width: "100%",
    marginBottom: "15px"
  },
  warningCardHeader: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["warningCardHeader"],
  successCardHeader: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["successCardHeader"],
  dangerCardHeader: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dangerCardHeader"],
  infoCardHeader: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["infoCardHeader"],
  primaryCardHeader: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["primaryCardHeader"],
  roseCardHeader: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["roseCardHeader"]
};
/* harmony default export */ __webpack_exports__["default"] = (cardHeaderStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-tim-andrus/components/cardStyle.js":
/*!***********************************************************************!*\
  !*** ./assets/jss/nextjs-material-tim-andrus/components/cardStyle.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus.js */ "./assets/jss/nextjs-material-tim-andrus.js");

const cardStyle = {
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.87)",
    background: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    width: "100%",
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    // some jss/css to make the cards look a bit better on Internet Explorer
    "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
      display: "inline-block !important"
    }
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardProfile: {
    marginTop: "30px",
    textAlign: "center"
  },
  cardBlog: {
    marginTop: "60px"
  },
  cardRaised: {
    boxShadow: "0 16px 38px -12px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.56), 0 4px 25px 0px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.2)"
  },
  cardBackground: {
    backgroundPosition: "50%",
    backgroundSize: "cover",
    textAlign: "center",
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    "& h3": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"] + " !important"
    },
    "& p": {
      color: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]) + ",0.7)!important"
    },
    "&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""',
      backgroundColor: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.56)",
      borderRadius: "6px"
    },
    "& small": {
      color: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]) + ", 0.7) !important"
    }
  },
  cardPricing: {
    textAlign: "center",
    "&:after": {
      backgroundColor: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.7) !important"
    },
    "& ul": {
      listStyle: "none",
      padding: 0,
      maxWidth: "240px",
      margin: "10px auto"
    },
    "& ul li": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0],
      textAlign: "center",
      padding: "12px 0px",
      borderBottom: "1px solid rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]) + ",0.3)"
    },
    "& ul li:last-child": {
      border: 0
    },
    "& ul li b": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][1]
    },
    "& h1": {
      marginTop: "30px"
    },
    "& h1 small": {
      display: "inline-flex",
      height: 0,
      fontSize: "18px"
    },
    "& h1 small:first-child": {
      position: "relative",
      top: "-17px",
      fontSize: "26px"
    },
    "& ul li svg,& ul li .fab,& ul li .fas,& ul li .far,& ul li .fal,& ul li .material-icons": {
      position: "relative",
      top: "7px"
    }
  },
  cardPricingColor: {
    "& ul li": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      borderColor: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]) + ",0.3)",
      "& b, & svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
        color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
        fontWeight: "700"
      }
    }
  },
  cardProduct: {
    marginTop: "30px"
  },
  primary: {
    background: "linear-gradient(60deg," + assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][1] + ", " + assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][2] + ")",
    "& h1 small": {
      color: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]) + ", 0.8)"
    },
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
  },
  info: {
    background: "linear-gradient(60deg," + assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][1] + "," + assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][2] + ")",
    "& h1 small": {
      color: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]) + ", 0.8)"
    },
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
  },
  success: {
    background: "linear-gradient(60deg," + assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][1] + "," + assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][2] + ")",
    "& h1 small": {
      color: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]) + ", 0.8)"
    },
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
  },
  warning: {
    background: "linear-gradient(60deg," + assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][1] + "," + assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][2] + ")",
    "& h1 small": {
      color: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]) + ", 0.8)"
    },
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
  },
  danger: {
    background: "linear-gradient(60deg," + assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][1] + "," + assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][2] + ")",
    "& h1 small": {
      color: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]) + ", 0.8)"
    },
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
  },
  rose: {
    background: "linear-gradient(60deg," + assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][1] + "," + assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][2] + ")",
    "& h1 small": {
      color: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]) + ", 0.8)"
    },
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
  }
};
/* harmony default export */ __webpack_exports__["default"] = (cardStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-tim-andrus/components/customDropdownStyle.js":
/*!*********************************************************************************!*\
  !*** ./assets/jss/nextjs-material-tim-andrus/components/customDropdownStyle.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus.js */ "./assets/jss/nextjs-material-tim-andrus.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const customDropdownStyle = theme => ({
  popperClose: {
    pointerEvents: "none",
    display: "none !important"
  },
  popperNav: {
    [theme.breakpoints.down("sm")]: {
      "&, &$popperResponsive": {
        position: "static !important",
        left: "unset !important",
        top: "unset !important",
        transform: "none !important",
        willChange: "none !important",
        "& > div": {
          boxShadow: "none !important",
          marginLeft: "1.5rem",
          marginRight: "1.5rem",
          transition: "none !important",
          marginTop: "0px !important",
          marginBottom: "5px !important",
          padding: "0px !important"
        }
      }
    }
  },
  manager: {
    "& > div > button:first-child > span:first-child, & > div > a:first-child > span:first-child": {
      width: "100%"
    }
  },
  innerManager: {
    display: "block",
    "& > div > button,& > div > a": {
      margin: "0px !important",
      color: "inherit !important",
      padding: "10px 20px !important",
      "& > span:first-child": {
        width: "100%",
        justifyContent: "flex-start"
      }
    }
  },
  target: {
    "& > button:first-child > span:first-child, & > a:first-child > span:first-child": {
      display: "inline-block"
    },
    "& $caret": {
      marginLeft: "0px"
    }
  },
  dropdown: {
    borderRadius: "3px",
    border: "0",
    boxShadow: "0 2px 5px 0 rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.26)",
    top: "100%",
    zIndex: "1000",
    minWidth: "160px",
    padding: "5px 0",
    margin: "2px 0 0",
    fontSize: "14px",
    textAlign: "left",
    listStyle: "none",
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    backgroundClip: "padding-box"
  },
  menuList: {
    padding: "0"
  },
  popperResponsive: {
    zIndex: "1200",
    position: "absolute !important",
    [theme.breakpoints.down("sm")]: {
      zIndex: "1640",
      float: "none",
      width: "auto",
      marginTop: "0",
      backgroundColor: "transparent",
      border: "0",
      boxShadow: "none",
      color: "black"
    }
  },
  dropdownItem: _objectSpread({}, assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["defaultFont"], {
    fontSize: "13px",
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "2px",
    position: "relative",
    transition: "all 150ms linear",
    display: "block",
    clear: "both",
    fontWeight: "400",
    height: "100%",
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][8],
    whiteSpace: "nowrap",
    minHeight: "unset"
  }),
  darkHover: {
    "&:hover": {
      boxShadow: "0 4px 20px 0px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.14), 0 7px 10px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][9]) + ", 0.4)",
      backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][9],
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
    }
  },
  primaryHover: {
    "&:hover": _objectSpread({
      backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0],
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
    }, assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["primaryBoxShadow"])
  },
  infoHover: {
    "&:hover": _objectSpread({
      backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0],
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
    }, assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["infoBoxShadow"])
  },
  successHover: {
    "&:hover": _objectSpread({
      backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0],
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
    }, assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["successBoxShadow"])
  },
  warningHover: {
    "&:hover": _objectSpread({
      backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0],
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
    }, assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["warningBoxShadow"])
  },
  dangerHover: {
    "&:hover": _objectSpread({
      backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0],
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
    }, assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dangerBoxShadow"])
  },
  roseHover: {
    "&:hover": _objectSpread({
      backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0],
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
    }, assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["roseBoxShadow"])
  },
  dropdownItemRTL: {
    textAlign: "right"
  },
  dropdownDividerItem: {
    margin: "5px 0",
    backgroundColor: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12)",
    height: "1px",
    overflow: "hidden"
  },
  buttonIcon: {
    width: "20px",
    height: "20px"
  },
  caret: {
    transition: "all 150ms ease-in",
    display: "inline-block",
    width: "0",
    height: "0",
    marginLeft: "4px",
    verticalAlign: "middle",
    borderTop: "4px solid",
    borderRight: "4px solid transparent",
    borderLeft: "4px solid transparent"
  },
  caretActive: {
    transform: "rotate(180deg)"
  },
  caretDropup: {
    transform: "rotate(180deg)"
  },
  caretRTL: {
    marginRight: "4px"
  },
  dropdownHeader: {
    display: "block",
    padding: "0.1875rem 1.25rem",
    fontSize: "0.75rem",
    lineHeight: "1.428571",
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][10],
    whiteSpace: "nowrap",
    fontWeight: "inherit",
    marginTop: "10px",
    minHeight: "24px",
    "&:hover,&:focus": {
      backgroundColor: "transparent",
      cursor: "auto"
    }
  },
  noLiPadding: {
    padding: "0"
  }
});

/* harmony default export */ __webpack_exports__["default"] = (customDropdownStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-tim-andrus/components/customInputStyle.js":
/*!******************************************************************************!*\
  !*** ./assets/jss/nextjs-material-tim-andrus/components/customInputStyle.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus.js */ "./assets/jss/nextjs-material-tim-andrus.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const customInputStyle = {
  disabled: {
    "&:before": {
      backgroundColor: "transparent !important"
    }
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderBottomColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][11] + " !important",
      borderBottomWidth: "1px !important"
    },
    "&:after": {
      borderBottomColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]
    }
  },
  underlineError: {
    "&:after": {
      borderBottomColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]
    }
  },
  underlineSuccess: {
    "&:after": {
      borderBottomColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]
    }
  },
  labelRoot: _objectSpread({}, assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["defaultFont"], {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][12] + " !important",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.42857",
    top: "10px",
    letterSpacing: "unset",
    "& + $underline": {
      marginTop: "0px"
    }
  }),
  labelRootError: {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0] + " !important"
  },
  labelRootSuccess: {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0] + " !important"
  },
  feedback: {
    position: "absolute",
    bottom: "4px",
    right: "0",
    zIndex: "2",
    display: "block",
    width: "24px",
    height: "24px",
    textAlign: "center",
    pointerEvents: "none"
  },
  formControl: {
    margin: "0 0 17px 0",
    paddingTop: "27px",
    position: "relative",
    "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][13]
    }
  },
  whiteUnderline: {
    "&:hover:not($disabled):before,&:before": {
      borderBottomColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
    },
    "&:after": {
      borderBottomColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
    }
  },
  input: {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][13],
    height: "unset",
    "&,&::placeholder": {
      fontSize: "14px",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "400",
      lineHeight: "1.42857",
      opacity: "1"
    },
    "&::placeholder": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][12]
    }
  },
  whiteInput: {
    "&,&::placeholder": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      opacity: "1"
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (customInputStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-tim-andrus/components/footerStyle.js":
/*!*************************************************************************!*\
  !*** ./assets/jss/nextjs-material-tim-andrus/components/footerStyle.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus.js */ "./assets/jss/nextjs-material-tim-andrus.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const footerStyle = {
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right"
  },
  rightLinks: {
    float: "right!important",
    "& ul": {
      marginBottom: 0,
      marginTop: 10,
      padding: 0,
      listStyle: "none",
      height: 38,
      "& li": {
        display: "inline-block"
      }
    },
    "& i": {
      fontSize: "20px"
    }
  },
  footer: {
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative",
    "& ul": {
      marginBottom: "0",
      padding: 0,
      listStyle: "none"
    }
  },
  big: {
    padding: "1.875rem 0",
    "& h5, & h4": {
      fontWeight: 700,
      fontFamily: "Roboto Slab,Times New Roman,serif",
      marginBottom: "15px"
    },
    "& p": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]
    }
  },
  content: {
    textAlign: "left"
  },
  a: {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0],
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  dark: {
    background: "radial-gradient(ellipse at center," + assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][4] + " 0," + assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][5] + " 100%)",
    backgroundSize: "550% 450%",
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    "& p": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]
    },
    "& i": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
    },
    "& a": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      opacity: ".86",
      "&:visited": {
        color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
      },
      "&:focus, &:hover": {
        opacity: 1
      }
    },
    "& hr": {
      borderColor: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]) + ",0.2)"
    },
    "& $btnTwitter, & $btnDribbble, & $btnInstagram": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
    }
  },
  white: {
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][1],
    textDecoration: "none",
    "& a": {
      "&:visited": {
        color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][1]
      },
      "&:hover, &:focus": {
        color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][20]
      }
    }
  },
  container: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["container"],
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
  },
  iconSocial: {
    width: "41px",
    height: "41px",
    fontSize: "24px",
    minWidth: "41px",
    padding: 0,
    overflow: "hidden",
    position: "relative"
  },
  btnTwitter: _objectSpread({}, assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["btnLink"], {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["twitterColor"]
  }),
  btnDribbble: _objectSpread({}, assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["btnLink"], {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dribbbleColor"]
  }),
  btnInstagram: _objectSpread({}, assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["btnLink"], {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["instagramColor"]
  }),
  footerBrand: {
    height: "50px",
    padding: "15px 15px",
    fontSize: "18px",
    lineHeight: "50px",
    marginLeft: "-15px",
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][1],
    textDecoration: "none",
    fontWeight: 700,
    fontFamily: "Roboto Slab,Times New Roman,serif"
  },
  pullCenter: {
    display: "inline-block",
    float: "none"
  },
  clearFix: {
    clear: "both"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (footerStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-tim-andrus/components/headerLinksStyle.js":
/*!******************************************************************************!*\
  !*** ./assets/jss/nextjs-material-tim-andrus/components/headerLinksStyle.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus.js */ "./assets/jss/nextjs-material-tim-andrus.js");
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_tooltipsStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus/tooltipsStyle.js */ "./assets/jss/nextjs-material-tim-andrus/tooltipsStyle.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const headerLinksStyle = theme => _objectSpread({
  list: {
    [theme.breakpoints.up("md")]: {
      WebkitBoxAlign: "center",
      MsFlexAlign: "center",
      alignItems: "center",
      WebkitBoxOrient: "horizontal",
      WebkitBoxDirection: "normal",
      MsFlexDirection: "row",
      flexDirection: "row"
    },
    [theme.breakpoints.down("sm")]: {
      display: "block"
    },
    marginTop: "0px",
    display: "flex",
    paddingLeft: "0",
    marginBottom: "0",
    listStyle: "none",
    padding: "0"
  },
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      "& ul": {
        maxHeight: "300px",
        overflow: "scroll"
      },
      width: "100%",
      "&:not(:last-child)": {
        "&:after": {
          width: "calc(100% - 30px)",
          content: '""',
          display: "block",
          height: "1px",
          marginLeft: "15px",
          backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][14]
        }
      }
    }
  },
  listItemText: {
    padding: "0 !important"
  },
  navLink: {
    color: "inherit",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "inherit"
    },
    "& .fab,& .far,& .fal,& .fas,& .material-icons": {
      position: "relative",
      top: "2px",
      marginTop: "-4px",
      marginRight: "4px",
      marginBottom: "0px",
      fontSize: "1.25rem"
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start"
      }
    },
    "& svg": {
      marginRight: "3px",
      width: "20px",
      height: "20px"
    }
  },
  navLinkJustIcon: {
    "& .fab,& .far,& .fal,& .fas,& .material-icons": {
      marginRight: "0px"
    },
    "& svg": {
      marginRight: "0px"
    }
  },
  navButton: {
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "5px",
      marginTop: "5px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start"
      }
    },
    "& $icons": {
      marginRight: "3px"
    }
  },
  notificationNavLink: {
    [theme.breakpoints.down("md")]: {
      top: "0",
      margin: "5px 15px"
    },
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex"
  },
  registerNavLink: {
    [theme.breakpoints.down("md")]: {
      top: "0",
      margin: "5px 15px"
    },
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex"
  },
  navLinkActive: {
    "&, &:hover, &:focus,&:active ": {
      color: "inherit",
      backgroundColor: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]) + ", 0.1)"
    }
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "14px"
  },
  dropdownIcons: {
    width: "24px",
    height: "24px",
    marginRight: "14px",
    opacity: "0.5",
    marginTop: "-4px",
    top: "1px",
    verticalAlign: "middle",
    fontSize: "24px",
    position: "relative"
  },
  socialIcons: {
    position: "relative",
    fontSize: "1.25rem",
    maxWidth: "24px"
  },
  dropdownLink: {
    "&,&:hover,&:focus": {
      color: "inherit",
      textDecoration: "none",
      display: "flex",
      padding: "0.75rem 1.25rem 0.75rem 0.75rem"
    }
  }
}, assets_jss_nextjs_material_tim_andrus_tooltipsStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
  marginRight5: {
    marginRight: "5px"
  },
  collapse: {
    [theme.breakpoints.up("md")]: {
      display: "flex !important",
      MsFlexPreferredSize: "auto",
      flexBasis: "auto"
    },
    WebkitBoxFlex: "1",
    MsFlexPositive: "1",
    flexGrow: "1",
    WebkitBoxAlign: "center",
    MsFlexAlign: "center",
    alignItems: "center"
  },
  mlAuto: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["mlAuto"]
});

/* harmony default export */ __webpack_exports__["default"] = (headerLinksStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-tim-andrus/components/headerStyle.js":
/*!*************************************************************************!*\
  !*** ./assets/jss/nextjs-material-tim-andrus/components/headerStyle.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus.js */ "./assets/jss/nextjs-material-tim-andrus.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const headerStyle = theme => ({
  appBar: {
    display: "flex",
    border: "0",
    borderRadius: "3px",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][15],
    width: "100%",
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    boxShadow: "0 4px 18px 0px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 7px 10px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.15)",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    position: "relative"
  },
  absolute: {
    position: "absolute",
    top: "auto"
  },
  fixed: {
    position: "fixed"
  },
  container: _objectSpread({}, assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["container"], {
    minHeight: "50px",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap"
  }),
  title: {
    letterSpacing: "unset",
    "&,& a": _objectSpread({}, assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["defaultFont"], {
      minWidth: "unset",
      lineHeight: "30px",
      fontSize: "18px",
      borderRadius: "3px",
      textTransform: "none",
      whiteSpace: "nowrap",
      color: "inherit",
      "&:hover,&:focus": {
        color: "inherit",
        background: "transparent"
      }
    })
  },
  appResponsive: {
    margin: "20px 10px",
    marginTop: "0px"
  },
  primary: {
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0],
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    boxShadow: "0 4px 20px 0px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.14), 0 7px 12px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]) + ", 0.46)"
  },
  info: {
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0],
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    boxShadow: "0 4px 20px 0px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.14), 0 7px 12px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]) + ", 0.46)"
  },
  success: {
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0],
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    boxShadow: "0 4px 20px 0px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.14), 0 7px 12px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]) + ", 0.46)"
  },
  warning: {
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0],
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    boxShadow: "0 4px 20px 0px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.14), 0 7px 12px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]) + ", 0.46)"
  },
  danger: {
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0],
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    boxShadow: "0 4px 20px 0px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.14), 0 7px 12px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]) + ", 0.46)"
  },
  rose: {
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0],
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    boxShadow: "0 4px 20px 0px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.14), 0 7px 12px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]) + ", 0.46)"
  },
  transparent: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
    paddingTop: "25px",
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
  },
  dark: {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][9] + " !important",
    boxShadow: "0 4px 20px 0px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.14), 0 7px 12px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][9]) + ", 0.46)"
  },
  white: {
    border: "0",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][15],
    backgroundColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"] + " !important",
    boxShadow: "0 4px 18px 0px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 7px 10px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.15)"
  },
  drawerPaper: _objectSpread({
    border: "none",
    bottom: "0",
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    width: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["drawerWidth"]
  }, assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["boxShadow"], {
    position: "fixed",
    display: "block",
    top: "0",
    height: "100vh",
    right: "0",
    left: "auto",
    visibility: "visible",
    overflowY: "visible",
    borderTop: "none",
    textAlign: "left",
    paddingRight: "0px",
    paddingLeft: "0"
  }, assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["transition"]),
  hidden: {
    width: "100%"
  },
  collapse: {
    [theme.breakpoints.up("md")]: {
      display: "flex !important",
      MsFlexPreferredSize: "auto",
      flexBasis: "auto"
    },
    WebkitBoxFlex: "1",
    MsFlexPositive: "1",
    flexGrow: "1",
    WebkitBoxAlign: "center",
    MsFlexAlign: "center",
    alignItems: "center"
  },
  closeButtonDrawer: {
    position: "absolute",
    right: "8px",
    top: "9px",
    zIndex: "1"
  }
});

/* harmony default export */ __webpack_exports__["default"] = (headerStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-tim-andrus/components/parallaxStyle.js":
/*!***************************************************************************!*\
  !*** ./assets/jss/nextjs-material-tim-andrus/components/parallaxStyle.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus.js */ "./assets/jss/nextjs-material-tim-andrus.js");

const parallaxStyle = {
  parallax: {
    height: "100vh",
    maxHeight: "1600px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "50%",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center"
  },
  filter: {},
  primaryColor: {
    "&:before": {
      background: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.5)"
    },
    "&:after": {
      background: "linear-gradient(60deg,rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][4]) + ",.56),rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][5]) + ",.95))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  roseColor: {
    "&:before": {
      background: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.5)"
    },
    "&:after": {
      background: "linear-gradient(60deg,rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][3]) + ",.56),rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][4]) + ",.95))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  darkColor: {
    "&:before": {
      background: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.5)"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  infoColor: {
    "&:before": {
      background: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.5)"
    },
    "&:after": {
      background: "linear-gradient(60deg,rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][6]) + ",.56),rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][7]) + ",.95))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  successColor: {
    "&:before": {
      background: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.5)"
    },
    "&:after": {
      background: "linear-gradient(60deg,rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][6]) + ",.56),rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][7]) + ",.95))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  warningColor: {
    "&:before": {
      background: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.5)"
    },
    "&:after": {
      background: "linear-gradient(60deg,rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][6]) + ",.56),rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][7]) + ",.95))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  dangerColor: {
    "&:before": {
      background: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.5)"
    },
    "&:after": {
      background: "linear-gradient(60deg,rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][6]) + ",.56),rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][7]) + ",.95))"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  small: {
    height: "65vh",
    minHeight: "65vh",
    maxHeight: "650px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (parallaxStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-tim-andrus/customCheckboxRadioSwitchStyle.js":
/*!*********************************************************************************!*\
  !*** ./assets/jss/nextjs-material-tim-andrus/customCheckboxRadioSwitchStyle.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus.js */ "./assets/jss/nextjs-material-tim-andrus.js");

const customCheckboxRadioSwitch = {
  checkRoot: {
    padding: "14px",
    "&:hover": {
      backgroundColor: "unset !important"
    }
  },
  radioRoot: {
    padding: "16px",
    "&:hover": {
      backgroundColor: "unset !important"
    }
  },
  labelRoot: {
    marginLeft: "-14px"
  },
  checkboxAndRadio: {
    position: "relative",
    display: "block",
    marginTop: "10px",
    marginBottom: "10px"
  },
  checkboxAndRadioHorizontal: {
    position: "relative",
    display: "block",
    "&:first-child": {
      marginTop: "10px"
    },
    "&:not(:first-child)": {
      marginTop: "-14px"
    },
    marginTop: "0",
    marginBottom: "0"
  },
  checked: {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0] + "!important"
  },
  checkedIcon: {
    width: "20px",
    height: "20px",
    border: "1px solid rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.84)",
    borderRadius: "3px"
  },
  uncheckedIcon: {
    width: "0px",
    height: "0px",
    padding: "9px",
    border: "1px solid rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", .54)",
    borderRadius: "3px"
  },
  disabledCheckboxAndRadio: {
    "& $checkedIcon,& $uncheckedIcon,& $radioChecked,& $radioUnchecked": {
      borderColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"],
      opacity: "0.26",
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]
    }
  },
  label: {
    cursor: "pointer",
    paddingLeft: "0",
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][12],
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    display: "inline-flex",
    transition: "0.3s ease all",
    letterSpacing: "unset"
  },
  labelHorizontal: {
    color: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingTop: "39px",
    marginRight: "0",
    "@media (min-width: 992px)": {
      float: "right"
    }
  },
  labelHorizontalRadioCheckbox: {
    paddingTop: "22px"
  },
  labelLeftHorizontal: {
    color: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingTop: "22px",
    marginRight: "0"
  },
  labelError: {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]
  },
  radio: {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0] + "!important"
  },
  radioChecked: {
    width: "16px",
    height: "16px",
    border: "1px solid " + assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0],
    borderRadius: "50%"
  },
  radioUnchecked: {
    width: "0px",
    height: "0px",
    padding: "7px",
    border: "1px solid rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", .54)",
    borderRadius: "50%"
  },
  inlineChecks: {
    marginTop: "8px"
  },
  iconCheckbox: {
    height: "116px",
    width: "116px",
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0],
    "& > span:first-child": {
      borderWidth: "4px",
      borderStyle: "solid",
      borderColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][17],
      textAlign: "center",
      verticalAlign: "middle",
      borderRadius: "50%",
      color: "inherit",
      margin: "0 auto 20px",
      transition: "all 0.2s"
    },
    "&:hover": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0],
      "& > span:first-child": {
        borderColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]
      }
    }
  },
  iconCheckboxChecked: {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0],
    "& > span:first-child": {
      borderColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]
    }
  },
  iconCheckboxIcon: {
    fontSize: "40px",
    lineHeight: "111px"
  },
  switchBase: {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0] + "!important"
  },
  switchIcon: {
    boxShadow: "0 1px 3px 1px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.4)",
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"] + "  !important",
    border: "1px solid rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", .54)"
  },
  switchIconChecked: {
    borderColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0],
    transform: "translateX(0px)!important"
  },
  switchBar: {
    width: "30px",
    height: "15px",
    backgroundColor: "rgb(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][24]) + ")",
    borderRadius: "15px",
    opacity: "0.7!important"
  },
  switchChecked: {
    "& + $switchBar": {
      backgroundColor: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]) + ", 1) !important"
    },
    "& $switchIcon": {
      borderColor: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (customCheckboxRadioSwitch);

/***/ }),

/***/ "./assets/jss/nextjs-material-tim-andrus/imagesStyles.js":
/*!***************************************************************!*\
  !*** ./assets/jss/nextjs-material-tim-andrus/imagesStyles.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus.js */ "./assets/jss/nextjs-material-tim-andrus.js");

const imagesStyles = {
  imgFluid: {
    maxWidth: "100%",
    height: "auto"
  },
  imgRounded: {
    borderRadius: "6px !important"
  },
  imgRoundedCircle: {
    borderRadius: "50% !important"
  },
  imgRaised: {
    boxShadow: "0 5px 15px -8px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.24), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.2)"
  },
  imgGallery: {
    width: "100%",
    marginBottom: "2.142rem"
  },
  imgCardTop: {
    width: "100%",
    borderTopLeftRadius: "calc(.25rem - 1px)",
    borderTopRightRadius: "calc(.25rem - 1px)"
  },
  imgCardBottom: {
    width: "100%",
    borderBottomLeftRadius: "calc(.25rem - 1px)",
    borderBottomRightRadius: "calc(.25rem - 1px)"
  },
  imgCard: {
    width: "100%",
    borderRadius: "calc(.25rem - 1px)"
  },
  imgCardOverlay: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    padding: "1.25rem"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (imagesStyles);

/***/ }),

/***/ "./assets/jss/nextjs-material-tim-andrus/pages/ecommerceSections/blogStyle.js":
/*!************************************************************************************!*\
  !*** ./assets/jss/nextjs-material-tim-andrus/pages/ecommerceSections/blogStyle.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus.js */ "./assets/jss/nextjs-material-tim-andrus.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const styles = {
  cardTitle: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["cardTitle"],
  container: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["container"],
  section: _objectSpread({}, assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["section"], {
    padding: "70px 0px"
  }),
  coloredShadow: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["coloredShadow"],
  cardDescription: {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]
  },
  cardCategory: {
    marginTop: "10px"
  },
  textRose: {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0] + " !important"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./assets/jss/nextjs-material-tim-andrus/pages/ecommerceSections/latestOffersStyle.js":
/*!********************************************************************************************!*\
  !*** ./assets/jss/nextjs-material-tim-andrus/pages/ecommerceSections/latestOffersStyle.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus.js */ "./assets/jss/nextjs-material-tim-andrus.js");
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_tooltipsStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus/tooltipsStyle.js */ "./assets/jss/nextjs-material-tim-andrus/tooltipsStyle.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const styles = _objectSpread({
  cardTitle: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["cardTitle"],
  container: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["container"]
}, assets_jss_nextjs_material_tim_andrus_tooltipsStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
  section: _objectSpread({}, assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["section"], {
    padding: "70px 0px"
  }),
  coloredShadow: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["coloredShadow"],
  cardDescription: {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0],
    textAlign: "center"
  },
  mlAuto: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["mlAuto"],
  priceContainer: {
    display: "inline-flex"
  },
  price: {
    fontSize: "18px",
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][22]
  },
  priceOld: {
    fontSize: "16px",
    textDecoration: "line-through"
  },
  priceNew: {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]
  },
  stats: {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]
  },
  textCenter: {
    textAlign: "center"
  }
});

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./assets/jss/nextjs-material-tim-andrus/pages/ecommerceSections/productsStyle.js":
/*!****************************************************************************************!*\
  !*** ./assets/jss/nextjs-material-tim-andrus/pages/ecommerceSections/productsStyle.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus.js */ "./assets/jss/nextjs-material-tim-andrus.js");
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_customCheckboxRadioSwitchStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus/customCheckboxRadioSwitchStyle.js */ "./assets/jss/nextjs-material-tim-andrus/customCheckboxRadioSwitchStyle.js");
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_tooltipsStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus/tooltipsStyle.js */ "./assets/jss/nextjs-material-tim-andrus/tooltipsStyle.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const styles = _objectSpread({}, assets_jss_nextjs_material_tim_andrus_customCheckboxRadioSwitchStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"], {}, assets_jss_nextjs_material_tim_andrus_tooltipsStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
  checkRoot: {
    padding: "14px",
    "&:hover": {
      backgroundColor: "unset !important"
    }
  },
  coloredShadow: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["coloredShadow"],
  mlAuto: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["mlAuto"],
  mrAuto: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["mrAuto"],
  cardTitle: _objectSpread({}, assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["cardTitle"], {
    textAlign: "center",
    marginBottom: "0px !important"
  }),
  cardDescription: {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0],
    textAlign: "center"
  },
  container: _objectSpread({}, assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["container"]),
  description: {
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]
  },
  section: _objectSpread({}, assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["section"], {
    padding: "70px 0px"
  }),
  priceContainer: {
    display: "inline-flex"
  },
  price: {
    fontSize: "18px",
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][22]
  },
  pullRight: {
    float: "right"
  },
  cardHeaderImage: {
    position: "relative",
    padding: "0",
    zIndex: "1",
    marginLeft: "15px",
    marginRight: "15px",
    marginTop: "-30px",
    borderRadius: "6px",
    "& img": {
      width: "100%",
      borderRadius: "6px",
      pointerEvents: "none"
    },
    "& a": {
      display: "block"
    }
  },
  justifyContentBetween: {
    WebkitBoxPack: "justify!important",
    justifyContent: "space-between !important"
  },
  customExpandPanel: {
    maxHeight: "273px",
    overflowY: "scroll",
    "&  label": {
      display: "block"
    }
  },
  priceSlider: {
    fontWeight: "500"
  },
  refineButton: {
    margin: "-3px 0"
  },
  cardBodyRefine: {
    paddingLeft: "15px",
    paddingRight: "15px"
  },
  textLeft: {
    textAlign: "left"
  }
});

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./assets/jss/nextjs-material-tim-andrus/pages/ecommerceStyle.js":
/*!***********************************************************************!*\
  !*** ./assets/jss/nextjs-material-tim-andrus/pages/ecommerceStyle.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus.js */ "./assets/jss/nextjs-material-tim-andrus.js");
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_imagesStyles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus/imagesStyles.js */ "./assets/jss/nextjs-material-tim-andrus/imagesStyles.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const styles = _objectSpread({}, assets_jss_nextjs_material_tim_andrus_imagesStyles_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
  title: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["title"],
  main: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["main"],
  mainRaised: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["mainRaised"],
  mrAuto: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["mrAuto"],
  mlAuto: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["mlAuto"],
  description: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["description"],
  textCenter: {
    textAlign: "center !important"
  },
  container: _objectSpread({}, assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["container"], {
    zIndex: "2"
  }),
  brand: {
    "& h1, & h4": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
    }
  },
  card: {},
  subscribeButton: {},
  cardBody: {
    padding: "15px",
    "& form": {
      marginBottom: "0"
    }
  },
  cardForm: {
    margin: "0 0 0 14px",
    padding: 0,
    top: 10
  },
  subscribeLine: {
    padding: "1.875rem 0px",
    "& $card": {
      marginTop: "30px"
    },
    "& form": {
      margin: "0px"
    },
    "&$subscribeLineImage:after": {
      position: "absolute",
      zIndex: 1,
      width: "100%",
      height: "100%",
      display: "block",
      left: 0,
      top: 0,
      content: "''",
      backgroundColor: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ",0.66)"
    }
  },
  subscribeLineImage: {
    position: "relative",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    "& $container": {
      zIndex: 2,
      position: "relative"
    },
    "& $title": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
    },
    "& $description": {
      color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]
    }
  },
  socialFeed: {
    "& p": {
      display: "table-cell",
      verticalAlign: "top",
      overflow: "hidden",
      paddingBottom: "10px",
      maxWidth: 300
    },
    "& i": {
      fontSize: "20px",
      display: "table-cell",
      paddingRight: "10px"
    }
  },
  img: {
    width: "20%",
    marginRight: "5%",
    marginBottom: "5%",
    float: "left"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right"
  },
  aClass: {
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  }
});

/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./assets/jss/nextjs-material-tim-andrus/tooltipsStyle.js":
/*!****************************************************************!*\
  !*** ./assets/jss/nextjs-material-tim-andrus/tooltipsStyle.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus.js */ "./assets/jss/nextjs-material-tim-andrus.js");

const tooltipsStyle = {
  tooltip: {
    padding: "10px 15px",
    minWidth: "130px",
    color: assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    lineHeight: "1.7em",
    background: "rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][15]) + ",0.9)",
    border: "none",
    borderRadius: "3px",
    boxShadow: "0 8px 10px 1px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.14), 0 3px 14px 2px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 5px 5px -3px rgba(" + Object(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_tim_andrus_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.2)",
    maxWidth: "200px",
    textAlign: "center",
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontSize: "0.875em",
    fontStyle: "normal",
    fontWeight: "400",
    textShadow: "none",
    textTransform: "none",
    letterSpacing: "normal",
    wordBreak: "normal",
    wordSpacing: "normal",
    wordWrap: "normal",
    whiteSpace: "normal",
    lineBreak: "auto"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (tooltipsStyle);

/***/ }),

/***/ "./components/Accordion/Accordion.js":
/*!*******************************************!*\
  !*** ./components/Accordion/Accordion.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Accordion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ExpansionPanel */ "@material-ui/core/ExpansionPanel");
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelSummary */ "@material-ui/core/ExpansionPanelSummary");
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelDetails */ "@material-ui/core/ExpansionPanelDetails");
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_components_accordionStyle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus/components/accordionStyle.js */ "./assets/jss/nextjs-material-tim-andrus/components/accordionStyle.js");
var _jsxFileName = "/Users/timothyandrus/Dev/timothyandrus/components/Accordion/Accordion.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library to set properties for components

 // @material-ui/core components




 // @material-ui/icons



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_nextjs_material_tim_andrus_components_accordionStyle_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
function Accordion(props) {
  const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(props.active.length === undefined ? [props.active] : props.active);
  const [single] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(props.active.length === undefined ? true : false);

  const handleChange = panel => () => {
    let newArray;

    if (single) {
      if (active[0] === panel) {
        newArray = [];
      } else {
        newArray = [panel];
      }
    } else {
      if (active.indexOf(panel) === -1) {
        newArray = [...active, panel];
      } else {
        newArray = [...active];
        newArray.splice(active.indexOf(panel), 1);
      }
    }

    setActive(newArray);
  };

  const {
    collapses,
    activeColor
  } = props;
  const classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, collapses.map((prop, key) => {
    return __jsx(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_3___default.a, {
      expanded: active === key || active.indexOf(key) !== -1,
      onChange: handleChange(key),
      key: key,
      classes: {
        root: classes.expansionPanel,
        expanded: classes.expansionPanelExpanded
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_4___default.a, {
      expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 27
        }
      }),
      classes: {
        root: `${classes.expansionPanelSummary} ${classes[activeColor + "ExpansionPanelSummary"]}`,
        expanded: `${classes.expansionPanelSummaryExpaned} ${classes[activeColor + "ExpansionPanelSummaryExpaned"]}`,
        content: classes.expansionPanelSummaryContent,
        expandIcon: classes.expansionPanelSummaryExpandIcon
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    }, __jsx("h4", {
      className: classes.title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 15
      }
    }, prop.title)), __jsx(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: classes.expansionPanelDetails,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }
    }, prop.content));
  }));
}
Accordion.defaultProps = {
  active: -1,
  activeColor: "primary"
};
Accordion.propTypes = {
  // index of the default active collapse
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number)]),
  collapses: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
  })).isRequired,
  activeColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["primary", "secondary", "warning", "danger", "success", "info", "rose"])
};

/***/ }),

/***/ "./components/Card/Card.js":
/*!*********************************!*\
  !*** ./components/Card/Card.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_components_cardStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus/components/cardStyle.js */ "./assets/jss/nextjs-material-tim-andrus/components/cardStyle.js");
var _jsxFileName = "/Users/timothyandrus/Dev/timothyandrus/components/Card/Card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(assets_jss_nextjs_material_tim_andrus_components_cardStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
function Card(props) {
  const {
    className,
    children,
    plain,
    profile,
    blog,
    raised,
    background,
    pricing,
    color,
    product,
    testimonial
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children", "plain", "profile", "blog", "raised", "background", "pricing", "color", "product", "testimonial"]);

  const classes = useStyles();
  const cardClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile || testimonial,
    [classes.cardBlog]: blog,
    [classes.cardRaised]: raised,
    [classes.cardBackground]: background,
    [classes.cardPricingColor]: pricing && color !== undefined || pricing && background !== undefined,
    [classes[color]]: color,
    [classes.cardPricing]: pricing,
    [classes.cardProduct]: product,
    [className]: className !== undefined
  });
  return __jsx("div", _extends({
    className: cardClasses
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }), children);
}
Card.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  plain: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  profile: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  blog: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  raised: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  background: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  pricing: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  testimonial: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["primary", "info", "success", "warning", "danger", "rose"]),
  product: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};

/***/ }),

/***/ "./components/Card/CardBody.js":
/*!*************************************!*\
  !*** ./components/Card/CardBody.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardBody; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_components_cardBodyStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus/components/cardBodyStyle.js */ "./assets/jss/nextjs-material-tim-andrus/components/cardBodyStyle.js");
var _jsxFileName = "/Users/timothyandrus/Dev/timothyandrus/components/Card/CardBody.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(assets_jss_nextjs_material_tim_andrus_components_cardBodyStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
function CardBody(props) {
  const {
    className,
    children,
    background,
    plain,
    formHorizontal,
    pricing,
    signup,
    color
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children", "background", "plain", "formHorizontal", "pricing", "signup", "color"]);

  const classes = useStyles();
  const cardBodyClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    [classes.cardBody]: true,
    [classes.cardBodyBackground]: background,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyFormHorizontal]: formHorizontal,
    [classes.cardPricing]: pricing,
    [classes.cardSignup]: signup,
    [classes.cardBodyColor]: color,
    [className]: className !== undefined
  });
  return __jsx("div", _extends({
    className: cardBodyClasses
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }), children);
}
CardBody.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  background: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  plain: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  formHorizontal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  pricing: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  signup: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};

/***/ }),

/***/ "./components/Card/CardFooter.js":
/*!***************************************!*\
  !*** ./components/Card/CardFooter.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardFooter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_components_cardFooterStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus/components/cardFooterStyle.js */ "./assets/jss/nextjs-material-tim-andrus/components/cardFooterStyle.js");
var _jsxFileName = "/Users/timothyandrus/Dev/timothyandrus/components/Card/CardFooter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(assets_jss_nextjs_material_tim_andrus_components_cardFooterStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
function CardFooter(props) {
  const {
    className,
    children,
    plain,
    profile,
    pricing,
    testimonial
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children", "plain", "profile", "pricing", "testimonial"]);

  const classes = useStyles();
  const cardFooterClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    [classes.cardFooter]: true,
    [classes.cardFooterPlain]: plain,
    [classes.cardFooterProfile]: profile || testimonial,
    [classes.cardFooterPricing]: pricing,
    [classes.cardFooterTestimonial]: testimonial,
    [className]: className !== undefined
  });
  return __jsx("div", _extends({
    className: cardFooterClasses
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }), children);
}
CardFooter.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  plain: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  profile: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  pricing: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  testimonial: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};

/***/ }),

/***/ "./components/Card/CardHeader.js":
/*!***************************************!*\
  !*** ./components/Card/CardHeader.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_components_cardHeaderStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus/components/cardHeaderStyle.js */ "./assets/jss/nextjs-material-tim-andrus/components/cardHeaderStyle.js");
var _jsxFileName = "/Users/timothyandrus/Dev/timothyandrus/components/Card/CardHeader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(assets_jss_nextjs_material_tim_andrus_components_cardHeaderStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
function CardHeader(props) {
  const {
    className,
    children,
    color,
    plain,
    image,
    contact,
    signup,
    noShadow
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children", "color", "plain", "image", "contact", "signup", "noShadow"]);

  const classes = useStyles();
  const cardHeaderClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    [classes.cardHeader]: true,
    [classes[color + "CardHeader"]]: color,
    [classes.cardHeaderPlain]: plain,
    [classes.cardHeaderImage]: image,
    [classes.cardHeaderContact]: contact,
    [classes.cardHeaderSignup]: signup,
    [classes.noShadow]: noShadow,
    [className]: className !== undefined
  });
  return __jsx("div", _extends({
    className: cardHeaderClasses
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }), children);
}
CardHeader.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["warning", "success", "danger", "info", "primary", "rose"]),
  plain: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  image: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  contact: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  signup: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  noShadow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};

/***/ }),

/***/ "./components/Clearfix/Clearfix.js":
/*!*****************************************!*\
  !*** ./components/Clearfix/Clearfix.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Clearfix; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/timothyandrus/Dev/timothyandrus/components/Clearfix/Clearfix.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // mterial-ui components


const styles = {
  clearfix: {
    "&:after,&:before": {
      display: "table",
      content: '" "'
    },
    "&:after": {
      clear: "both"
    }
  }
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(styles);
function Clearfix() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.clearfix,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 10
    }
  });
}

/***/ }),

/***/ "./components/CustomButtons/Button.js":
/*!********************************************!*\
  !*** ./components/CustomButtons/Button.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_components_buttonStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus/components/buttonStyle.js */ "./assets/jss/nextjs-material-tim-andrus/components/buttonStyle.js");
var _jsxFileName = "/Users/timothyandrus/Dev/timothyandrus/components/CustomButtons/Button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(assets_jss_nextjs_material_tim_andrus_components_buttonStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
const RegularButton = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((props, ref) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    fileButton,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["color", "round", "children", "fullWidth", "disabled", "simple", "size", "block", "link", "justIcon", "fileButton", "className"]);

  const classes = useStyles();
  const btnClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [classes.fileButton]: fileButton,
    [className]: className
  });
  return __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({}, rest, {
    ref: ref,
    className: btnClasses,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }), children);
});
RegularButton.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["primary", "secondary", "info", "success", "warning", "danger", "rose", "white", "twitter", "facebook", "google", "linkedin", "pinterest", "youtube", "tumblr", "github", "behance", "dribbble", "reddit", "instagram", "transparent"]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["sm", "lg"]),
  simple: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  round: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  block: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  link: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  justIcon: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  fileButton: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (RegularButton);

/***/ }),

/***/ "./components/CustomDropdown/CustomDropdown.js":
/*!*****************************************************!*\
  !*** ./components/CustomDropdown/CustomDropdown.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomDropdown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuList */ "@material-ui/core/MenuList");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "@material-ui/core/ClickAwayListener");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grow */ "@material-ui/core/Grow");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Popper */ "@material-ui/core/Popper");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_components_customDropdownStyle_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus/components/customDropdownStyle.js */ "./assets/jss/nextjs-material-tim-andrus/components/customDropdownStyle.js");
var _jsxFileName = "/Users/timothyandrus/Dev/timothyandrus/components/CustomDropdown/CustomDropdown.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components








 // core components



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(assets_jss_nextjs_material_tim_andrus_components_customDropdownStyle_js__WEBPACK_IMPORTED_MODULE_12__["default"]);
function CustomDropdown(props) {
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);

  const handleClick = event => {
    if (anchorEl && anchorEl.contains(event.target)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = event => {
    if (anchorEl.contains(event.target)) {
      return;
    }

    setAnchorEl(null);
  };

  const handleCloseMenu = param => {
    setAnchorEl(null);

    if (props && props.onClick) {
      props.onClick(param);
    }
  };

  const {
    buttonText,
    buttonIcon,
    dropdownList,
    buttonProps,
    dropup,
    dropdownHeader,
    caret,
    hoverColor,
    dropPlacement,
    rtlActive,
    noLiPadding,
    innerDropDown,
    navDropdown
  } = props;
  const classes = useStyles();
  const caretClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    [classes.caret]: true,
    [classes.caretDropup]: dropup && !anchorEl,
    [classes.caretActive]: Boolean(anchorEl) && !dropup,
    [classes.caretRTL]: rtlActive
  });
  const dropdownItem = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    [classes.dropdownItem]: true,
    [classes[hoverColor + "Hover"]]: true,
    [classes.noLiPadding]: noLiPadding,
    [classes.dropdownItemRTL]: rtlActive
  });

  const dropDownMenu = __jsx(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_5___default.a, {
    role: "menu",
    className: classes.menuList,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, dropdownHeader !== undefined ? __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: () => handleCloseMenu(dropdownHeader),
    className: classes.dropdownHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, dropdownHeader) : null, dropdownList.map((prop, key) => {
    if (prop.divider) {
      return __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_9___default.a, {
        key: key,
        onClick: () => handleCloseMenu("divider"),
        className: classes.dropdownDividerItem,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }
      });
    } else if (prop.props !== undefined && prop.props["data-ref"] === "multi") {
      return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
        key: key,
        className: dropdownItem,
        style: {
          overflow: "visible",
          padding: 0
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }
      }, prop);
    }

    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
      key: key,
      onClick: () => handleCloseMenu(prop),
      className: dropdownItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 11
      }
    }, prop);
  }));

  return __jsx("div", {
    className: innerDropDown ? classes.innerManager : classes.manager,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: buttonText !== undefined ? "" : classes.target,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({
    "aria-label": "Notifications",
    "aria-owns": anchorEl ? "menu-list" : null,
    "aria-haspopup": "true"
  }, buttonProps, {
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }), buttonIcon !== undefined ? __jsx(props.buttonIcon, {
    className: classes.buttonIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }) : null, buttonText !== undefined ? buttonText : null, caret ? __jsx("b", {
    className: caretClasses,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 20
    }
  }) : null)), __jsx(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_10___default.a, {
    open: Boolean(anchorEl),
    anchorEl: anchorEl,
    transition: true,
    disablePortal: true,
    placement: dropPlacement,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      [classes.popperClose]: !anchorEl,
      [classes.popperResponsive]: true,
      [classes.popperNav]: Boolean(anchorEl) && navDropdown
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, () => __jsx(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8___default.a, {
    in: Boolean(anchorEl),
    id: "menu-list",
    style: dropup ? {
      transformOrigin: "0 100% 0"
    } : {
      transformOrigin: "0 0 0"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.dropdown,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }, innerDropDown ? dropDownMenu : __jsx(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_6___default.a, {
    onClickAway: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 17
    }
  }, dropDownMenu)))));
}
CustomDropdown.defaultProps = {
  caret: true,
  dropup: false,
  hoverColor: "primary"
};
CustomDropdown.propTypes = {
  hoverColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["dark", "primary", "info", "success", "warning", "danger", "rose"]),
  buttonText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  buttonIcon: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  dropdownList: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  buttonProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  dropup: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  dropdownHeader: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  rtlActive: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  caret: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  dropPlacement: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["bottom", "top", "right", "left", "bottom-start", "bottom-end", "top-start", "top-end", "right-start", "right-end", "left-start", "left-end"]),
  noLiPadding: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  innerDropDown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  navDropdown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  // This is a function that returns the clicked menu item
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

/***/ }),

/***/ "./components/CustomInput/CustomInput.js":
/*!***********************************************!*\
  !*** ./components/CustomInput/CustomInput.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Clear */ "@material-ui/icons/Clear");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Check */ "@material-ui/icons/Check");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_components_customInputStyle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus/components/customInputStyle.js */ "./assets/jss/nextjs-material-tim-andrus/components/customInputStyle.js");
var _jsxFileName = "/Users/timothyandrus/Dev/timothyandrus/components/CustomInput/CustomInput.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // nodejs library to set properties for components

 // nodejs library that concatenates classes

 // @material-ui/core components




 // @material-ui/icons


 // core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(assets_jss_nextjs_material_tim_andrus_components_customInputStyle_js__WEBPACK_IMPORTED_MODULE_9__["default"]);
function CustomInput(props) {
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    white,
    inputRootCustomClasses,
    success
  } = props;
  const classes = useStyles();
  const labelClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error
  });
  const underlineClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white
  });
  const marginTop = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined
  });
  const inputClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.input]: true,
    [classes.whiteInput]: white
  });
  var formControlClasses;

  if (formControlProps !== undefined) {
    formControlClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(formControlProps.className, classes.formControl);
  } else {
    formControlClasses = classes.formControl;
  }

  return __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({}, formControlProps, {
    className: formControlClasses,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }), labelText !== undefined ? __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5___default.a, _extends({
    className: classes.labelRoot + " " + labelClasses,
    htmlFor: id
  }, labelProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }), labelText) : null, __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6___default.a, _extends({
    classes: {
      input: inputClasses,
      root: marginTop,
      disabled: classes.disabled,
      underline: underlineClasses
    },
    id: id
  }, inputProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  })), error ? __jsx(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.feedback + " " + classes.labelRootError,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }) : success ? __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.feedback + " " + classes.labelRootSuccess,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }) : null);
}
CustomInput.propTypes = {
  labelText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  labelProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  formControlProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  inputRootCustomClasses: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  success: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  white: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "@material-ui/icons/Favorite");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_components_footerStyle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus/components/footerStyle.js */ "./assets/jss/nextjs-material-tim-andrus/components/footerStyle.js");
var _jsxFileName = "/Users/timothyandrus/Dev/timothyandrus/components/Footer/Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable */
 // nodejs library to set properties for components

 // nodejs library that concatenates classes

 // @material-ui/core components



 // @material-ui/icons



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(assets_jss_nextjs_material_tim_andrus_components_footerStyle_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
function Footer(props) {
  const {
    children,
    content,
    theme,
    big,
    className
  } = props;
  const classes = useStyles();
  const themeType = theme === "transparent" || theme == undefined ? false : true;
  const footerClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.footer]: true,
    [classes[theme]]: themeType,
    [classes.big]: big || children !== undefined,
    [className]: className !== undefined
  });
  const aClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.a]: true
  });
  return __jsx("footer", {
    className: footerClasses,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, children !== undefined ? __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, children), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  })) : " ", content, __jsx("div", {
    className: classes.clearFix,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  })));
}
Footer.propTypes = {
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["dark", "white", "transparent"]),
  big: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};

/***/ }),

/***/ "./components/Grid/GridContainer.js":
/*!******************************************!*\
  !*** ./components/Grid/GridContainer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/timothyandrus/Dev/timothyandrus/components/Grid/GridContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library to set properties for components

 // @material-ui/core components



const styles = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto"
  }
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(styles);
function GridContainer(props) {
  const {
    children,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["children", "className"]);

  const classes = useStyles();
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
    container: true
  }, rest, {
    className: classes.grid + " " + className,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }), children);
}
GridContainer.defaultProps = {
  className: ""
};
GridContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./components/Grid/GridItem.js":
/*!*************************************!*\
  !*** ./components/Grid/GridItem.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/timothyandrus/Dev/timothyandrus/components/Grid/GridItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library to set properties for components

 // @material-ui/core components



const styles = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px"
    /* flexBasis: "auto" */

  }
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(styles);
function GridItem(props) {
  const {
    children,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["children", "className"]);

  const classes = useStyles();
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
    item: true
  }, rest, {
    className: classes.grid + " " + className,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }), children);
}
GridItem.defaultProps = {
  className: ""
};
GridItem.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_components_headerStyle_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus/components/headerStyle.js */ "./assets/jss/nextjs-material-tim-andrus/components/headerStyle.js");
var _jsxFileName = "/Users/timothyandrus/Dev/timothyandrus/components/Header/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components







 // @material-ui/icons


 // core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(assets_jss_nextjs_material_tim_andrus_components_headerStyle_js__WEBPACK_IMPORTED_MODULE_13__["default"]);
function Header(props) {
  const [mobileOpen, setMobileOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const classes = useStyles();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }

    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const headerColorChange = () => {
    const {
      color,
      changeColorOnScroll
    } = props;
    const windowsScrollTop = window.pageYOffset;

    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body.getElementsByTagName("header")[0].classList.remove(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body.getElementsByTagName("header")[0].classList.add(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.remove(classes[changeColorOnScroll.color]);
    }
  };

  const {
    color,
    links,
    brand,
    fixed,
    absolute
  } = props;
  const appBarClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });
  return __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: appBarClasses,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/presentation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, brand))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
    smDown: true,
    implementation: "css",
    className: classes.hidden,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.collapse,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, links)), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
    mdUp: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerToggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  })))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
    mdUp: true,
    implementation: "js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "temporary",
    anchor: "right",
    open: mobileOpen,
    classes: {
      paper: classes.drawerPaper
    },
    onClose: handleDrawerToggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerToggle,
    className: classes.closeButtonDrawer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: classes.appResponsive,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, links))));
}
Header.defaultProp = {
  color: "white"
};
Header.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["primary", "info", "success", "warning", "danger", "transparent", "white", "rose", "dark"]),
  links: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  brand: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  absolute: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    height: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,
    color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["primary", "info", "success", "warning", "danger", "transparent", "white", "rose", "dark"]).isRequired
  })
};

/***/ }),

/***/ "./components/Header/HeaderLinks.js":
/*!******************************************!*\
  !*** ./components/Header/HeaderLinks.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderLinks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Apps */ "@material-ui/icons/Apps");
/* harmony import */ var _material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ShoppingCart */ "@material-ui/icons/ShoppingCart");
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_ViewDay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/ViewDay */ "@material-ui/icons/ViewDay");
/* harmony import */ var _material_ui_icons_ViewDay__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewDay__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Dns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Dns */ "@material-ui/icons/Dns");
/* harmony import */ var _material_ui_icons_Dns__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dns__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Build */ "@material-ui/icons/Build");
/* harmony import */ var _material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/List */ "@material-ui/icons/List");
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/People */ "@material-ui/icons/People");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Assignment */ "@material-ui/icons/Assignment");
/* harmony import */ var _material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/MonetizationOn */ "@material-ui/icons/MonetizationOn");
/* harmony import */ var _material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Chat */ "@material-ui/icons/Chat");
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Call */ "@material-ui/icons/Call");
/* harmony import */ var _material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_ViewCarousel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/ViewCarousel */ "@material-ui/icons/ViewCarousel");
/* harmony import */ var _material_ui_icons_ViewCarousel__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewCarousel__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/AccountBalance */ "@material-ui/icons/AccountBalance");
/* harmony import */ var _material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/ArtTrack */ "@material-ui/icons/ArtTrack");
/* harmony import */ var _material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_ViewQuilt__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/ViewQuilt */ "@material-ui/icons/ViewQuilt");
/* harmony import */ var _material_ui_icons_ViewQuilt__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewQuilt__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/LocationOn */ "@material-ui/icons/LocationOn");
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/icons/Fingerprint */ "@material-ui/icons/Fingerprint");
/* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/icons/AttachMoney */ "@material-ui/icons/AttachMoney");
/* harmony import */ var _material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/icons/Store */ "@material-ui/icons/Store");
/* harmony import */ var _material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "@material-ui/icons/AccountCircle");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/icons/PersonAdd */ "@material-ui/icons/PersonAdd");
/* harmony import */ var _material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/icons/Layers */ "@material-ui/icons/Layers");
/* harmony import */ var _material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/icons/ShoppingBasket */ "@material-ui/icons/ShoppingBasket");
/* harmony import */ var _material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _material_ui_icons_LineStyle__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/icons/LineStyle */ "@material-ui/icons/LineStyle");
/* harmony import */ var _material_ui_icons_LineStyle__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LineStyle__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @material-ui/icons/Error */ "@material-ui/icons/Error");
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! components/CustomDropdown/CustomDropdown.js */ "./components/CustomDropdown/CustomDropdown.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_components_headerLinksStyle_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus/components/headerLinksStyle.js */ "./assets/jss/nextjs-material-tim-andrus/components/headerLinksStyle.js");
var _jsxFileName = "/Users/timothyandrus/Dev/timothyandrus/components/Header/HeaderLinks.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable */
 // nodejs library to set properties for components

 // react components for routing our app without refresh

 // @material-ui/core components





 // @material-ui/icons

























 // core components




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(assets_jss_nextjs_material_tim_andrus_components_headerLinksStyle_js__WEBPACK_IMPORTED_MODULE_35__["default"]);
function HeaderLinks(props) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);

      if (isMobile) {// if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };

  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function () {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  };

  var onClickSections = {};
  const {
    dropdownHoverColor
  } = props;
  const classes = useStyles();
  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.list + " " + classes.mlAuto,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.listItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, __jsx(components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_33__["default"], {
    noLiPadding: true,
    navDropdown: true,
    hoverColor: dropdownHoverColor,
    buttonText: "Components",
    buttonProps: {
      className: classes.navLink,
      color: "transparent"
    },
    buttonIcon: _material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_8___default.a,
    dropdownList: [__jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/presentation",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: classes.dropdownLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_LineStyle__WEBPACK_IMPORTED_MODULE_31___default.a, {
      className: classes.dropdownIcons,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }
    }), " Presentation Page")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/components",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: classes.dropdownLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_29___default.a, {
      className: classes.dropdownIcons,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }
    }), "All components")), __jsx("a", {
      href: "https://www.nowsta.com/",
      target: "_blank",
      className: classes.dropdownLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: classes.dropdownIcons,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 15
      }
    }, "content_paste"), "Documentation")],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.listItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }, __jsx(components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_33__["default"], {
    noLiPadding: true,
    navDropdown: true,
    hoverColor: dropdownHoverColor,
    buttonText: "Sections",
    buttonProps: {
      className: classes.navLink,
      color: "transparent"
    },
    buttonIcon: _material_ui_icons_ViewDay__WEBPACK_IMPORTED_MODULE_10___default.a,
    dropdownList: [__jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/sections#headers",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: classes.dropdownLink,
      onClick: e => smoothScroll(e, "headers"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_Dns__WEBPACK_IMPORTED_MODULE_11___default.a, {
      className: classes.dropdownIcons,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 17
      }
    }), " Headers")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/sections#features",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: classes.dropdownLink,
      onClick: e => smoothScroll(e, "features"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_12___default.a, {
      className: classes.dropdownIcons,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 17
      }
    }), " Features")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/sections#blogs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: classes.dropdownLink,
      onClick: e => smoothScroll(e, "blogs"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_13___default.a, {
      className: classes.dropdownIcons,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 17
      }
    }), " Blogs")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/sections#teams",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: classes.dropdownLink,
      onClick: e => smoothScroll(e, "teams"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_14___default.a, {
      className: classes.dropdownIcons,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 17
      }
    }), " Teams")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/sections#projects",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: classes.dropdownLink,
      onClick: e => smoothScroll(e, "projects"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_15___default.a, {
      className: classes.dropdownIcons,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 17
      }
    }), " Projects")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/sections#pricing",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: classes.dropdownLink,
      onClick: e => smoothScroll(e, "pricing"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_16___default.a, {
      className: classes.dropdownIcons,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 17
      }
    }), " Pricing")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/sections#testimonials",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: classes.dropdownLink,
      onClick: e => smoothScroll(e, "testimonials"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_17___default.a, {
      className: classes.dropdownIcons,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 17
      }
    }), " Testimonials")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/sections#contacts",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: classes.dropdownLink,
      onClick: e => smoothScroll(e, "contacts"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_18___default.a, {
      className: classes.dropdownIcons,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 17
      }
    }), " Contacts"))],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.listItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 7
    }
  }, __jsx(components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_33__["default"], {
    noLiPadding: true,
    navDropdown: true,
    hoverColor: dropdownHoverColor,
    buttonText: "Examples",
    buttonProps: {
      className: classes.navLink,
      color: "transparent"
    },
    buttonIcon: _material_ui_icons_ViewCarousel__WEBPACK_IMPORTED_MODULE_19___default.a,
    dropdownList: [__jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/about-us",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: classes.dropdownLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_20___default.a, {
      className: classes.dropdownIcons,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 17
      }
    }), " About Us")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/blog-post",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: classes.dropdownLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_21___default.a, {
      className: classes.dropdownIcons,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 17
      }
    }), " Blog Post")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/blog-posts",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: classes.dropdownLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_ViewQuilt__WEBPACK_IMPORTED_MODULE_22___default.a, {
      className: classes.dropdownIcons,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 17
      }
    }), " Blog Posts")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/contact-us",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: classes.dropdownLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_23___default.a, {
      className: classes.dropdownIcons,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 17
      }
    }), " Contact Us")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/landing-page",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: classes.dropdownLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_ViewDay__WEBPACK_IMPORTED_MODULE_10___default.a, {
      className: classes.dropdownIcons,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 17
      }
    }), " Landing Page")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: classes.dropdownLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_24___default.a, {
      className: classes.dropdownIcons,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 17
      }
    }), " Login Page")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/pricing",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: classes.dropdownLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_25___default.a, {
      className: classes.dropdownIcons,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 17
      }
    }), " Pricing Page")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/shopping-cart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: classes.dropdownLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_30___default.a, {
      className: classes.dropdownIcons,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 17
      }
    }), " Shopping Cart")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/ecommerce",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: classes.dropdownLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_26___default.a, {
      className: classes.dropdownIcons,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 17
      }
    }), " Ecommerce Page")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/product",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: classes.dropdownLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_9___default.a, {
      className: classes.dropdownIcons,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 17
      }
    }), " Product Page")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/profile",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: classes.dropdownLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_27___default.a, {
      className: classes.dropdownIcons,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 17
      }
    }), " Profile Page")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/signup",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: classes.dropdownLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_28___default.a, {
      className: classes.dropdownIcons,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 17
      }
    }), " Signup Page")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/error-page",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: classes.dropdownLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_32___default.a, {
      className: classes.dropdownIcons,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 17
      }
    }), " Error Page"))],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.listItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7___default.a, {
    mdDown: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 9
    }
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_34__["default"], {
    href: "https://www.nowsta.com/product/nextjs-material-tim-andrus?ref=njsmkp-navbar",
    color: "white",
    target: "_blank",
    className: classes.navButton,
    round: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.icons,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 13
    }
  }), " buy now")), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7___default.a, {
    mdUp: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 9
    }
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_34__["default"], {
    href: "https://www.nowsta.com/product/nextjs-material-tim-andrus?ref=njsmkp-navbar",
    color: "info",
    target: "_blank",
    className: classes.navButton,
    round: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.icons,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 13
    }
  }), " buy now"))));
}
HeaderLinks.defaultProps = {
  hoverColor: "primary"
};
HeaderLinks.propTypes = {
  dropdownHoverColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["dark", "primary", "info", "success", "warning", "danger", "rose"])
};

/***/ }),

/***/ "./components/Parallax/Parallax.js":
/*!*****************************************!*\
  !*** ./components/Parallax/Parallax.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Parallax; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_components_parallaxStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus/components/parallaxStyle.js */ "./assets/jss/nextjs-material-tim-andrus/components/parallaxStyle.js");
var _jsxFileName = "/Users/timothyandrus/Dev/timothyandrus/components/Parallax/Parallax.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(assets_jss_nextjs_material_tim_andrus_components_parallaxStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
function Parallax(props) {
  let windowScrollTop = 0;
  const [transform, setTransform] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("translate3d(0," + windowScrollTop + "px,0)");
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }

    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });

  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };

  const {
    filter,
    className,
    children,
    style,
    image,
    small
  } = props;
  const classes = useStyles();
  const parallaxClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    [classes.parallax]: true,
    [classes[filter + "Color"]]: filter !== undefined,
    [classes.small]: small,
    [className]: className !== undefined
  });
  return __jsx("div", {
    className: parallaxClasses,
    style: _objectSpread({}, style, {
      backgroundImage: "url(" + image + ")",
      transform: transform
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, children);
}
Parallax.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  filter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["primary", "rose", "dark", "info", "success", "warning", "danger"]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  small: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages-sections/ecommerce/SectionBlog.js":
/*!*************************************************!*\
  !*** ./pages-sections/ecommerce/SectionBlog.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionBlog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_Card_Card_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Card/Card.js */ "./components/Card/Card.js");
/* harmony import */ var components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Card/CardHeader.js */ "./components/Card/CardHeader.js");
/* harmony import */ var components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Card/CardBody.js */ "./components/Card/CardBody.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_img_dg6_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/img/dg6.jpg */ "./assets/img/dg6.jpg");
/* harmony import */ var assets_img_dg10_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/img/dg10.jpg */ "./assets/img/dg10.jpg");
/* harmony import */ var assets_img_dg9_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/img/dg9.jpg */ "./assets/img/dg9.jpg");
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_pages_ecommerceSections_blogStyle_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus/pages/ecommerceSections/blogStyle.js */ "./assets/jss/nextjs-material-tim-andrus/pages/ecommerceSections/blogStyle.js");
var _jsxFileName = "/Users/timothyandrus/Dev/timothyandrus/pages-sections/ecommerce/SectionBlog.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library that concatenates classes

 // core components





 // @material-ui/core components






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(assets_jss_nextjs_material_tim_andrus_pages_ecommerceSections_blogStyle_js__WEBPACK_IMPORTED_MODULE_11__["default"]);
function SectionBlog() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.section,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: classes.sectionTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "Latest Articles"), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    md: 4,
    sm: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    blog: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    image: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: assets_img_dg6_jpg__WEBPACK_IMPORTED_MODULE_8__["default"],
    alt: "...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${assets_img_dg6_jpg__WEBPACK_IMPORTED_MODULE_8__["default"]})`,
      opacity: 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  })), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, __jsx("h6", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.cardCategory, classes.textRose),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, "Trends"), __jsx("h4", {
    className: classes.cardTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }, "Learn how to wear your scarf with a floral print shirt")), __jsx("p", {
    className: classes.cardDescription,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is...")))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    md: 4,
    sm: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    blog: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    image: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: assets_img_dg10_jpg__WEBPACK_IMPORTED_MODULE_9__["default"],
    alt: "...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${assets_img_dg10_jpg__WEBPACK_IMPORTED_MODULE_9__["default"]})`,
      opacity: 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  })), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, __jsx("h6", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.cardCategory, classes.textRose),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, "Fashion Week"), __jsx("h4", {
    className: classes.cardTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 19
    }
  }, "Katy Perry was wearing a Dolce & Gabanna arc dress")), __jsx("p", {
    className: classes.cardDescription,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is...")))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    md: 4,
    sm: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    blog: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    image: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: assets_img_dg9_jpg__WEBPACK_IMPORTED_MODULE_10__["default"],
    alt: "...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${assets_img_dg9_jpg__WEBPACK_IMPORTED_MODULE_10__["default"]})`,
      opacity: 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  })), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, __jsx("h6", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.cardCategory, classes.textRose),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, "Fashion Week"), __jsx("h4", {
    className: classes.cardTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 19
    }
  }, "Check the latest fashion events and which are the trends")), __jsx("p", {
    className: classes.cardDescription,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is...")))))));
}

/***/ }),

/***/ "./pages-sections/ecommerce/SectionLatestOffers.js":
/*!*********************************************************!*\
  !*** ./pages-sections/ecommerce/SectionLatestOffers.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionLatestOffers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_Card_Card_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Card/Card.js */ "./components/Card/Card.js");
/* harmony import */ var components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Card/CardHeader.js */ "./components/Card/CardHeader.js");
/* harmony import */ var components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Card/CardBody.js */ "./components/Card/CardBody.js");
/* harmony import */ var components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Card/CardFooter.js */ "./components/Card/CardFooter.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "@material-ui/core/Tooltip");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "@material-ui/icons/Favorite");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_pages_ecommerceSections_latestOffersStyle_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus/pages/ecommerceSections/latestOffersStyle.js */ "./assets/jss/nextjs-material-tim-andrus/pages/ecommerceSections/latestOffersStyle.js");
/* harmony import */ var assets_img_examples_gucci_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! assets/img/examples/gucci.jpg */ "./assets/img/examples/gucci.jpg");
/* harmony import */ var assets_img_examples_tom_ford_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! assets/img/examples/tom-ford.jpg */ "./assets/img/examples/tom-ford.jpg");
/* harmony import */ var assets_img_examples_dolce_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! assets/img/examples/dolce.jpg */ "./assets/img/examples/dolce.jpg");
var _jsxFileName = "/Users/timothyandrus/Dev/timothyandrus/pages-sections/ecommerce/SectionLatestOffers.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library that concatenates classes

 // core components







 // @material-ui/core components


 // @material-ui icons






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(assets_jss_nextjs_material_tim_andrus_pages_ecommerceSections_latestOffersStyle_js__WEBPACK_IMPORTED_MODULE_12__["default"]);
function SectionLatestOffers() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.section,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "Latest Offers"), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    md: 4,
    sm: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    product: true,
    plain: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    image: true,
    plain: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: assets_img_examples_gucci_jpg__WEBPACK_IMPORTED_MODULE_13__["default"],
    alt: "...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${assets_img_examples_gucci_jpg__WEBPACK_IMPORTED_MODULE_13__["default"]})`,
      opacity: 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  })), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.textCenter,
    plain: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, __jsx("h4", {
    className: classes.cardTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, "Gucci"), __jsx("p", {
    className: classes.cardDescription,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, "The structured shoulders and sleek detailing ensure a sharp silhouette. Team it with a silk pocket square and leather loafers.")), __jsx(components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    plain: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: classes.priceContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.price, classes.priceOld),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 19
    }
  }, " ", "$1,430"), __jsx("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.price, classes.priceNew),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 19
    }
  }, " ", "$743")), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.stats, classes.mlAuto),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_10___default.a, {
    id: "tooltip-top",
    title: "Saved to Wishlist",
    placement: "top",
    classes: {
      tooltip: classes.tooltip
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 19
    }
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    justIcon: true,
    simple: true,
    color: "rose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 23
    }
  }))))))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    md: 4,
    sm: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    product: true,
    plain: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    image: true,
    plain: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: assets_img_examples_dolce_jpg__WEBPACK_IMPORTED_MODULE_15__["default"],
    alt: "...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${assets_img_examples_dolce_jpg__WEBPACK_IMPORTED_MODULE_15__["default"]})`,
      opacity: 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  })), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.textCenter,
    plain: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, __jsx("h4", {
    className: classes.cardTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, "Dolce & Gabbana"), __jsx("p", {
    className: classes.cardDescription,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, "The structured shoulders and sleek detailing ensure a sharp silhouette. Team it with a silk pocket square and leather loafers.")), __jsx(components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    plain: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: classes.priceContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.price, classes.priceOld),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 19
    }
  }, " ", "$1,430"), __jsx("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.price, classes.priceNew),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 19
    }
  }, " ", "$743")), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.stats, classes.mlAuto),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_10___default.a, {
    id: "tooltip-top",
    title: "Saved to Wishlist",
    placement: "top",
    classes: {
      tooltip: classes.tooltip
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 19
    }
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    justIcon: true,
    simple: true,
    color: "rose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 21
    }
  }, __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 23
    }
  }))))))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    md: 4,
    sm: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    product: true,
    plain: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, __jsx(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    image: true,
    plain: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: assets_img_examples_tom_ford_jpg__WEBPACK_IMPORTED_MODULE_14__["default"],
    alt: "...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: classes.coloredShadow,
    style: {
      backgroundImage: `url(${assets_img_examples_tom_ford_jpg__WEBPACK_IMPORTED_MODULE_14__["default"]})`,
      opacity: 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  })), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.textCenter,
    plain: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 15
    }
  }, __jsx("h4", {
    className: classes.cardTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 17
    }
  }, "Dolce & Gabbana"), __jsx("p", {
    className: classes.cardDescription,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, "The structured shoulders and sleek detailing ensure a sharp silhouette. Team it with a silk pocket square and leather loafers.")), __jsx(components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    plain: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: classes.priceContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.price, classes.priceOld),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 19
    }
  }, " ", "$1,430"), __jsx("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.price, classes.priceNew),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 19
    }
  }, " ", "$743")), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.stats, classes.mlAuto),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_10___default.a, {
    id: "tooltip-top",
    title: "Saved to Wishlist",
    placement: "top",
    classes: {
      tooltip: classes.tooltip
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 19
    }
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    justIcon: true,
    simple: true,
    color: "rose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 21
    }
  }, __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 23
    }
  }))))))))));
}

/***/ }),

/***/ "./pages-sections/ecommerce/SectionProducts.js":
/*!*****************************************************!*\
  !*** ./pages-sections/ecommerce/SectionProducts.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionProducts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nouislider */ "nouislider");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "@material-ui/core/Tooltip");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "@material-ui/icons/Favorite");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/FavoriteBorder */ "@material-ui/icons/FavoriteBorder");
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Cached__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Cached */ "@material-ui/icons/Cached");
/* harmony import */ var _material_ui_icons_Cached__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Cached__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Subject__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Subject */ "@material-ui/icons/Subject");
/* harmony import */ var _material_ui_icons_Subject__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Subject__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Check */ "@material-ui/icons/Check");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var components_Accordion_Accordion_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Accordion/Accordion.js */ "./components/Accordion/Accordion.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_Card_Card_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/Card/Card.js */ "./components/Card/Card.js");
/* harmony import */ var components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/Card/CardHeader.js */ "./components/Card/CardHeader.js");
/* harmony import */ var components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/Card/CardBody.js */ "./components/Card/CardBody.js");
/* harmony import */ var components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/Card/CardFooter.js */ "./components/Card/CardFooter.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_Clearfix_Clearfix_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! components/Clearfix/Clearfix.js */ "./components/Clearfix/Clearfix.js");
/* harmony import */ var assets_img_examples_suit_1_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! assets/img/examples/suit-1.jpg */ "./assets/img/examples/suit-1.jpg");
/* harmony import */ var assets_img_examples_suit_2_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! assets/img/examples/suit-2.jpg */ "./assets/img/examples/suit-2.jpg");
/* harmony import */ var assets_img_examples_suit_3_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! assets/img/examples/suit-3.jpg */ "./assets/img/examples/suit-3.jpg");
/* harmony import */ var assets_img_examples_suit_4_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! assets/img/examples/suit-4.jpg */ "./assets/img/examples/suit-4.jpg");
/* harmony import */ var assets_img_examples_suit_5_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! assets/img/examples/suit-5.jpg */ "./assets/img/examples/suit-5.jpg");
/* harmony import */ var assets_img_examples_suit_6_jpg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! assets/img/examples/suit-6.jpg */ "./assets/img/examples/suit-6.jpg");
/* harmony import */ var assets_img_examples_color1_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! assets/img/examples/color1.jpg */ "./assets/img/examples/color1.jpg");
/* harmony import */ var assets_img_examples_color3_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! assets/img/examples/color3.jpg */ "./assets/img/examples/color3.jpg");
/* harmony import */ var assets_img_examples_color2_jpg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! assets/img/examples/color2.jpg */ "./assets/img/examples/color2.jpg");
/* harmony import */ var assets_img_dg3_jpg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! assets/img/dg3.jpg */ "./assets/img/dg3.jpg");
/* harmony import */ var assets_img_dg1_jpg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! assets/img/dg1.jpg */ "./assets/img/dg1.jpg");
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_pages_ecommerceSections_productsStyle_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus/pages/ecommerceSections/productsStyle.js */ "./assets/jss/nextjs-material-tim-andrus/pages/ecommerceSections/productsStyle.js");
var _jsxFileName = "/Users/timothyandrus/Dev/timothyandrus/pages-sections/ecommerce/SectionProducts.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library that concatenates classes

 // plugin that creates slider

 // @material-ui/core components




 // @material-ui icons





 // core components






















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(assets_jss_nextjs_material_tim_andrus_pages_ecommerceSections_productsStyle_js__WEBPACK_IMPORTED_MODULE_32__["default"]);
function SectionProducts() {
  const [checked, setChecked] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([1, 9, 27]);
  const [priceRange, setPriceRange] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([101, 790]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (!document.getElementById("sliderRegular").classList.contains("noUi-target")) {
      nouislider__WEBPACK_IMPORTED_MODULE_2___default.a.create(document.getElementById("sliderRegular"), {
        start: priceRange,
        connect: true,
        range: {
          min: 30,
          max: 900
        },
        step: 1
      }).on("update", function (values) {
        setPriceRange([Math.round(values[0]), Math.round(values[1])]);
      });
    }

    return function cleanup() {};
  });

  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const classes = useStyles();
  return __jsx("div", {
    className: classes.section,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, "Find what you need"), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    md: 3,
    sm: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    plain: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    className: classes.cardBodyRefine,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }, __jsx("h4", {
    className: classes.cardTitle + " " + classes.textLeft,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, "Refine", __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "tooltip-top",
    title: "Reset Filter",
    placement: "top",
    classes: {
      tooltip: classes.tooltip
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    link: true,
    justIcon: true,
    size: "sm",
    className: classes.pullRight + " " + classes.refineButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, __jsx(_material_ui_icons_Cached__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 23
    }
  }))), __jsx(components_Clearfix_Clearfix_js__WEBPACK_IMPORTED_MODULE_20__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 19
    }
  })), __jsx(components_Accordion_Accordion_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    active: [0, 2],
    activeColor: "rose",
    collapses: [{
      title: "Price Range",
      content: __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
        className: classes.cardBodyRefine,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 25
        }
      }, __jsx("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.pullLeft, classes.priceSlider),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 27
        }
      }, "$", priceRange[0]), __jsx("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.pullRight, classes.priceSlider),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 27
        }
      }, "$", priceRange[1]), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 27
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 27
        }
      }), __jsx("div", {
        id: "sliderRegular",
        className: "slider-rose",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 27
        }
      }))
    }, {
      title: "Clothing",
      content: __jsx("div", {
        className: classes.customExpandPanel,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 27
        }
      }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(1),
          checked: checked.indexOf(1) !== -1 ? true : false,
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Blazers",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(2),
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Casual Shirts",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(3),
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Formal Shirts",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(4),
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Jeans",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(5),
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Polos",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(6),
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Pyjamas",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(7),
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 282,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 274,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Shorts",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(8),
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 300,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 303,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 295,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Trousers",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 29
        }
      })))
    }, {
      title: "Designer",
      content: __jsx("div", {
        className: classes.customExpandPanel,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 27
        }
      }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(9),
          checked: checked.indexOf(9) !== -1 ? true : false,
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 339,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 342,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "All",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(10),
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 360,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 363,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 355,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Polo Ralph Lauren",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(11),
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 381,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 384,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 376,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Wooyoungmi",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(12),
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 402,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 405,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 397,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Alexander McQueen",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(13),
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 423,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 426,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 418,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Tom Ford",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(14),
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 444,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 447,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 439,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "AMI",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(15),
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 465,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 468,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 460,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Berena",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(16),
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 486,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 489,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 481,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Thom Sweeney",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(17),
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 507,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 510,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 502,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Burberry Prorsum",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 500,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(18),
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 528,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 531,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 523,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Calvin Klein",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(19),
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 549,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 552,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 544,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Kingsman",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(20),
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 570,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 573,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 565,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Club Monaco",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(21),
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 591,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 594,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 586,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Dolce & Gabbana",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 584,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(22),
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 612,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 615,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 607,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Gucci",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 605,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(23),
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 633,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 636,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 628,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Biglioli",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 626,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(24),
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 654,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 657,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 649,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Lanvin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 647,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(25),
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 675,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 678,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 670,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Loro Piana",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 668,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(26),
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 696,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 699,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 691,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Massimo Alba",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 689,
          columnNumber: 29
        }
      })))
    }, {
      title: "Colour",
      content: __jsx("div", {
        className: classes.customExpandPanel,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 717,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 718,
          columnNumber: 27
        }
      }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(27),
          checked: checked.indexOf(27) !== -1 ? true : false,
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 735,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 738,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 727,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "All",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 725,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(28),
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 756,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 759,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 751,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Black",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 749,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(29),
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 777,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 780,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 772,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Blue",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 770,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(30),
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 798,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 801,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 793,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Brown",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 791,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(31),
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 819,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 822,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 814,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Gray",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 812,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(32),
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 840,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 843,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 835,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Green",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 833,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(33),
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 861,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 864,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 856,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Neutrals",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 854,
          columnNumber: 29
        }
      }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default.a, {
        control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4___default.a, {
          disableRipple: true,
          tabIndex: -1,
          onClick: () => handleToggle(34),
          checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.checkedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 882,
              columnNumber: 37
            }
          }),
          icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_11___default.a, {
            className: classes.uncheckedIcon,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 885,
              columnNumber: 37
            }
          }),
          classes: {
            checked: classes.checked,
            root: classes.checkRoot
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 877,
            columnNumber: 33
          }
        }),
        classes: {
          label: classes.label
        },
        label: "Purple",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 875,
          columnNumber: 29
        }
      })))
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  })))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    md: 9,
    sm: 9,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 905,
      columnNumber: 11
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 906,
      columnNumber: 13
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    md: 4,
    sm: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 907,
      columnNumber: 15
    }
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    plain: true,
    product: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 908,
      columnNumber: 17
    }
  }, __jsx(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    noShadow: true,
    image: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 909,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 910,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: assets_img_examples_suit_1_jpg__WEBPACK_IMPORTED_MODULE_21__["default"],
    alt: "..",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 911,
      columnNumber: 23
    }
  }))), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    plain: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 914,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 915,
      columnNumber: 21
    }
  }, __jsx("h4", {
    className: classes.cardTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 916,
      columnNumber: 23
    }
  }, "Polo Ralph Lauren")), __jsx("p", {
    className: classes.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 918,
      columnNumber: 21
    }
  }, "Impeccably tailored in Italy from lightweight navy wool.")), __jsx(components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    plain: true,
    className: classes.justifyContentBetween,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 922,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: classes.priceContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 923,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: classes.price,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 924,
      columnNumber: 23
    }
  }, " $800")), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "tooltip-top",
    title: "Saved to Wishlist",
    placement: "left",
    classes: {
      tooltip: classes.tooltip
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 926,
      columnNumber: 21
    }
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    justIcon: true,
    simple: true,
    color: "rose",
    className: classes.pullRight,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 932,
      columnNumber: 23
    }
  }, __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 938,
      columnNumber: 25
    }
  })))))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    md: 4,
    sm: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 944,
      columnNumber: 15
    }
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    plain: true,
    product: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 945,
      columnNumber: 17
    }
  }, __jsx(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    noShadow: true,
    image: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 946,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 947,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: assets_img_examples_suit_2_jpg__WEBPACK_IMPORTED_MODULE_22__["default"],
    alt: "..",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 948,
      columnNumber: 23
    }
  }))), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    plain: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 951,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 952,
      columnNumber: 21
    }
  }, __jsx("h4", {
    className: classes.cardTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 953,
      columnNumber: 23
    }
  }, "Wooyoungmi")), __jsx("p", {
    className: classes.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 955,
      columnNumber: 21
    }
  }, "Dark-grey slub wool, pintucked notch lapels.")), __jsx(components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    plain: true,
    className: classes.justifyContentBetween,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 959,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: classes.priceContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 960,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: classes.price,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 961,
      columnNumber: 23
    }
  }, " $555")), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "tooltip-top",
    title: "Save to Wishlist",
    placement: "left",
    classes: {
      tooltip: classes.tooltip
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 963,
      columnNumber: 21
    }
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    justIcon: true,
    simple: true,
    color: "rose",
    className: classes.pullRight,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 969,
      columnNumber: 23
    }
  }, __jsx(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 975,
      columnNumber: 25
    }
  })))))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    md: 4,
    sm: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 981,
      columnNumber: 15
    }
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    plain: true,
    product: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 982,
      columnNumber: 17
    }
  }, __jsx(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    noShadow: true,
    image: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 983,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 984,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: assets_img_examples_suit_3_jpg__WEBPACK_IMPORTED_MODULE_23__["default"],
    alt: "..",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 985,
      columnNumber: 23
    }
  }))), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    plain: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 988,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 989,
      columnNumber: 21
    }
  }, __jsx("h4", {
    className: classes.cardTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 990,
      columnNumber: 23
    }
  }, "Tom Ford")), __jsx("p", {
    className: classes.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 992,
      columnNumber: 21
    }
  }, "Immaculate tailoring is TOM FORD", "'", "s forte.")), __jsx(components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    plain: true,
    className: classes.justifyContentBetween,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 996,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: classes.priceContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 997,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: classes.price,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 998,
      columnNumber: 23
    }
  }, " $879")), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "tooltip-top",
    title: "Save to Wishlist",
    placement: "left",
    classes: {
      tooltip: classes.tooltip
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1000,
      columnNumber: 21
    }
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    justIcon: true,
    simple: true,
    color: "rose",
    className: classes.pullRight,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1006,
      columnNumber: 23
    }
  }, __jsx(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1012,
      columnNumber: 25
    }
  })))))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    md: 4,
    sm: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1018,
      columnNumber: 15
    }
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    plain: true,
    product: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1019,
      columnNumber: 17
    }
  }, __jsx(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    noShadow: true,
    image: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1020,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1021,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: assets_img_examples_suit_4_jpg__WEBPACK_IMPORTED_MODULE_24__["default"],
    alt: "..",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1022,
      columnNumber: 23
    }
  }))), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    plain: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1025,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1026,
      columnNumber: 21
    }
  }, __jsx("h4", {
    className: classes.cardTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1027,
      columnNumber: 23
    }
  }, "Thom Sweeney")), __jsx("p", {
    className: classes.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1029,
      columnNumber: 21
    }
  }, "It", "'", "s made from lightweight grey wool woven.")), __jsx(components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    plain: true,
    className: classes.justifyContentBetween,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1033,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: classes.priceContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1034,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: classes.price,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1035,
      columnNumber: 23
    }
  }, " $680")), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "tooltip-top",
    title: "Save to Wishlist",
    placement: "left",
    classes: {
      tooltip: classes.tooltip
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1037,
      columnNumber: 21
    }
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    justIcon: true,
    simple: true,
    color: "rose",
    className: classes.pullRight,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1043,
      columnNumber: 23
    }
  }, __jsx(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1049,
      columnNumber: 25
    }
  })))))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    md: 4,
    sm: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1055,
      columnNumber: 15
    }
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    plain: true,
    product: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1056,
      columnNumber: 17
    }
  }, __jsx(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    noShadow: true,
    image: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1057,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1058,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: assets_img_examples_suit_5_jpg__WEBPACK_IMPORTED_MODULE_25__["default"],
    alt: "..",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1059,
      columnNumber: 23
    }
  }))), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    plain: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1062,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1063,
      columnNumber: 21
    }
  }, __jsx("h4", {
    className: classes.cardTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1064,
      columnNumber: 23
    }
  }, "Kingsman")), __jsx("p", {
    className: classes.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1066,
      columnNumber: 21
    }
  }, "Crafted from khaki cotton and fully canvassed.")), __jsx(components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    plain: true,
    className: classes.justifyContentBetween,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1070,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: classes.priceContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1071,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: classes.price,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1072,
      columnNumber: 23
    }
  }, " $725")), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "tooltip-top",
    title: "Saved to Wishlist",
    placement: "left",
    classes: {
      tooltip: classes.tooltip
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1074,
      columnNumber: 21
    }
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    justIcon: true,
    simple: true,
    color: "rose",
    className: classes.pullRight,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1080,
      columnNumber: 23
    }
  }, __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1086,
      columnNumber: 25
    }
  })))))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    md: 4,
    sm: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1092,
      columnNumber: 15
    }
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    plain: true,
    product: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1093,
      columnNumber: 17
    }
  }, __jsx(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    noShadow: true,
    image: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1094,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1095,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: assets_img_examples_suit_6_jpg__WEBPACK_IMPORTED_MODULE_26__["default"],
    alt: "..",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1096,
      columnNumber: 23
    }
  }))), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    plain: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1099,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1100,
      columnNumber: 21
    }
  }, __jsx("h4", {
    className: classes.cardTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1101,
      columnNumber: 23
    }
  }, "Boglioli")), __jsx("p", {
    className: classes.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1103,
      columnNumber: 21
    }
  }, "Masterfully crafted in Northern Italy.")), __jsx(components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    plain: true,
    className: classes.justifyContentBetween,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1107,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: classes.priceContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1108,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: classes.price,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1109,
      columnNumber: 23
    }
  }, " $699")), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "tooltip-top",
    title: "Save to Wishlist",
    placement: "left",
    classes: {
      tooltip: classes.tooltip
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1111,
      columnNumber: 21
    }
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    justIcon: true,
    simple: true,
    color: "rose",
    className: classes.pullRight,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1117,
      columnNumber: 23
    }
  }, __jsx(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1123,
      columnNumber: 25
    }
  })))))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    md: 3,
    sm: 3,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.mlAuto, classes.mrAuto),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1129,
      columnNumber: 15
    }
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    round: true,
    color: "rose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1134,
      columnNumber: 17
    }
  }, "Load more..."))))), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1141,
      columnNumber: 9
    }
  }), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1142,
      columnNumber: 9
    }
  }, "News in fashion"), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1143,
      columnNumber: 9
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    md: 4,
    sm: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1144,
      columnNumber: 11
    }
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    background: true,
    style: {
      backgroundImage: `url(${assets_img_examples_color1_jpg__WEBPACK_IMPORTED_MODULE_27__["default"]})`
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1145,
      columnNumber: 13
    }
  }, __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    background: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1146,
      columnNumber: 15
    }
  }, __jsx("h6", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.cardCategory, classes.textInfo),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1147,
      columnNumber: 17
    }
  }, "Productivity Apps"), __jsx("a", {
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1152,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: classes.cardTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1153,
      columnNumber: 19
    }
  }, "The best trends in fashion ", new Date().getFullYear())), __jsx("p", {
    className: classes.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1157,
      columnNumber: 17
    }
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is..."), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    href: "#",
    round: true,
    color: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1162,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Subject__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1163,
      columnNumber: 19
    }
  }), " Read")))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    md: 4,
    sm: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1168,
      columnNumber: 11
    }
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    background: true,
    style: {
      backgroundImage: `url(${assets_img_examples_color3_jpg__WEBPACK_IMPORTED_MODULE_28__["default"]})`
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1169,
      columnNumber: 13
    }
  }, __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    background: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1170,
      columnNumber: 15
    }
  }, __jsx("h6", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.cardCategory, classes.textInfo),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1171,
      columnNumber: 17
    }
  }, "FASHION NEWS"), __jsx("a", {
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1176,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: classes.cardTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1177,
      columnNumber: 19
    }
  }, "Kanye joins the Yeezy team at Adidas")), __jsx("p", {
    className: classes.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1181,
      columnNumber: 17
    }
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is..."), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    href: "#",
    round: true,
    color: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1186,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Subject__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1187,
      columnNumber: 19
    }
  }), " Read")))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    md: 4,
    sm: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1192,
      columnNumber: 11
    }
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    background: true,
    style: {
      backgroundImage: `url(${assets_img_examples_color2_jpg__WEBPACK_IMPORTED_MODULE_29__["default"]})`
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1193,
      columnNumber: 13
    }
  }, __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    background: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1194,
      columnNumber: 15
    }
  }, __jsx("h6", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.cardCategory, classes.textInfo),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1195,
      columnNumber: 17
    }
  }, "Productivity Apps"), __jsx("a", {
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1200,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: classes.cardTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1201,
      columnNumber: 19
    }
  }, "Learn how to use the new colors of", " ", new Date().getFullYear())), __jsx("p", {
    className: classes.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1206,
      columnNumber: 17
    }
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is..."), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    href: "#",
    round: true,
    color: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1211,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Subject__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1212,
      columnNumber: 19
    }
  }), " Read")))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    md: 6,
    sm: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1217,
      columnNumber: 11
    }
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    background: true,
    style: {
      backgroundImage: `url(${assets_img_dg3_jpg__WEBPACK_IMPORTED_MODULE_30__["default"]})`
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1218,
      columnNumber: 13
    }
  }, __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    background: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1219,
      columnNumber: 15
    }
  }, __jsx("h6", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.cardCategory, classes.textInfo),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1220,
      columnNumber: 17
    }
  }, "Tutorials"), __jsx("a", {
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1225,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: classes.cardTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1226,
      columnNumber: 19
    }
  }, "Trending colors of ", new Date().getFullYear())), __jsx("p", {
    className: classes.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1230,
      columnNumber: 17
    }
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is..."), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    href: "#",
    round: true,
    color: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1235,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Subject__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1236,
      columnNumber: 19
    }
  }), " Read")))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    md: 6,
    sm: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1241,
      columnNumber: 11
    }
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    background: true,
    style: {
      backgroundImage: `url(${assets_img_dg1_jpg__WEBPACK_IMPORTED_MODULE_31__["default"]})`
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1242,
      columnNumber: 13
    }
  }, __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    background: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1243,
      columnNumber: 15
    }
  }, __jsx("h6", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.cardCategory, classes.textInfo),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1244,
      columnNumber: 17
    }
  }, "Productivity Style"), __jsx("a", {
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1249,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: classes.cardTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1250,
      columnNumber: 19
    }
  }, "Fashion & Style ", new Date().getFullYear())), __jsx("p", {
    className: classes.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1254,
      columnNumber: 17
    }
  }, "Don", "'", "t be scared of the truth because I need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is..."), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    href: "#",
    round: true,
    color: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1259,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Subject__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1260,
      columnNumber: 19
    }
  }), " Read")))))));
}

/***/ }),

/***/ "./pages/ecommerce.js":
/*!****************************!*\
  !*** ./pages/ecommerce.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EcommercePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "@material-ui/core/InputAdornment");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Mail */ "@material-ui/icons/Mail");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_Header_Header_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Header/Header.js */ "./components/Header/Header.js");
/* harmony import */ var components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Header/HeaderLinks.js */ "./components/Header/HeaderLinks.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_Parallax_Parallax_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Parallax/Parallax.js */ "./components/Parallax/Parallax.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_Card_Card_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Card/Card.js */ "./components/Card/Card.js");
/* harmony import */ var components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/Card/CardBody.js */ "./components/Card/CardBody.js");
/* harmony import */ var components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/CustomInput/CustomInput.js */ "./components/CustomInput/CustomInput.js");
/* harmony import */ var components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/Footer/Footer.js */ "./components/Footer/Footer.js");
/* harmony import */ var pages_sections_ecommerce_SectionLatestOffers_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! pages-sections/ecommerce/SectionLatestOffers.js */ "./pages-sections/ecommerce/SectionLatestOffers.js");
/* harmony import */ var pages_sections_ecommerce_SectionProducts_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! pages-sections/ecommerce/SectionProducts.js */ "./pages-sections/ecommerce/SectionProducts.js");
/* harmony import */ var pages_sections_ecommerce_SectionBlog_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! pages-sections/ecommerce/SectionBlog.js */ "./pages-sections/ecommerce/SectionBlog.js");
/* harmony import */ var assets_img_examples_ecommerce_header_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! assets/img/examples/ecommerce-header.jpg */ "./assets/img/examples/ecommerce-header.jpg");
/* harmony import */ var assets_img_faces_card_profile6_square_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! assets/img/faces/card-profile6-square.jpg */ "./assets/img/faces/card-profile6-square.jpg");
/* harmony import */ var assets_img_faces_christian_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! assets/img/faces/christian.jpg */ "./assets/img/faces/christian.jpg");
/* harmony import */ var assets_img_faces_card_profile4_square_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! assets/img/faces/card-profile4-square.jpg */ "./assets/img/faces/card-profile4-square.jpg");
/* harmony import */ var assets_img_faces_card_profile1_square_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! assets/img/faces/card-profile1-square.jpg */ "./assets/img/faces/card-profile1-square.jpg");
/* harmony import */ var assets_img_faces_marc_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! assets/img/faces/marc.jpg */ "./assets/img/faces/marc.jpg");
/* harmony import */ var assets_img_faces_kendall_jpg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! assets/img/faces/kendall.jpg */ "./assets/img/faces/kendall.jpg");
/* harmony import */ var assets_img_faces_card_profile5_square_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! assets/img/faces/card-profile5-square.jpg */ "./assets/img/faces/card-profile5-square.jpg");
/* harmony import */ var assets_img_faces_card_profile2_square_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! assets/img/faces/card-profile2-square.jpg */ "./assets/img/faces/card-profile2-square.jpg");
/* harmony import */ var assets_jss_nextjs_material_tim_andrus_pages_ecommerceStyle_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! assets/jss/nextjs-material-tim-andrus/pages/ecommerceStyle.js */ "./assets/jss/nextjs-material-tim-andrus/pages/ecommerceStyle.js");
var _jsxFileName = "/Users/timothyandrus/Dev/timothyandrus/pages/ecommerce.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/*eslint-disable*/
 // nodejs library that concatenates classes

 // @material-ui/core components




 // @material-ui icons

 // core components










 // sections for this page














const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_nextjs_material_tim_andrus_pages_ecommerceStyle_js__WEBPACK_IMPORTED_MODULE_29__["default"]);
function EcommercePage() {
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    brand: "Timothy Andrus",
    links: __jsx(components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      dropdownHoverColor: "info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 16
      }
    }),
    fixed: true,
    color: "transparent",
    changeColorOnScroll: {
      height: 300,
      color: "info"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }), __jsx(components_Parallax_Parallax_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    image: __webpack_require__(/*! assets/img/examples/clark-street-merc.jpg */ "./assets/img/examples/clark-street-merc.jpg"),
    filter: "dark",
    small: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    md: 8,
    sm: 8,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.mlAuto, classes.mrAuto, classes.textCenter),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.brand,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, __jsx("h1", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, "Leadership and Love"), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, "How to effectively lead teams in uncertain times", " ")))))), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.main, classes.mainRaised),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx(pages_sections_ecommerce_SectionLatestOffers_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }), __jsx(pages_sections_ecommerce_SectionProducts_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  })), __jsx(pages_sections_ecommerce_SectionBlog_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.subscribeLine, classes.subscribeLineImage),
    style: {
      backgroundImage: `url(${assets_img_examples_ecommerce_header_jpg__WEBPACK_IMPORTED_MODULE_20__["default"]})`
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 6,
    md: 6,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.mlAuto, classes.mrAuto),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.textCenter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, "Subscribe to our Newsletter"), __jsx("p", {
    className: classes.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, "Join my newsletter and get news in your inbox every week! We hate spam too, so no worries about this.")), __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    raised: true,
    className: classes.card,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.cardBody,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, __jsx("form", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 19
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 23
    }
  }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "emailPreFooter",
    formControlProps: {
      fullWidth: true,
      className: classes.cardForm
    },
    inputProps: {
      startAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_5___default.a, {
        position: "start",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 31
        }
      }, __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 33
        }
      })),
      placeholder: "Your Email..."
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 25
    }
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 23
    }
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    color: "rose",
    block: true,
    className: classes.subscribeButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 25
    }
  }, "subscribe")))))))))), __jsx(components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    theme: "dark",
    content: __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: classes.left,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.list,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: classes.inlineBlock,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "http://www.nowsta.com",
      target: "_blank",
      className: classes.block,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 19
      }
    }, "Blog")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: classes.inlineBlock,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "https://www.nowsta.com",
      target: "_blank",
      className: classes.block,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 19
      }
    }, "Presentation")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: classes.inlineBlock,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "#pablito",
      onClick: e => e.preventDefault(),
      className: classes.block,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 19
      }
    }, "Discover")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: classes.inlineBlock,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "#pablito",
      onClick: e => e.preventDefault(),
      className: classes.block,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 19
      }
    }, "Payment")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: classes.inlineBlock,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "https://www.nowsta.com",
      target: "_blank",
      className: classes.block,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 19
      }
    }, "Contact us")))), __jsx("div", {
      className: classes.right,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 13
      }
    }, "Copyright \xA9 ", 1900 + new Date().getYear(), " ", __jsx("a", {
      href: "https://www.nowsta.com",
      target: "_blank",
      className: classes.aClasses,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 15
      }
    }, "Tim Andrus"), " ", "All Rights Reserved.")),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 9
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 4,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 11
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 13
    }
  }, "About Us"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 13
    }
  }, "Tim Andrus is an engineer that creates design tools that make the web development process faster and easier.", " "), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 13
    }
  }, "I love the web and care deeply for how users interact with a digital product. I power businesses and individuals to create better looking web projects around the world.", " ")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 4,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 11
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 13
    }
  }, "Social Feed"), __jsx("div", {
    className: classes.socialFeed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "fab fa-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 17
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 17
    }
  }, "How to handle ethical disagreements with your clients.")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "fab fa-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 17
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 17
    }
  }, "The tangible benefits of designing at 1x pixel density.")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "fab fa-facebook-square",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 17
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 17
    }
  }, "A collection of 25 stunning sites that you can use for inspiration.")))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 4,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 11
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 13
    }
  }, "Instagram Feed"), __jsx("div", {
    className: classes.galleryFeed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: assets_img_faces_card_profile6_square_jpg__WEBPACK_IMPORTED_MODULE_21__["default"],
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.img, classes.imgRaised, classes.imgRounded),
    alt: "...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 15
    }
  }), __jsx("img", {
    src: assets_img_faces_christian_jpg__WEBPACK_IMPORTED_MODULE_22__["default"],
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.img, classes.imgRaised, classes.imgRounded),
    alt: "...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 15
    }
  }), __jsx("img", {
    src: assets_img_faces_card_profile4_square_jpg__WEBPACK_IMPORTED_MODULE_23__["default"],
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.img, classes.imgRaised, classes.imgRounded),
    alt: "...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 15
    }
  }), __jsx("img", {
    src: assets_img_faces_card_profile1_square_jpg__WEBPACK_IMPORTED_MODULE_24__["default"],
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.img, classes.imgRaised, classes.imgRounded),
    alt: "...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 15
    }
  }), __jsx("img", {
    src: assets_img_faces_marc_jpg__WEBPACK_IMPORTED_MODULE_25__["default"],
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.img, classes.imgRaised, classes.imgRounded),
    alt: "...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 15
    }
  }), __jsx("img", {
    src: assets_img_faces_kendall_jpg__WEBPACK_IMPORTED_MODULE_26__["default"],
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.img, classes.imgRaised, classes.imgRounded),
    alt: "...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 15
    }
  }), __jsx("img", {
    src: assets_img_faces_card_profile5_square_jpg__WEBPACK_IMPORTED_MODULE_27__["default"],
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.img, classes.imgRaised, classes.imgRounded),
    alt: "...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 15
    }
  }), __jsx("img", {
    src: assets_img_faces_card_profile2_square_jpg__WEBPACK_IMPORTED_MODULE_28__["default"],
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.img, classes.imgRaised, classes.imgRounded),
    alt: "...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 15
    }
  }))))));
}

/***/ }),

/***/ 4:
/*!**********************************!*\
  !*** multi ./pages/ecommerce.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/timothyandrus/Dev/timothyandrus/pages/ecommerce.js */"./pages/ecommerce.js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Checkbox":
/*!*********************************************!*\
  !*** external "@material-ui/core/Checkbox" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "@material-ui/core/ClickAwayListener":
/*!******************************************************!*\
  !*** external "@material-ui/core/ClickAwayListener" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ClickAwayListener");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/ExpansionPanel":
/*!***************************************************!*\
  !*** external "@material-ui/core/ExpansionPanel" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanel");

/***/ }),

/***/ "@material-ui/core/ExpansionPanelDetails":
/*!**********************************************************!*\
  !*** external "@material-ui/core/ExpansionPanelDetails" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelDetails");

/***/ }),

/***/ "@material-ui/core/ExpansionPanelSummary":
/*!**********************************************************!*\
  !*** external "@material-ui/core/ExpansionPanelSummary" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelSummary");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Grow":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grow" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grow");

/***/ }),

/***/ "@material-ui/core/Hidden":
/*!*******************************************!*\
  !*** external "@material-ui/core/Hidden" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "@material-ui/core/Icon":
/*!*****************************************!*\
  !*** external "@material-ui/core/Icon" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Icon");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Input":
/*!******************************************!*\
  !*** external "@material-ui/core/Input" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "@material-ui/core/InputAdornment":
/*!***************************************************!*\
  !*** external "@material-ui/core/InputAdornment" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputAdornment");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/MenuList":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuList" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuList");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Popper":
/*!*******************************************!*\
  !*** external "@material-ui/core/Popper" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popper");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Tooltip":
/*!********************************************!*\
  !*** external "@material-ui/core/Tooltip" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/AccountBalance":
/*!****************************************************!*\
  !*** external "@material-ui/icons/AccountBalance" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountBalance");

/***/ }),

/***/ "@material-ui/icons/AccountCircle":
/*!***************************************************!*\
  !*** external "@material-ui/icons/AccountCircle" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ "@material-ui/icons/Apps":
/*!******************************************!*\
  !*** external "@material-ui/icons/Apps" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Apps");

/***/ }),

/***/ "@material-ui/icons/ArtTrack":
/*!**********************************************!*\
  !*** external "@material-ui/icons/ArtTrack" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArtTrack");

/***/ }),

/***/ "@material-ui/icons/Assignment":
/*!************************************************!*\
  !*** external "@material-ui/icons/Assignment" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Assignment");

/***/ }),

/***/ "@material-ui/icons/AttachMoney":
/*!*************************************************!*\
  !*** external "@material-ui/icons/AttachMoney" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AttachMoney");

/***/ }),

/***/ "@material-ui/icons/Build":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Build" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Build");

/***/ }),

/***/ "@material-ui/icons/Cached":
/*!********************************************!*\
  !*** external "@material-ui/icons/Cached" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Cached");

/***/ }),

/***/ "@material-ui/icons/Call":
/*!******************************************!*\
  !*** external "@material-ui/icons/Call" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Call");

/***/ }),

/***/ "@material-ui/icons/Chat":
/*!******************************************!*\
  !*** external "@material-ui/icons/Chat" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Chat");

/***/ }),

/***/ "@material-ui/icons/Check":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Check" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Check");

/***/ }),

/***/ "@material-ui/icons/Clear":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Clear" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Clear");

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "@material-ui/icons/Dns":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Dns" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dns");

/***/ }),

/***/ "@material-ui/icons/Error":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Error" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Error");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "@material-ui/icons/Favorite":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Favorite" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ "@material-ui/icons/FavoriteBorder":
/*!****************************************************!*\
  !*** external "@material-ui/icons/FavoriteBorder" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FavoriteBorder");

/***/ }),

/***/ "@material-ui/icons/Fingerprint":
/*!*************************************************!*\
  !*** external "@material-ui/icons/Fingerprint" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Fingerprint");

/***/ }),

/***/ "@material-ui/icons/Layers":
/*!********************************************!*\
  !*** external "@material-ui/icons/Layers" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Layers");

/***/ }),

/***/ "@material-ui/icons/LineStyle":
/*!***********************************************!*\
  !*** external "@material-ui/icons/LineStyle" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LineStyle");

/***/ }),

/***/ "@material-ui/icons/List":
/*!******************************************!*\
  !*** external "@material-ui/icons/List" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/List");

/***/ }),

/***/ "@material-ui/icons/LocationOn":
/*!************************************************!*\
  !*** external "@material-ui/icons/LocationOn" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocationOn");

/***/ }),

/***/ "@material-ui/icons/Mail":
/*!******************************************!*\
  !*** external "@material-ui/icons/Mail" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/MonetizationOn":
/*!****************************************************!*\
  !*** external "@material-ui/icons/MonetizationOn" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MonetizationOn");

/***/ }),

/***/ "@material-ui/icons/People":
/*!********************************************!*\
  !*** external "@material-ui/icons/People" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/People");

/***/ }),

/***/ "@material-ui/icons/PersonAdd":
/*!***********************************************!*\
  !*** external "@material-ui/icons/PersonAdd" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PersonAdd");

/***/ }),

/***/ "@material-ui/icons/ShoppingBasket":
/*!****************************************************!*\
  !*** external "@material-ui/icons/ShoppingBasket" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShoppingBasket");

/***/ }),

/***/ "@material-ui/icons/ShoppingCart":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ShoppingCart" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShoppingCart");

/***/ }),

/***/ "@material-ui/icons/Store":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Store" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Store");

/***/ }),

/***/ "@material-ui/icons/Subject":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Subject" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Subject");

/***/ }),

/***/ "@material-ui/icons/ViewCarousel":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ViewCarousel" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ViewCarousel");

/***/ }),

/***/ "@material-ui/icons/ViewDay":
/*!*********************************************!*\
  !*** external "@material-ui/icons/ViewDay" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ViewDay");

/***/ }),

/***/ "@material-ui/icons/ViewQuilt":
/*!***********************************************!*\
  !*** external "@material-ui/icons/ViewQuilt" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ViewQuilt");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "nouislider":
/*!*****************************!*\
  !*** external "nouislider" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nouislider");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=ecommerce.js.map