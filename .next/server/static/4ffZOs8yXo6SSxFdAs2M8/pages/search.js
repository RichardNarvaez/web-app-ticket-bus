module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "caja-info--viaje"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    style: {
      margin: '16px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "col-xs-12 col-sm-12 col-md-5 col-lg-5 time-transfer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "col-xs-12 ride-stations"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "dept-arr"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "ride-times"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "departure"
  }, "23:35"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "arrival"
  }, "06:45")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "ride-station-names"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "ride-station-name"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "station-name departure-station-name"
  }, "Madrid")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "ride-station-name"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "station-name arrival-station-name"
  }, "Lisboa (Oriente)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "txt-disponible"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "8 Asientos disponibles")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "col-xs-6 col-sm-6 col-md-5 col-lg-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "col-12 duration"
  }, " 8:10 h"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "col-12 type"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Directo")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xs-6 col-sm-6 col-md-2 col-lg-3 price-actions"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    class: "btn btn-success"
  }, "Success"))));
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var routes = module.exports = __webpack_require__(7)();

routes.add('about', '/about/:slug').add('search', '/blog/:slug').add('profile', '/user/:id', 'profile').add('/:noname/:lang(en|es)/:wow+', 'complex').add({
  name: 'beta',
  pattern: '/v3',
  page: 'v3'
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar navbar-expand-lg " + (props.class || '')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar-brand"
  }, props.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarTogglerDemo02",
    "aria-controls": "navbarTogglerDemo02",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "navbar-toggler-icon"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarTogglerDemo02"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "navbar-nav mr-auto mt-2 mt-lg-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item active"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link",
    href: "/"
  }, "Home ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "sr-only"
  }, "(current)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link",
    href: "#"
  }, "Link")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item dropdown"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link dropdown-toggle",
    href: "#",
    id: "navbarDropdownMenuLink",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, "Acerca de"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-menu",
    "aria-labelledby": "navbarDropdownMenuLink"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    route: "about",
    params: {
      slug: 'bussines'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "dropdown-item",
    href: "/about/bussiness"
  }, props.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    route: "about",
    params: {
      slug: 'cooperativas'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "dropdown-item",
    href: "/about/coop"
  }, "Cooperativas"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/profile"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "img-profile",
    src: "https://i.pinimg.com/236x/86/76/70/8676709f7ce5b28e17aae369b3f54759.jpg"
  }))))));
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 8 */
/***/ (function(module, exports) {



/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'centerbox ' + (props.class || "")
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    method: "post",
    action: "search",
    className: "d-flex align-items-center",
    style: {
      height: '100%',
      padding: '16px'
    },
    onSubmit: function onSubmit(e) {
      console.log("Click");
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group col-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Salida"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "form-control",
    id: "exampleFormControlSelect1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Riobamba"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group col-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Llegada"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "form-control",
    id: "ab2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Ambato"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group  dropdown col-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Pasajeros"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link dropdown-toggle",
    id: "nvPas",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, "Boletos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-menu",
    "aria-labelledby": "nvPas"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      margin: '0'
    }
  }, "Adulto"), "  ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "w-100 mb-2",
    type: "text",
    id: "adulto",
    maxLength: "2",
    defaultValue: "0"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      margin: '0'
    }
  }, "Ni\xF1os menores a 3 a\xF1os"), "  ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "w-100 mb-2",
    type: "text",
    id: "children",
    maxLength: "2",
    defaultValue: "0"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      margin: '0'
    }
  }, "3ra Edad"), "  ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "w-100 mb-2",
    type: "text",
    id: "adulto-b",
    maxLength: "2",
    defaultValue: "0"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-item d-flex align-items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    id: "gridCheck1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginLeft: "12px",
      display: 'inline-block'
    }
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontWeight: "bold",
      margin: "0"
    }
  }, " Carga "), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      display: "block",
      margin: "0",
      fontSize: "12px"
    }
  }, " En caso de llevar no se cobra extras "))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/search"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: {
      margin: 'auto',
      width: '100%'
    },
    className: "btn btn-primary"
  }, "Buscar"))));
});

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25);


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _public_css_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_css_main_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_cajaInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _components_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _components_centerBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var DrawGrid =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DrawGrid, _React$Component);

  function DrawGrid() {
    _classCallCheck(this, DrawGrid);

    return _possibleConstructorReturn(this, _getPrototypeOf(DrawGrid).apply(this, arguments));
  }

  _createClass(DrawGrid, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "grid"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row bus"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "conductor"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Conductor"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-6"
      }), this.props.seat.map(function (row) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-3" + ' ' + (row.indexOf('1') > -1 || row.indexOf('2') > -1 ? 'Izq' : 'Der')
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "asiento" + ' ' + (_this.props.reservedOthers.indexOf(row) > -1 ? 'reservedOther' : _this.props.reserved.indexOf(row) > -1 ? 'reserved' : 'available'),
          key: row,
          onClick: function onClick(e) {
            return _this.onClickSeat(row);
          }
        }, row));
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: '30px'
        }
      }));
    }
  }, {
    key: "onClickSeat",
    value: function onClickSeat(seat) {
      this.props.onClickData(seat);
    }
  }]);

  return DrawGrid;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var AvailableList =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(AvailableList, _React$Component2);

  function AvailableList() {
    _classCallCheck(this, AvailableList);

    return _possibleConstructorReturn(this, _getPrototypeOf(AvailableList).apply(this, arguments));
  }

  _createClass(AvailableList, [{
    key: "render",
    value: function render() {
      var seatCount = this.props.available.length;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "left"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Available Seats: (", seatCount == 0 ? 'No seats available' : seatCount, ")"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, this.props.available.map(function (res) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: res
        }, res);
      })));
    }
  }]);

  return AvailableList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var ReservedList =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(ReservedList, _React$Component3);

  function ReservedList() {
    _classCallCheck(this, ReservedList);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReservedList).apply(this, arguments));
  }

  _createClass(ReservedList, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Reserved Seats: (", this.props.reserved.length, ")"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, this.props.reserved.map(function (res) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: res
        }, res);
      })));
    }
  }]);

  return ReservedList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Search =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(Search, _React$Component4);

  function Search() {
    var _this2;

    _classCallCheck(this, Search);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Search).call(this));
    _this2.state = {
      seat: ['F1', 'F2', 'F3', 'F4', 'M1', 'M2', 'M3', 'M4', 'B1', 'B2', 'B3', 'B4', 'I1', 'I2', 'I3', 'I4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', 'D4', 'E1', 'E2', 'E3', 'E4', 'G1', 'G2', 'G3', 'G4', 'H1', 'H2', 'H3', 'H4'],
      seatAvailable: ['F1', 'F2', 'F3', 'F4', 'M1', 'M2', 'M3', 'M4', 'B1', 'B2', 'B3', 'B4', 'I1', 'I2', 'I3', 'I4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', 'D4', 'E1', 'E2', 'E3', 'E4', 'G1', 'G2', 'G3', 'G4', 'H1', 'H2', 'H3', 'H4'],
      seatReserved: [],
      seatReservedOthers: ['B2']
    };
    return _this2;
  }

  _createClass(Search, [{
    key: "onClickData",
    value: function onClickData(seat) {
      if (this.state.seatReservedOthers.indexOf(seat) > -1) {
        console.log("Esta reservado");
      } else {
        console.log("No esta reservado");

        if (this.state.seatReserved.indexOf(seat) > -1) {
          this.setState({
            seatAvailable: this.state.seatAvailable.concat(seat),
            seatReserved: this.state.seatReserved.filter(function (res) {
              return res != seat;
            })
          });
        } else {
          this.setState({
            seatReserved: this.state.seatReserved.concat(seat),
            seatAvailable: this.state.seatAvailable.filter(function (res) {
              return res != seat;
            })
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "modal fade",
        id: "exampleModal",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "exampleModalLabel",
        "aria-hidden": "true"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "modal-dialog",
        role: "document"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "modal-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "modal-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        class: "modal-title",
        id: "exampleModalLabel"
      }, "Cesta"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        class: "close",
        "data-dismiss": "modal",
        "aria-label": "Close"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        "aria-hidden": "true"
      }, "\xD7"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "modal-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Elige tus asientos favoritos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DrawGrid, {
        seat: this.state.seat,
        available: this.state.seatAvailable,
        reserved: this.state.seatReserved,
        reservedOthers: this.state.seatReservedOthers,
        onClickData: this.onClickData.bind(this)
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "modal-footer"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        class: "btn btn-secondary",
        "data-dismiss": "modal"
      }, "Close"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        class: "btn btn-primary"
      }, "Comprar"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_toolbar__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
        title: 'EasyTrans',
        class: 'navColor navbar-dark'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          textAlign: "center",
          padding: '60px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Buscar"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Tienes 1 reserva")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-8"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_centerBox__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_cajaInfo__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_cajaInfo__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_cajaInfo__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_cajaInfo__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_cajaInfo__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_cajaInfo__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_cajaInfo__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_cajaInfo__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_cajaInfo__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_cajaInfo__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "box",
        style: {
          textAlign: "center"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Cesta"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Tu total es:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "19.65$"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        class: "btn btn-warning",
        "data-toggle": "modal",
        "data-target": "#exampleModal"
      }, "Comprar"))))));
    }
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })
/******/ ]);