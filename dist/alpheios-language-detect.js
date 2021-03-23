/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./language-detect.js":
/*!****************************!*\
  !*** ./language-detect.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LanguageDetect)
/* harmony export */ });
class LanguageDetect {
  static get langs () {
    return {
      grc: { regex: /^[\u0374-\u03FB ]|[\u1F00-\u1FFE]+$/u, langCode: 'grc' },
      gez: { regex: /^[\u1200-\u137C ]+$/u, langCode: 'gez' },
      zho: { regex: /^[\u4E00-\u4EFF ]|[\u5000-\u5FFF]|[\u6000-\u6FFF]|[\u7000-\u7FFF]|[\u8000-\u8FFF]|[\u9000-\u9FFF]+$/u, langCode: 'zho' },
      syr: { regex: /^[\u0700-\u074F ]|[\u0860-\u086A]+$/u, langCode: 'syr' },
      per: { regex: /^[\u0621-\u06CC ]+$/u, langCode: 'per' },
      ara: { regex: /^[\u0600-\u06FF ]|[\u0750-\u077F]|[\u08A0-\u08FF]|[\uFB50-\uFDFF]+$/u, langCode: 'ara' },
      lat: { regex: /^[A-Za-z ]+$/, langCode: 'lat' }
    }
  }

  static get defaultLangCode () {
    return 'lat'
  }

  static detect (text) {
    let langRes
    for (let i = 0; i < Object.values(this.langs).length; i++) {
      const langData = Object.values(this.langs)[i]

      if (langData.regex.test(text)) {
        langRes = langData.langCode
        break
      }
    }
    return langRes
  }
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageDetect": () => (/* reexport safe */ _language_detect_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _language_detect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/language-detect.js */ "./language-detect.js");




})();

window.LanguageDetect = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=alpheios-language-detect.js.map