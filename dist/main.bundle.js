/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkgetting_started_using_a_configuration"] = self["webpackChunkgetting_started_using_a_configuration"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("async function getComponent() {\n  const element = document.createElement('div');\n  const { default: _ } = await __webpack_require__.e(/*! import() */ \"src_helper_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./helper */ \"./src/helper.js\"));\n\n  element.innerHTML = _.join(['Hello', 'webpack'], ' ');\n\n  return element;\n}\n\ngetComponent().then((component) => {\n  document.body.appendChild(component);\n});\n\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);