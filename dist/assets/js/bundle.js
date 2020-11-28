"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function App() {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      showModal = _React$useState2[0],
      setShowModal = _React$useState2[1];

  var _React$useState3 = React.useState({
    name: '',
    surname: '',
    email: '',
    number: '',
    street: '',
    hnumber: '',
    zip: ''
  }),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      data = _React$useState4[0],
      setData = _React$useState4[1];

  var _React$useState5 = React.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      isLoading = _React$useState6[0],
      setIsLoading = _React$useState6[1];

  React.useEffect(function () {
    var activePay = function activePay() {
      setShowModal(true);
    };

    var btnPay = document.getElementById('btn-pay');
    btnPay.addEventListener('click', activePay);
    return function () {
      btnPay.removeEventListener('click', activePay);
    };
  }, [setShowModal]);

  var changeText = function changeText(e) {
    setData(_objectSpread(_objectSpread({}, data), {}, _defineProperty({}, e.target.name, e.target.value)));
  };

  var requestPayment = function requestPayment() {
    setIsLoading(true);
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');
    fetch('/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(_objectSpread(_objectSpread({}, data), {}, {
        id: id
      }))
    }).then(function (response) {
      return response.json();
    }).then(function (jsonData) {
      window.location.replace(jsonData.url);
    })["catch"](function (ex) {
      console.log(ex);
      setIsLoading(false);
    });
  };

  var cancel = function cancel() {
    setShowModal(false);
  };

  if (!showModal) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal"
  }, !isLoading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "title"
  }, "Necesitamos algunos datos para completar tu compra"), /*#__PURE__*/React.createElement("p", {
    className: "label"
  }, "Nombre"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "name",
    value: data.name,
    onChange: changeText,
    placeholder: "Ej. Juan"
  }), /*#__PURE__*/React.createElement("p", {
    className: "label"
  }, "Apellido"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "surname",
    value: data.surname,
    onChange: changeText,
    placeholder: "Ej. Avila"
  }), /*#__PURE__*/React.createElement("p", {
    className: "label"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "email",
    value: data.email,
    onChange: changeText,
    placeholder: "Ej. example@example.com"
  }), /*#__PURE__*/React.createElement("p", {
    className: "label"
  }, "N\xFAmero de telefono"), /*#__PURE__*/React.createElement("div", {
    className: "phone-number"
  }, /*#__PURE__*/React.createElement("p", null, "+52"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "number",
    value: data.number,
    onChange: changeText,
    placeholder: "Ej. 5512345678"
  })), /*#__PURE__*/React.createElement("p", {
    className: "label"
  }, "Calle"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "street",
    value: data.street,
    onChange: changeText,
    placeholder: "Ej. La garita"
  }), /*#__PURE__*/React.createElement("p", {
    className: "label"
  }, "N\xFAmero de casa"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "hnumber",
    value: data.hnumber,
    onChange: changeText,
    placeholder: "Ej. 23"
  }), /*#__PURE__*/React.createElement("p", {
    className: "label"
  }, "C\xF3digo Postal"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "zip",
    value: data.zip,
    onChange: changeText,
    placeholder: "Ej. 55706"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: requestPayment,
    className: "btn-continue"
  }, "Continuar"), /*#__PURE__*/React.createElement("button", {
    onClick: cancel,
    className: "btn-cancel"
  }, "Cancelar")) : /*#__PURE__*/React.createElement("p", {
    className: "title"
  }, "Cargando...")));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=bundle.js.map