webpackHotUpdate("static/development/pages/honor.js",{

/***/ "./pages/honor.js":
/*!************************!*\
  !*** ./pages/honor.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/block */ "./components/block.js");
/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/list */ "./components/list.js");
/* harmony import */ var _components_data_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/data-list */ "./components/data-list.js");
/* harmony import */ var _scss_layout_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scss/layout.scss */ "./scss/layout.scss");
/* harmony import */ var _scss_layout_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_scss_layout_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _data_en_honor_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/en/honor.json */ "./data/en/honor.json");
var _data_en_honor_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/en/honor.json */ "./data/en/honor.json", 1);
/* harmony import */ var _data_zh_TW_honor_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/zh-TW/honor.json */ "./data/zh-TW/honor.json");
var _data_zh_TW_honor_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/zh-TW/honor.json */ "./data/zh-TW/honor.json", 1);
/* harmony import */ var _data_honors_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data/honors.json */ "./data/honors.json");
var _data_honors_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/honors.json */ "./data/honors.json", 1);
var _jsxFileName = "/Library/WebServer/Documents/imslab/pages/honor.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var Honor = function Honor(_ref) {
  var router = _ref.router;
  var title = router.query.title;
  var lang = router.query.lang || 'zh-tw';
  var data = lang === 'en' ? _data_en_honor_json__WEBPACK_IMPORTED_MODULE_8__ : _data_zh_TW_honor_json__WEBPACK_IMPORTED_MODULE_9__;

  var honorData = _objectSpread({}, _data_honors_json__WEBPACK_IMPORTED_MODULE_10__);

  var blocks = [];
  Object.entries(honorData).forEach(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        kind = _ref3[0],
        kindData = _ref3[1];

    Object.entries(kindData).forEach(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 1),
          year = _ref5[0];

      var yearData = kindData[year];
      kindData[year] = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_data_list__WEBPACK_IMPORTED_MODULE_6__["default"].Honor, {
        data: yearData,
        lang: lang,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      });
    });
    blocks.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_block__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: kind,
      title: data[kind],
      ref: react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_list__WEBPACK_IMPORTED_MODULE_5__["default"], {
      data: kindData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    })));
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "honor-container",
    blocks: blocks,
    pathname: router.asPath,
    lang: lang,
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  });
};

Honor.propTypes = {
  router: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Honor));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/honor")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=honor.js.929cf6960fee54c38d71.hot-update.js.map