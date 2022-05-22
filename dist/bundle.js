/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ "./src/main.scss");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


console.clear();

var Hello = /*#__PURE__*/function () {
  function Hello() {
    _classCallCheck(this, Hello);
  }

  _createClass(Hello, [{
    key: "render",
    value: function render() {
      console.log("dupa");
      var btn = document.createElement('button');
      btn.innerText = "dummy button";
      var body = document.querySelector('body');
      body.appendChild(btn);
    }
  }]);

  return Hello;
}();

; // Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
//     S is misinterpreted as 5
//     O is misinterpreted as 0
//     I is misinterpreted as 1
// The test cases contain numbers only by mistake.
// function correct([...string])
// {
//     return string.map(el=>{
//         return ((el==="5")?el="S":el) && ((el==="1")?el="I":el)  && ((el==="0")?el="O":el)
//     }).join("")
// }
// correct("DUBL1N")
// SIMPLEST SOLUTION 
// const correct = string =>
//   string.replace(/\d/g, val => `OI   S`[val]);
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBRUFBLE9BQU8sQ0FBQ0MsS0FBUjs7SUFFTUM7Ozs7Ozs7V0FDRixrQkFBUztNQUNMRixPQUFPLENBQUNHLEdBQVIsQ0FBWSxNQUFaO01BQ0EsSUFBTUMsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBWjtNQUNBRixHQUFHLENBQUNHLFNBQUosR0FBZ0IsY0FBaEI7TUFDQSxJQUFNQyxJQUFJLEdBQUdILFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixNQUF2QixDQUFiO01BQ0FELElBQUksQ0FBQ0UsV0FBTCxDQUFpQk4sR0FBakI7SUFDSDs7Ozs7O0FBQ0osRUFFRDtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBLGlEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnQvLi9zcmMvbWFpbi5zY3NzP2FkNjciLCJ3ZWJwYWNrOi8vc3RhcnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3RhcnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zdGFydC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vbWFpbi5zY3NzJ1xyXG5cclxuY29uc29sZS5jbGVhcigpXHJcblxyXG5jbGFzcyBIZWxsbyB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkdXBhXCIpXHJcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnRuLmlubmVyVGV4dCA9IFwiZHVtbXkgYnV0dG9uXCI7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyBDaGFyYWN0ZXIgcmVjb2duaXRpb24gc29mdHdhcmUgaXMgd2lkZWx5IHVzZWQgdG8gZGlnaXRpc2UgcHJpbnRlZCB0ZXh0cy4gVGh1cyB0aGUgdGV4dHMgY2FuIGJlIGVkaXRlZCwgc2VhcmNoZWQgYW5kIHN0b3JlZCBvbiBhIGNvbXB1dGVyLlxyXG5cclxuLy8gV2hlbiBkb2N1bWVudHMgKGVzcGVjaWFsbHkgcHJldHR5IG9sZCBvbmVzIHdyaXR0ZW4gd2l0aCBhIHR5cGV3cml0ZXIpLCBhcmUgZGlnaXRpc2VkIGNoYXJhY3RlciByZWNvZ25pdGlvbiBzb2Z0d2FyZXMgb2Z0ZW4gbWFrZSBtaXN0YWtlcy5cclxuXHJcbi8vIFlvdXIgdGFzayBpcyBjb3JyZWN0IHRoZSBlcnJvcnMgaW4gdGhlIGRpZ2l0aXNlZCB0ZXh0LiBZb3Ugb25seSBoYXZlIHRvIGhhbmRsZSB0aGUgZm9sbG93aW5nIG1pc3Rha2VzOlxyXG5cclxuLy8gICAgIFMgaXMgbWlzaW50ZXJwcmV0ZWQgYXMgNVxyXG4vLyAgICAgTyBpcyBtaXNpbnRlcnByZXRlZCBhcyAwXHJcbi8vICAgICBJIGlzIG1pc2ludGVycHJldGVkIGFzIDFcclxuXHJcbi8vIFRoZSB0ZXN0IGNhc2VzIGNvbnRhaW4gbnVtYmVycyBvbmx5IGJ5IG1pc3Rha2UuXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gY29ycmVjdChbLi4uc3RyaW5nXSlcclxuLy8ge1xyXG4vLyAgICAgcmV0dXJuIHN0cmluZy5tYXAoZWw9PntcclxuLy8gICAgICAgICByZXR1cm4gKChlbD09PVwiNVwiKT9lbD1cIlNcIjplbCkgJiYgKChlbD09PVwiMVwiKT9lbD1cIklcIjplbCkgICYmICgoZWw9PT1cIjBcIik/ZWw9XCJPXCI6ZWwpXHJcbi8vICAgICB9KS5qb2luKFwiXCIpXHJcbi8vIH1cclxuXHJcbi8vIGNvcnJlY3QoXCJEVUJMMU5cIilcclxuXHJcblxyXG4vLyBTSU1QTEVTVCBTT0xVVElPTiBcclxuXHJcbi8vIGNvbnN0IGNvcnJlY3QgPSBzdHJpbmcgPT5cclxuLy8gICBzdHJpbmcucmVwbGFjZSgvXFxkL2csIHZhbCA9PiBgT0kgICBTYFt2YWxdKTsiXSwibmFtZXMiOlsiY29uc29sZSIsImNsZWFyIiwiSGVsbG8iLCJsb2ciLCJidG4iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsImFwcGVuZENoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==