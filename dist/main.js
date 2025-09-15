/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos.js */ \"./src/todos.js\");\n\n\n\nconst taskOne = new _todos_js__WEBPACK_IMPORTED_MODULE_0__.Task('Clean', 'cool', 'tomorrow', 'high');\nconst taskTwo = new _todos_js__WEBPACK_IMPORTED_MODULE_0__.Task('have fun', 'yay', '09/13/25', 'low');\n\n\n//console.log(taskOne.getTaskInfo());\n//console.log(taskTwo.getTaskInfo());\n\nconst chores = new _todos_js__WEBPACK_IMPORTED_MODULE_0__.Project();\nchores.addTaskToProject(taskOne);\nchores.addTaskToProject(taskTwo);\nconsole.log(chores.project);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBMkM7OztBQUczQyxvQkFBb0IsMkNBQUk7QUFDeEIsb0JBQW9CLDJDQUFJOzs7QUFHeEI7QUFDQTs7QUFFQSxtQkFBbUIsOENBQU87QUFDMUI7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvamVjdCwgVGFzayB9IGZyb20gJy4vdG9kb3MuanMnO1xuXG5cbmNvbnN0IHRhc2tPbmUgPSBuZXcgVGFzaygnQ2xlYW4nLCAnY29vbCcsICd0b21vcnJvdycsICdoaWdoJyk7XG5jb25zdCB0YXNrVHdvID0gbmV3IFRhc2soJ2hhdmUgZnVuJywgJ3lheScsICcwOS8xMy8yNScsICdsb3cnKTtcblxuXG4vL2NvbnNvbGUubG9nKHRhc2tPbmUuZ2V0VGFza0luZm8oKSk7XG4vL2NvbnNvbGUubG9nKHRhc2tUd28uZ2V0VGFza0luZm8oKSk7XG5cbmNvbnN0IGNob3JlcyA9IG5ldyBQcm9qZWN0KCk7XG5jaG9yZXMuYWRkVGFza1RvUHJvamVjdCh0YXNrT25lKTtcbmNob3Jlcy5hZGRUYXNrVG9Qcm9qZWN0KHRhc2tUd28pO1xuY29uc29sZS5sb2coY2hvcmVzLnByb2plY3QpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\nclass Project {\n    constructor(name) {\n        this.name = name;\n        this.project = [];\n    }\n\n    addTaskToProject(task) {\n        this.project.push(task);\n    }\n}\n\nclass Task{\n    constructor(taskName, description, dueDate, priority) {\n        this.taskName = taskName;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.completed = false;\n    }\n\n    getTaskInfo() {\n        return `New task: ${this.taskName}, Description: ${this.description}, Due: ${this.dueDate}, Priority: ${this.priority}`\n    }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdG9kb3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsY0FBYyxpQkFBaUIsaUJBQWlCLFNBQVMsYUFBYSxjQUFjLGNBQWM7QUFDOUg7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2Rvcy5qcz9hN2IxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IFtdO1xuICAgIH1cblxuICAgIGFkZFRhc2tUb1Byb2plY3QodGFzaykge1xuICAgICAgICB0aGlzLnByb2plY3QucHVzaCh0YXNrKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUYXNre1xuICAgIGNvbnN0cnVjdG9yKHRhc2tOYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50YXNrTmFtZSA9IHRhc2tOYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRUYXNrSW5mbygpIHtcbiAgICAgICAgcmV0dXJuIGBOZXcgdGFzazogJHt0aGlzLnRhc2tOYW1lfSwgRGVzY3JpcHRpb246ICR7dGhpcy5kZXNjcmlwdGlvbn0sIER1ZTogJHt0aGlzLmR1ZURhdGV9LCBQcmlvcml0eTogJHt0aGlzLnByaW9yaXR5fWBcbiAgICB9XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/todos.js\n\n}");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;