(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./components/centerBox.js":
/*!*********************************!*\
  !*** ./components/centerBox.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/macbookpro/WebProjects/app-web-bus/components/centerBox.js";


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'centerbox ' + (props.class || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
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
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group col-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Salida"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "form-control",
    id: "exampleFormControlSelect1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Riobamba"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group col-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Llegada"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "form-control",
    id: "ab2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Ambato"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Ba\xF1os"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Puyo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Guayaquil"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group  dropdown col-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Pasajeros"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "nav-link dropdown-toggle",
    id: "nvPas",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Boletos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-menu",
    "aria-labelledby": "nvPas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      margin: '0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Adulto"), "  ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "w-100 mb-2",
    type: "text",
    id: "adulto",
    maxLength: "2",
    defaultValue: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      margin: '0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Ni\xF1os menores a 3 a\xF1os"), "  ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "w-100 mb-2",
    type: "text",
    id: "children",
    maxLength: "2",
    defaultValue: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      margin: '0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "3ra Edad"), "  ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "w-100 mb-2",
    type: "text",
    id: "adulto-b",
    maxLength: "2",
    defaultValue: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-item d-flex align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    id: "gridCheck1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginLeft: "12px",
      display: 'inline-block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontWeight: "bold",
      margin: "0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, " Carga "), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      display: "block",
      margin: "0",
      fontSize: "12px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, " En caso de llevar no se cobra extras "))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: {
      margin: 'auto',
      width: '100%'
    },
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Buscar"))));
});

/***/ }),

/***/ "./components/main.js":
/*!****************************!*\
  !*** ./components/main.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_centerBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/centerBox */ "./components/centerBox.js");
var _jsxFileName = "/Users/macbookpro/WebProjects/app-web-bus/components/main.js";



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "backimage d-flex align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "titulo-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Esta es una descripcion")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_centerBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    class: 'w-75',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "subtitulo-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      maxWidth: '35%',
      margin: '0 auto',
      marginBottom: '-154px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, " EIGT - EasyTrans, dise\xF1o de una pagina web de comprar de boletos. 2019"))));
});

/***/ })

}]);
//# sourceMappingURL=1.js.map