/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
console.log("hello webpack!")

class Hello {
    render() {
        console.log("dupa")
        const btn = document.createElement('button');
        btn.innerText = "dummy button";
        const body = document.querySelector('body');
        body.appendChild(btn);
    }
}

const h = new Hello

h.render()
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFydC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyhcImhlbGxvIHdlYnBhY2shXCIpXHJcblxyXG5jbGFzcyBIZWxsbyB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkdXBhXCIpXHJcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnRuLmlubmVyVGV4dCA9IFwiZHVtbXkgYnV0dG9uXCI7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGggPSBuZXcgSGVsbG9cclxuXHJcbmgucmVuZGVyKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=