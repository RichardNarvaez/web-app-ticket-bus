webpackHotUpdate("static/development/pages/search.js",{

/***/ "./data/search.json":
/*!**************************!*\
  !*** ./data/search.json ***!
  \**************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = [{"hora_salida":"12:00","hora_llegada":"17:10","salida":"Riobamba","llegada":"Puyo","st_disponibles":"10","coop":"Sangay","date":"23 de Enero de 2019","duracion":"5:00","disponible":true},{"hora_salida":"12:00","hora_llegada":"13:10","salida":"Riobamba","llegada":"Ambato","st_disponibles":"6","coop":"22 de Julio","date":"19 de Enero de 2019","duracion":"1:10","disponible":false}];

/***/ }),

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/css/main.css */ "./public/css/main.css");
/* harmony import */ var _public_css_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_css_main_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_cajaInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cajaInfo */ "./components/cajaInfo.js");
/* harmony import */ var _components_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/toolbar */ "./components/toolbar.js");
/* harmony import */ var _components_centerBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/centerBox */ "./components/centerBox.js");
/* harmony import */ var _data_search_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/search.json */ "./data/search.json");
var _data_search_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/search.json */ "./data/search.json", 1);
var _jsxFileName = "/Users/macbookpro/WebProjects/app-web-bus/pages/search.js";

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
    var _this;

    _classCallCheck(this, DrawGrid);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DrawGrid).call(this));
    console.log(_data_search_json__WEBPACK_IMPORTED_MODULE_6__);
    _this.state = {
      data: _data_search_json__WEBPACK_IMPORTED_MODULE_6__
    }; // fetch(Data)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log('data:', data);
    //     })

    return _this;
  }

  _createClass(DrawGrid, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row bus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "conductor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Conductor"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), this.props.seat.map(function (row) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-3" + ' ' + (row.indexOf('1') > -1 || row.indexOf('2') > -1 ? 'Izq' : 'Der'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "asiento" + ' ' + (_this2.props.reservedOthers.indexOf(row) > -1 ? 'reservedOther' : _this2.props.reserved.indexOf(row) > -1 ? 'reserved' : 'available'),
          key: row,
          onClick: function onClick(e) {
            return _this2.onClickSeat(row);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, row));
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: '30px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
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
        className: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Available Seats: (", seatCount == 0 ? 'No seats available' : seatCount, ")"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, this.props.available.map(function (res) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: res,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
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
        className: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Reserved Seats: (", this.props.reserved.length, ")"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, this.props.reserved.map(function (res) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: res,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
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
    var _this3;

    _classCallCheck(this, Search);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Search).call(this));
    _this3.state = {
      seat: ['F1', 'F2', 'F3', 'F4', 'M1', 'M2', 'M3', 'M4', 'B1', 'B2', 'B3', 'B4', 'I1', 'I2', 'I3', 'I4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', 'D4', 'E1', 'E2', 'E3', 'E4', 'G1', 'G2', 'G3', 'G4', 'H1', 'H2', 'H3', 'H4'],
      seatAvailable: ['F1', 'F2', 'F3', 'F4', 'M1', 'M2', 'M3', 'M4', 'B1', 'B2', 'B3', 'B4', 'I1', 'I2', 'I3', 'I4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', 'D4', 'E1', 'E2', 'E3', 'E4', 'G1', 'G2', 'G3', 'G4', 'H1', 'H2', 'H3', 'H4'],
      seatReserved: [],
      seatReservedOthers: ['B2']
    };
    return _this3;
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "modal fade",
        id: "exampleModal",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "exampleModalLabel",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "modal-dialog",
        role: "document",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "modal-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "modal-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        class: "modal-title",
        id: "exampleModalLabel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "Cesta"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        class: "close",
        "data-dismiss": "modal",
        "aria-label": "Close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, "\xD7"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "modal-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Elige tus asientos favoritos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DrawGrid, {
        seat: this.state.seat,
        available: this.state.seatAvailable,
        reserved: this.state.seatReserved,
        reservedOthers: this.state.seatReservedOthers,
        onClickData: this.onClickData.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "modal-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        class: "btn btn-secondary",
        "data-dismiss": "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, "Close"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        class: "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, "Validar"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_toolbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: 'EasyTrans',
        class: 'navColor navbar-dark',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          textAlign: "center",
          padding: '60px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, "Buscar"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, "Tienes 1 reserva")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_centerBox__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }), this.state.data.map(function (item, i) {
        //console.log('test', item);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_cajaInfo__WEBPACK_IMPORTED_MODULE_3__["default"], {
          data: item,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "box",
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, "Cesta"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, "Tu total es:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, "19.65$"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        class: "btn btn-warning",
        "data-toggle": "modal",
        "data-target": "#exampleModal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, "Comprar"))))));
    }
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/search")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=search.js.8c5687154ebcce8ccb29.hot-update.js.map