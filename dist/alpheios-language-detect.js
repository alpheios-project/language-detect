(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (() => { // webpackBootstrap
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
/* eslint-disable no-misleading-character-class */
class LanguageDetect {
  static get langs () {
    return [
      {
        langCode: 'grc',
        regex: /^([\u0374-\u03FB]|[\u1F00-\u1FFE])+$/u,
        punctuation: /[ .,;:!?"(){}[\]<>\u00A0\u2010\u2011\u2012\u2013\u2014\u2015\u2018\u2020\u2021\u201C\u201D\u0387\u00B7\n\r\u200C\u200D]/ug
      },
      {
        langCode: 'gez',
        regex: /^[\u1200-\u137C]+$/u,
        punctuation: /[ ፡፨።፣፤፥፦፧፠,;:!?'"(){}[\]<>\u00A0\u2010\u2011\u2012\u2013\u2014\u2015\u2018\u2019\u2020\u2021\u201C\u201D\u0387\u00B7\n\r\u200C\u200D]/ug
      },
      {
        langCode: 'zho',
        regex: /^([\u3000-\u303F]|[\u4E00-\u4FFF]|[\u5000-\u5FFF]|[\u6000-\u6FFF]|[\u7000-\u7FFF]|[\u8000-\u8FFF]|[\u9000-\u9FFF])+$/u,
        punctuation: /[ .,;:!?'"(){}[\]<>\n\r\uFF0C\u3001\u3002\u300C\u300D\u300A\u300B\u200C\u200D\u2020\u2021]/ug
      },
      {
        langCode: 'syr',
        regex: /^([\u0700-\u074F]|[\u0860-\u086A])+$/u,
        punctuation: /[ \u0700\u0701\u0702\u0703\u0704\u0705\u0706\u0707\u0708\u0709\u070A\u070B\u070C\u070D\u070F\u0738\u073C.,;:!?'"(){}[\]<>/\u00A0\u2010\u2011\u2012\u2013\u2014\u2015\u2018\u2019\u2020\u2021\u201C\u201D\n\r\u200C\u200D\u0323\u0307\u0308]/ug
      },
      {
        langCode: 'per',
        regex: /^[\u0621-\u06CC]+$/u,
        punctuation: /[ -.,;:!?'"(){}[\]<>\u00A0\u2010\u2011\u2012\u2013\u2014\u2015\u2018\u2019\u2020\u2021\u201C\u201D\u0387\u00B7\n\r\u200C\u200D]/ug
      },
      {
        langCode: 'ara',
        regex: /^([\u0600-\u06FF]|[\u0750-\u077F]|[\u08A0-\u08FF]|[\uFB50-\uFDFF])+$/u,
        punctuation: /[ .,;:!?'"(){}[\]<>\u00A0\u2010\u2011\u2012\u2013\u2014\u2015\u2018\u2019\u2020\u2021\u201C\u201D\u0387\u00B7\n\r\u200C\u200D]/ug
      },
      {
        langCode: 'lat',
        regex: /^[A-Za-z]+$/,
        punctuation: /[ .,;:!?'"(){}[\]<>\u00A0\u2010\u2011\u2012\u2013\u2014\u2015\u2018\u2019\u2020\u2021\u201C\u201D\u0387\u00B7\n\r\u200C\u200D]/ug
      }
    ]
  }

  static get defaultLangCode () {
    return 'lat'
  }

  static detect (text) {
    let langRes

    for (let i = 0; i < this.langs.length; i++) {
      const langData = this.langs[i]
      const checkText = text.replace(langData.punctuation, '')

      if (langData.regex.test(checkText)) {
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
/* harmony import */ var _language_detect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language-detect.js */ "./language-detect.js");




})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=alpheios-language-detect.js.map