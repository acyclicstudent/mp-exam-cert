"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Success;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Success(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "state state-success"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "title"
  }, "!En hora buena!"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "message"
  }, "Tu pago se ha procesado correctamente, puedes seguir comprando en la tienda."), /*#__PURE__*/_react["default"].createElement("div", {
    className: "payment-info"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "title-info"
  }, "Informaci\xF3n adicional sobre el pago"), /*#__PURE__*/_react["default"].createElement("p", null, "ID de pago: ", props.data.collection_id), /*#__PURE__*/_react["default"].createElement("p", null, "Tipo de pago: ", props.data.payment_type), /*#__PURE__*/_react["default"].createElement("p", null, "Status: ", props.data.collection_status), /*#__PURE__*/_react["default"].createElement("p", null, "External reference: ", props.data.external_reference)), /*#__PURE__*/_react["default"].createElement("a", {
    href: "/"
  }, "Volver a la tienda"));
}
//# sourceMappingURL=Success.js.map