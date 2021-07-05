/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatelesson30_1"]("main",{

/***/ "./src/modules/tooglePopUp.js":
/*!************************************!*\
  !*** ./src/modules/tooglePopUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tooglePopUp\": () => (/* binding */ tooglePopUp)\n/* harmony export */ });\nfunction tooglePopUp() {\n  var popup = document.querySelector('.popup');\n  var popupBtn = document.querySelectorAll('.popup-btn');\n  var popupClose = document.querySelector('.popup-close');\n  var popupContent = document.querySelector('.popup-content');\n  popupBtn.forEach(function (elem) {\n    elem.addEventListener('click', function () {\n      popup.style.display = 'block'; // popupAnimationInLibrary();\n\n      if (document.body.clientWidth > 786) {\n        popupLibrary.counter = popupLibrary.start;\n        popupAnimation();\n      }\n    });\n  });\n  popupClose.addEventListener('click', function () {\n    popup.style.display = 'none';\n  });\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('.popup-content');\n\n    if (!target) {\n      popup.style.display = 'none';\n    }\n  });\n  var popupLibrary = {\n    counter: -100,\n    start: -100,\n    speed: 70,\n    end: 0\n  };\n\n  function popupAnimation() {\n    popupLibrary.counter++;\n    popupContent.style.transform = \"translateX(\".concat(popupLibrary.counter * 100 - 12.5, \"%)\");\n\n    if (popupLibrary.counter < popupLibrary.end) {\n      requestAnimationFrame(popupAnimation);\n    }\n  }\n\n  ; //    function popupAnimationInLibrary() {\n  //        popup.classList.add('animate__animated');\n  //        popup.classList.add('animate__backInUp');\n  //    }\n  //    popupAnimationInLibrary();\n}\ntooglePopUp();\n\n//# sourceURL=webpack://lesson30.1/./src/modules/tooglePopUp.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f9c65c341ea53aeaeca5")
/******/ })();
/******/ 
/******/ }
);