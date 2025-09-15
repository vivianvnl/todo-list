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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos.js */ \"./src/todos.js\");\n\n\nconst taskOne = new _todos_js__WEBPACK_IMPORTED_MODULE_0__.Task('Clean', 'cool', 'tomorrow', 'high');\nconst taskTwo = new _todos_js__WEBPACK_IMPORTED_MODULE_0__.Task('have fun', 'yay', '09/13/25', 'low');\n//taskOne.taskComplete();\n\nconst chores = new _todos_js__WEBPACK_IMPORTED_MODULE_0__.Project();\nchores.addTaskToProject(taskOne);\nchores.addTaskToProject(taskTwo);\nconsole.log(chores.project);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBMkM7O0FBRTNDLG9CQUFvQiwyQ0FBSTtBQUN4QixvQkFBb0IsMkNBQUk7QUFDeEI7O0FBRUEsbUJBQW1CLDhDQUFPO0FBQzFCO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2plY3QsIFRhc2sgfSBmcm9tICcuL3RvZG9zLmpzJztcblxuY29uc3QgdGFza09uZSA9IG5ldyBUYXNrKCdDbGVhbicsICdjb29sJywgJ3RvbW9ycm93JywgJ2hpZ2gnKTtcbmNvbnN0IHRhc2tUd28gPSBuZXcgVGFzaygnaGF2ZSBmdW4nLCAneWF5JywgJzA5LzEzLzI1JywgJ2xvdycpO1xuLy90YXNrT25lLnRhc2tDb21wbGV0ZSgpO1xuXG5jb25zdCBjaG9yZXMgPSBuZXcgUHJvamVjdCgpO1xuY2hvcmVzLmFkZFRhc2tUb1Byb2plY3QodGFza09uZSk7XG5jaG9yZXMuYWRkVGFza1RvUHJvamVjdCh0YXNrVHdvKTtcbmNvbnNvbGUubG9nKGNob3Jlcy5wcm9qZWN0KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\nclass Project {\n    constructor(name) {\n        this.name = name;\n        this.project = [];\n    }\n\n    addTaskToProject(task) {\n        this.project.push(task);\n    }\n}\n\nclass Task{\n    constructor(taskName, description, dueDate, priority) {\n        this.taskName = taskName;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.completed = false;\n    }\n\n    getTaskInfo() {\n        return `New task: ${this.taskName}, Description: ${this.description}, Due: ${this.dueDate}, Priority: ${this.priority}`\n    }\n\n    taskComplete() {\n        if (this.completed === false) {\n            this.completed = true;\n        }\n        else {\n            this.completed = false;\n        }\n    }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdG9kb3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsY0FBYyxpQkFBaUIsaUJBQWlCLFNBQVMsYUFBYSxjQUFjLGNBQWM7QUFDOUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9zLmpzP2E3YjEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gW107XG4gICAgfVxuXG4gICAgYWRkVGFza1RvUHJvamVjdCh0YXNrKSB7XG4gICAgICAgIHRoaXMucHJvamVjdC5wdXNoKHRhc2spO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRhc2t7XG4gICAgY29uc3RydWN0b3IodGFza05hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLnRhc2tOYW1lID0gdGFza05hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldFRhc2tJbmZvKCkge1xuICAgICAgICByZXR1cm4gYE5ldyB0YXNrOiAke3RoaXMudGFza05hbWV9LCBEZXNjcmlwdGlvbjogJHt0aGlzLmRlc2NyaXB0aW9ufSwgRHVlOiAke3RoaXMuZHVlRGF0ZX0sIFByaW9yaXR5OiAke3RoaXMucHJpb3JpdHl9YFxuICAgIH1cblxuICAgIHRhc2tDb21wbGV0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29tcGxldGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/todos.js\n\n}");

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