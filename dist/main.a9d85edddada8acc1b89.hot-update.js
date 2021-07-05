/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatelesson30_1"]("main",{

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calc\": () => (/* binding */ calc)\n/* harmony export */ });\nfunction calc() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector('.calc-block');\n  var calcType = document.querySelector('.calc-type');\n  var calcSquare = document.querySelector('.calc-square');\n  var calcDay = document.querySelector('.calc-day');\n  var calcCount = document.querySelector('.calc-count');\n  var totalValue = document.getElementById('total');\n\n  function countSum() {\n    var total = 0;\n    var countValue = 1;\n    var dayValue = 1;\n    var typeValue = calcType.options[calcType.selectedIndex].value;\n    var squareValue = +calcSquare.value;\n\n    if (calcCount.value > 1) {\n      countValue = (calcCount.value - 1) / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      dayValue *= 1.5;\n    }\n\n    if (typeValue && squareValue) {\n      total = price * typeValue * squareValue * countValue * dayValue;\n    }\n\n    totalValue.textContent = total;\n  }\n\n  calcBlock.addEventListener('change', function (event) {\n    var target = event.target;\n\n    if (target.matches('.calc-type')) {\n      target.value = '';\n    }\n\n    if (target.matches('.calc-type') || target.matches('.calc-square') || target.matches('.calc-day') || target.matches('.calc-count')) {\n      countSum();\n    }\n  });\n} // calc(100);\n\n//# sourceURL=webpack://lesson30.1/./src/modules/calc.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6f32447b11fec3fc2292")
/******/ })();
/******/ 
/******/ }
);