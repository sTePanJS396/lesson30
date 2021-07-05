/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatelesson30_1"]("main",{

/***/ "./src/modules/formValidation.js":
/*!***************************************!*\
  !*** ./src/modules/formValidation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formValidation\": () => (/* binding */ formValidation)\n/* harmony export */ });\nfunction formValidation() {\n  var calculator = document.querySelector('.calc-block');\n  var footerFormInput = document.querySelector('.footer-form-input');\n  var mainForm = document.querySelector('.main-form');\n  var userForm = document.querySelector('#form3');\n  userForm.addEventListener('input', function (event) {\n    if (event.target.type === 'text') {\n      event.target.value = event.target.value.replace(/[^а-яА-Я\\s+ ]/ig, '');\n    }\n  });\n  userForm.addEventListener('input', function (event) {\n    if (event.target.type === 'email') {\n      event.target.value = event.target.value.replace(/[^a-zA-Z@_'~*.!-]/ig, '');\n    }\n  });\n  userForm.addEventListener('input', function (event) {\n    if (event.target.type === 'tel') {\n      event.target.value = event.target.value.replace(/[^[0-9+]/ig, '');\n      event.target.value = event.target.value.replace(/^[\\+]?[(]?[0-9]{4}[)]?[-\\s\\.]?[0-9]{4}[-\\s\\.]?[0-9]{4,6}$/im, '');\n    }\n  });\n  mainForm.addEventListener('input', function (event) {\n    if (event.target.type === 'text') {\n      event.target.value = event.target.value.replace(/[^а-яА-Я]/ig, '');\n    }\n  });\n  mainForm.addEventListener('input', function (event) {\n    if (event.target.type === 'email') {\n      event.target.value = event.target.value.replace(/[^a-zA-Z@_'~*.!-]/ig, '');\n    }\n  });\n  mainForm.addEventListener('input', function (event) {\n    if (event.target.type === 'tel') {\n      event.target.value = event.target.value.replace(/[^[0-9+]/ig, '');\n      event.target.value = event.target.value.replace(/^[\\+]?[(]?[0-9]{4}[)]?[-\\s\\.]?[0-9]{4}[-\\s\\.]?[0-9]{4,6}$/im, '');\n    }\n  });\n  calculator.addEventListener('input', function (event) {\n    if (event.target.type === 'text') {\n      event.target.value = event.target.value.replace(/\\s+/g, '');\n      event.target.value = event.target.value.replace(/\\D/g, '');\n    }\n  });\n  footerFormInput.addEventListener('input', function (event) {\n    if (event.target.name === 'user_name') {\n      event.target.value = event.target.value.replace(/[^а-яё ]/gi, '');\n    }\n\n    if (event.target.name === 'user_message') {\n      event.target.value = event.target.value.replace(/[^а-яё ,.!:;\\-0-9]/ig, '');\n    }\n  });\n  footerFormInput.addEventListener('input', function (event) {\n    if (event.target.type === 'email') {\n      event.target.value = event.target.value.replace(/[^a-zA-Z@_'*.!-~]/ig, '');\n    }\n  });\n  document.querySelectorAll('input[type=email]').forEach(function (item) {\n    item.addEventListener(\"keydown\", function (event) {\n      console.log(event);\n\n      if (event.key === ' ') {\n        event.key = '';\n        console.log(event);\n        return '';\n      }\n    });\n  });\n  footerFormInput.addEventListener('input', function (event) {\n    if (event.target.type === 'tel') {\n      event.target.value = event.target.value.replace(/[^[0-9+]/ig, '');\n      event.target.value = event.target.value.replace(/^[\\+]?[(]?[0-9]{4}[)]?[-\\s\\.]?[0-9]{4}[-\\s\\.]?[0-9]{4,6}$/im, '');\n    }\n  });\n\n  function bringingToTheRequiredForm() {\n    var form1Name = document.getElementById('form1-name'); //const form1Email = document.getElementById('form1-email');\n\n    var form1Phone = document.getElementById('form1-phone');\n    var form2Name = document.getElementById('form2-name'); //const form2Email = document.getElementById('form2-email');\n\n    var form2Phone = document.getElementById('form2-phone');\n    var form2Message = document.getElementById('form2-message');\n    var form3Name = document.getElementById('form3-name');\n    var form3Phone = document.getElementById('form3-phone'); //const form3Email = document.getElementById('form3-email');\n\n    var arrForm = [form2Name, form2Phone, form2Message, form1Name, form1Phone, form3Phone, form3Name];\n    arrForm.forEach(function (item) {\n      item.addEventListener('blur', function (event) {\n        event.target.value = event.target.value.trim();\n\n        if (event.target.type === 'text') {\n          var firstLiterals = function firstLiterals(str) {\n            if (!str) return str;\n            return str[0].toUpperCase() + str.slice(1);\n          };\n\n          var newStr;\n          newStr = firstLiterals(event.target.value);\n          event.target.value = newStr;\n        }\n\n        event.target.value = event.target.value.trim();\n        event.target.value = event.target.value.replace(/\\s+/g, ' ');\n        event.target.value = event.target.value.replace(/-+/g, \"-\");\n      });\n    });\n  }\n\n  bringingToTheRequiredForm();\n} // formValidation();\n\n//# sourceURL=webpack://lesson30.1/./src/modules/formValidation.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("61d9a678583a85de2890")
/******/ })();
/******/ 
/******/ }
);