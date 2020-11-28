"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Layout;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Layout(props) {
  return /*#__PURE__*/_react["default"].createElement("html", {
    lang: "es-MX"
  }, /*#__PURE__*/_react["default"].createElement("head", null, /*#__PURE__*/_react["default"].createElement("title", null, props.title), /*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "UTF-8"
  }), /*#__PURE__*/_react["default"].createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), /*#__PURE__*/_react["default"].createElement("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "ie=edge"
  }), /*#__PURE__*/_react["default"].createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap",
    rel: "stylesheet"
  }), /*#__PURE__*/_react["default"].createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Rubik&display=swap",
    rel: "stylesheet"
  }), /*#__PURE__*/_react["default"].createElement("link", {
    rel: "stylesheet",
    href: "/assets/css/main.css"
  }), /*#__PURE__*/_react["default"].createElement("link", {
    rel: "stylesheet",
    href: "/assets/css/modal.css"
  })), /*#__PURE__*/_react["default"].createElement("body", null, /*#__PURE__*/_react["default"].createElement("div", {
    id: "root"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "menu"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "Tienda e-commerce")), props.children, /*#__PURE__*/_react["default"].createElement("footer", null, "Todos los derechos reservados. Tienda e-commerce."), /*#__PURE__*/_react["default"].createElement("script", {
    src: "https://www.mercadopago.com/v2/security.js",
    view: props.view
  }), /*#__PURE__*/_react["default"].createElement("script", {
    src: "https://unpkg.com/react@16/umd/react.development.js",
    crossOrigin: true
  }), /*#__PURE__*/_react["default"].createElement("script", {
    src: "https://unpkg.com/react-dom@16/umd/react-dom.development.js",
    crossOrigin: true
  }), /*#__PURE__*/_react["default"].createElement("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"
  }), /*#__PURE__*/_react["default"].createElement("script", {
    src: "/assets/js/payment.js"
  }), /*#__PURE__*/_react["default"].createElement("script", {
    type: "text/babel",
    src: "/assets/js/bundle.js"
  })));
}
//# sourceMappingURL=Layout.js.map