"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Detail;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Detail(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "product-detail"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "image"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: props.data.img,
    alt: "Imagen de producto"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "details"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "title"
  }, props.data.name), /*#__PURE__*/_react["default"].createElement("p", {
    className: "description"
  }, props.data.description), /*#__PURE__*/_react["default"].createElement("p", {
    className: "price"
  }, "$", props.data.price, " MXN"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "price"
  }, "Cantidad: 1"), /*#__PURE__*/_react["default"].createElement("button", {
    id: "btn-pay"
  }, "Pagar ahora")));
}
//# sourceMappingURL=Detail.js.map