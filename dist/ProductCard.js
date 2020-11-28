"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ProductCard;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ProductCard(props) {
  return /*#__PURE__*/_react["default"].createElement("a", {
    href: "/details?id=".concat(props.id),
    className: "product"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: props.img,
    alt: "Imagen Producto"
  }), /*#__PURE__*/_react["default"].createElement("p", {
    className: "name"
  }, props.name), /*#__PURE__*/_react["default"].createElement("p", {
    className: "price"
  }, "$", props.price, " MXN"));
}
//# sourceMappingURL=ProductCard.js.map