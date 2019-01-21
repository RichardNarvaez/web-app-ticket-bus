exports.ids = [8];
exports.modules = {

/***/ 10:
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

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_centerBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "backimage d-flex align-items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "titulo-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Esta es una descripcion")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_centerBox__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    class: 'w-75'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "subtitulo-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      maxWidth: '35%',
      margin: '0 auto',
      marginBottom: '-154px'
    }
  }, " EIGT - EasyTrans, dise\xF1o de una pagina web de comprar de boletos. 2019"))));
});

/***/ })

};;