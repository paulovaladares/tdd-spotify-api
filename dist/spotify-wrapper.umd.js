(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["spotifyWrapper"] = factory();
	else
		root["spotifyWrapper"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/album.js":
/*!**********************!*\
  !*** ./src/album.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAlbum": () => /* binding */ getAlbum,
/* harmony export */   "getAlbums": () => /* binding */ getAlbums,
/* harmony export */   "getAlbumTracks": () => /* binding */ getAlbumTracks
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");



var getAlbum = function getAlbum(id) {
  return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/albums/").concat(id), _config__WEBPACK_IMPORTED_MODULE_0__.HEADER).then(_utils__WEBPACK_IMPORTED_MODULE_1__.default);
};

var getAlbums = function getAlbums(ids) {
  return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/albums/").concat(ids), _config__WEBPACK_IMPORTED_MODULE_0__.HEADER).then(_utils__WEBPACK_IMPORTED_MODULE_1__.default);
};

var getAlbumTracks = function getAlbumTracks(id) {
  return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/albums/").concat(id, "/tracks"), _config__WEBPACK_IMPORTED_MODULE_0__.HEADER).then(_utils__WEBPACK_IMPORTED_MODULE_1__.default);
};



/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": () => /* binding */ API_URL,
/* harmony export */   "HEADER": () => /* binding */ HEADER
/* harmony export */ });
var API_URL = 'https://api.spotify.com/v1';
var API_TOKEN = 'BQCnBeqNi-7UKR3V3wQ3g1vMruc35m8z1uERFugUFsjPruGxCokrSbsPn-Ln7Pe9VbqX0ILCmGzVZDio9JYcRhzIr6r3lAjzOV9s7nbEG6aDYnt2p7vVxt5OCFwkXFGtYtS6TwgQ8eh8R5cIrYT5-w1q24zooGmbpNH62k1poYstjdyOeuCUtVVCYTuXU7VvzrJCwrPe_BMrO9Bq9N33Z1jBqopwJXLwZ51LldbYmQv16I0ulqyU8Vh1C-OP3WvJ1dGvoIfrVosK_XYKTSc_';
var HEADER = {
  headers: {
    Authorization: "Bearer ".concat(API_TOKEN)
  }
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "search": () => /* reexport safe */ _search__WEBPACK_IMPORTED_MODULE_0__.search,
/* harmony export */   "searchAlbums": () => /* reexport safe */ _search__WEBPACK_IMPORTED_MODULE_0__.searchAlbums,
/* harmony export */   "searchArtists": () => /* reexport safe */ _search__WEBPACK_IMPORTED_MODULE_0__.searchArtists,
/* harmony export */   "searchTracks": () => /* reexport safe */ _search__WEBPACK_IMPORTED_MODULE_0__.searchTracks,
/* harmony export */   "searchPlaylists": () => /* reexport safe */ _search__WEBPACK_IMPORTED_MODULE_0__.searchPlaylists,
/* harmony export */   "getAlbum": () => /* reexport safe */ _album__WEBPACK_IMPORTED_MODULE_1__.getAlbum,
/* harmony export */   "getAlbums": () => /* reexport safe */ _album__WEBPACK_IMPORTED_MODULE_1__.getAlbums,
/* harmony export */   "getAlbumTracks": () => /* reexport safe */ _album__WEBPACK_IMPORTED_MODULE_1__.getAlbumTracks
/* harmony export */ });
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search */ "./src/search.js");
/* harmony import */ var _album__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./album */ "./src/album.js");




/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "search": () => /* binding */ search,
/* harmony export */   "searchAlbums": () => /* binding */ searchAlbums,
/* harmony export */   "searchArtists": () => /* binding */ searchArtists,
/* harmony export */   "searchTracks": () => /* binding */ searchTracks,
/* harmony export */   "searchPlaylists": () => /* binding */ searchPlaylists
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");



var search = function search(query, type) {
  return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/search?q=").concat(query, "&type=").concat(type), _config__WEBPACK_IMPORTED_MODULE_0__.HEADER).then(_utils__WEBPACK_IMPORTED_MODULE_1__.default);
};

var searchArtists = function searchArtists(query) {
  return search(query, 'artist');
};

var searchAlbums = function searchAlbums(query) {
  return search(query, 'album');
};

var searchTracks = function searchTracks(query) {
  return search(query, 'track');
};

var searchPlaylists = function searchPlaylists(query) {
  return search(query, 'playlist');
};



/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var toJson = function toJson(data) {
  return data.json();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toJson);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.js");
/******/ })()
;
});
//# sourceMappingURL=spotify-wrapper.umd.js.map