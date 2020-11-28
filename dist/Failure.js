"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Failure;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Failure() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "state state-failure"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "title"
  }, "No hemos podido procesar tu pago"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "message"
  }, "Intenta m\xE1s tarde o con otro producto."), /*#__PURE__*/_react["default"].createElement("a", {
    href: "/"
  }, "Volver a la tienda"));
}
//# sourceMappingURL=Failure.js.map