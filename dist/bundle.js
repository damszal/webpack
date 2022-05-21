/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

console.log("hello webpack!");

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

var h = new Hello();
h.render();

var foo = function foo() {
  for (var _len = arguments.length, name = new Array(_len), _key = 0; _key < _len; _key++) {
    name[_key] = arguments[_key];
  }

  console.log("hello".concat(name));
};

foo("damian");
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaOztJQUVNQzs7Ozs7OztXQUNGLGtCQUFTO01BQ0xGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7TUFDQSxJQUFNRSxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFaO01BQ0FGLEdBQUcsQ0FBQ0csU0FBSixHQUFnQixjQUFoQjtNQUNBLElBQU1DLElBQUksR0FBR0gsUUFBUSxDQUFDSSxhQUFULENBQXVCLE1BQXZCLENBQWI7TUFDQUQsSUFBSSxDQUFDRSxXQUFMLENBQWlCTixHQUFqQjtJQUNIOzs7Ozs7QUFHTCxJQUFNTyxDQUFDLEdBQUcsSUFBSVIsS0FBSixFQUFWO0FBRUFRLENBQUMsQ0FBQ0MsTUFBRjs7QUFFQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFhO0VBQUEsa0NBQVRDLElBQVM7SUFBVEEsSUFBUztFQUFBOztFQUNyQmIsT0FBTyxDQUFDQyxHQUFSLGdCQUFvQlksSUFBcEI7QUFDSCxDQUZEOztBQUdBRCxHQUFHLENBQUMsUUFBRCxDQUFILEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFydC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyhcImhlbGxvIHdlYnBhY2shXCIpXHJcblxyXG5jbGFzcyBIZWxsbyB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkdXBhXCIpXHJcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnRuLmlubmVyVGV4dCA9IFwiZHVtbXkgYnV0dG9uXCI7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGggPSBuZXcgSGVsbG9cclxuXHJcbmgucmVuZGVyKClcclxuXHJcbmNvbnN0IGZvbyA9ICguLi5uYW1lKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgaGVsbG8ke25hbWV9YClcclxufVxyXG5mb28oXCJkYW1pYW5cIikiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIkhlbGxvIiwiYnRuIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJhcHBlbmRDaGlsZCIsImgiLCJyZW5kZXIiLCJmb28iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==