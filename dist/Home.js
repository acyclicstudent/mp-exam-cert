"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Home;

var _react = _interopRequireDefault(require("react"));

var _ProductCard = _interopRequireDefault(require("./ProductCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Home(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "home"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-title"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "Smartphones")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "sections"
  }, /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, "Marca"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", null, "Apple")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", null, "LG")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", null, "Motorola")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", null, "Samsung")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", null, "Huawei")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", null, "Sony")))), /*#__PURE__*/_react["default"].createElement("div", {
    id: "products",
    className: "products"
  }, props.data.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_ProductCard["default"], {
      key: item.id,
      id: item.id,
      name: item.name,
      img: item.img,
      price: item.price
    });
  }))));
}
//# sourceMappingURL=Home.js.map