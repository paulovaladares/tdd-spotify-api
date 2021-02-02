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
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./src/index */ "./src/index.js").default;

/***/ }),

/***/ "./src/album.js":
/*!**********************!*\
  !*** ./src/album.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ album
/* harmony export */ });
function album() {
  var _this = this;

  return {
    getAlbum: function getAlbum(id) {
      return _this.request("".concat(_this.apiURL, "/albums/").concat(id));
    },
    getAlbums: function getAlbums(ids) {
      return _this.request("".concat(_this.apiURL, "/albums/").concat(ids));
    },
    getTracks: function getTracks(id) {
      return _this.request("".concat(_this.apiURL, "/albums/").concat(id, "/tracks"));
    }
  };
}

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ SpotifyWrapper
/* harmony export */ });
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search */ "./src/search.js");
/* harmony import */ var _album__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./album */ "./src/album.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var SpotifyWrapper = /*#__PURE__*/function () {
  function SpotifyWrapper(options) {
    _classCallCheck(this, SpotifyWrapper);

    this.apiURL = options.apiURL || _config__WEBPACK_IMPORTED_MODULE_2__.API_URL;
    this.token = options.token;
    this.album = _album__WEBPACK_IMPORTED_MODULE_1__.default.bind(this)();
    this.search = _search__WEBPACK_IMPORTED_MODULE_0__.default.bind(this)();
  }

  _createClass(SpotifyWrapper, [{
    key: "request",
    value: function request(url) {
      var headers = {
        headers: {
          Authorization: "Bearer ".concat(this.token)
        }
      };
      return fetch(url, headers).then(_utils__WEBPACK_IMPORTED_MODULE_3__.default);
    }
  }]);

  return SpotifyWrapper;
}();



/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ search
/* harmony export */ });
function searcher(type, query) {
  return this.request("".concat(this.apiURL, "/search?q=").concat(query, "&type=").concat(type));
}

function search() {
  return {
    artists: searcher.bind(this, 'artist'),
    albums: searcher.bind(this, 'album'),
    tracks: searcher.bind(this, 'track'),
    playlists: searcher.bind(this, 'playlist')
  };
}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/******/ 	return __webpack_require__("./index.js");
/******/ })()
;
});
//# sourceMappingURL=spotify-wrapper.umd.js.map