"use strict";

var _react = _interopRequireDefault(require("react"));

var _express = _interopRequireDefault(require("express"));

var _server = require("react-dom/server");

var _Layout = _interopRequireDefault(require("./Layout"));

var _Detail = _interopRequireDefault(require("./Detail"));

var _Home = _interopRequireDefault(require("./Home"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _mercadopago = _interopRequireDefault(require("mercadopago"));

var _Failure = _interopRequireDefault(require("./Failure"));

var _Success = _interopRequireDefault(require("./Success"));

var _Pending = _interopRequireDefault(require("./Pending"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (process.env.NODE_ENV != 'production') require('dotenv').config();

_mercadopago["default"].configure({
  access_token: process.env.ACCESS_TOKEN,
  integrator_id: 'dev_24c65fb163bf11ea96500242ac130004'
});

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_express["default"]["static"]('assets'));
app.use('/assets', _express["default"]["static"](__dirname + '/assets')); // Inicio de la tienda

app.get('/', function (req, res) {
  res.send((0, _server.renderToString)( /*#__PURE__*/_react["default"].createElement(_Layout["default"], {
    title: "Inicio | Tienda e-commerce",
    view: "home"
  }, /*#__PURE__*/_react["default"].createElement(_Home["default"], {
    data: data
  }))));
}); // Despliegue de item individual

app.get('/details', function (req, res) {
  var product = data.filter(function (item) {
    var _req$query;

    return item.id == ((_req$query = req.query) === null || _req$query === void 0 ? void 0 : _req$query.id);
  });
  if (product.length == 0) return res.sendStatus(404);
  res.send((0, _server.renderToString)( /*#__PURE__*/_react["default"].createElement(_Layout["default"], {
    title: "Producto | Tienda e-commerce",
    view: "item"
  }, /*#__PURE__*/_react["default"].createElement(_Detail["default"], {
    data: product[0]
  }))));
}); // Back urls

app.get('/success', function (req, res) {
  res.send((0, _server.renderToString)( /*#__PURE__*/_react["default"].createElement(_Layout["default"], {
    title: "Completado | Tienda e-commerce",
    view: ""
  }, /*#__PURE__*/_react["default"].createElement(_Success["default"], {
    data: req.query
  }))));
});
app.get('/pending', function (req, res) {
  res.send((0, _server.renderToString)( /*#__PURE__*/_react["default"].createElement(_Layout["default"], {
    title: "Pendiente | Tienda e-commerce",
    view: ""
  }, /*#__PURE__*/_react["default"].createElement(_Pending["default"], null))));
});
app.get('/failure', function (req, res) {
  res.send((0, _server.renderToString)( /*#__PURE__*/_react["default"].createElement(_Layout["default"], {
    title: "Fallo al pagar | Tienda e-commerce",
    view: ""
  }, /*#__PURE__*/_react["default"].createElement(_Failure["default"], null))));
});
app.post('/payment', function (req, res) {
  var product = data.filter(function (item) {
    return item.id == req.body.id;
  });
  if (product.length == 0) return res.send({
    error: true,
    message: 'PRODUCT_NOT_FOUND'
  });
  var preference = {
    payer: {
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      phone: {
        area_code: '52',
        number: parseInt(req.body.number)
      },
      address: {
        street_name: req.body.street,
        street_number: parseInt(req.body.hnumber),
        zip_code: req.body.zip
      }
    },
    external_reference: 'axel_07_avila@hotmail.com',
    payment_methods: {
      excluded_payment_methods: [{
        id: 'amex'
      }],
      excluded_payment_types: [{
        id: 'atm'
      }],
      installments: 6
    },
    items: [{
      id: '1234',
      title: product[0].name,
      quantity: 1,
      picture_url: process.env.URL_BASE + product[0].img,
      unit_price: product[0].price,
      currency_id: 'MXN',
      category_id: 'phones',
      description: product[0].description
    }],
    auto_return: 'approved',
    back_urls: {
      success: process.env.URL_BASE + '/success',
      failure: process.env.URL_BASE + '/failure',
      pending: process.env.URL_BASE + '/pending'
    },
    notification_url: process.env.URL_BASE + '/notifications'
  };

  _mercadopago["default"].preferences.create(preference).then(function (response) {
    console.log(response);
    res.send({
      error: false,
      url: response.response.init_point
    });
  })["catch"](function (err) {
    console.log(err);
    res.send({
      error: true,
      message: 'Error con mercado pago'
    });
  });
}); // Webhooks

app.post('/notifications', function (req, res) {
  console.log(req.body);
  res.sendStatus(200);
});
app.listen(3000, function () {
  console.log('Server on port 3000');
}); // Test data

var data = [{
  id: 1,
  name: "Samsung Galaxy S9",
  img: "/assets/img/galaxy-s9.jpg",
  description: "Dispositivo móvil de Tienda e-commerce​",
  price: 15000
}, {
  id: 2,
  name: "LG G6",
  img: "/assets/img/l6g6.jpg",
  description: "Dispositivo móvil de Tienda e-commerce​",
  price: 10000
}, {
  id: 3,
  name: "iPhone 8",
  img: "/assets/img/iphone.jpg",
  description: "Dispositivo móvil de Tienda e-commerce​",
  price: 16000
}, {
  id: 4,
  name: "Motorola G5",
  img: "/assets/img/moto-g5.jpg",
  description: "Dispositivo móvil de Tienda e-commerce​",
  price: 9000
}, {
  id: 5,
  name: "Motorola G4",
  img: "/assets/img/moto-g4.jpg",
  description: "Dispositivo móvil de Tienda e-commerce​",
  price: 8000
}, {
  id: 6,
  name: "Sony Xperia XZ2",
  img: "/assets/img/xperia.jpg",
  description: "Dispositivo móvil de Tienda e-commerce​",
  price: 10000
}];
//# sourceMappingURL=app.js.map