if (process.env.NODE_ENV != 'production')
    require('dotenv').config();
import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import Layout from './Layout';
import Detail from './Detail';
import Home from './Home';
import bodyParser from 'body-parser';
import mercadopago from 'mercadopago';
import Failure from './Failure';
import Success from './Success';
import Pending from './Pending';

mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN,
    integrator_id: 'dev_24c65fb163bf11ea96500242ac130004'
});

const app = express();

app.use(bodyParser.json());
app.use(express.static('assets'));
app.use('/assets', express.static(__dirname + '/assets'))

// Inicio de la tienda
app.get('/', (req, res) => {
    res.send(
        renderToString(
            <Layout
                title="Inicio | Tienda e-commerce"
                view="home"
            >
                <Home data={data} />
            </Layout>
        )
    );
});

// Despliegue de item individual
app.get('/details', (req, res) => {
    const product = data.filter((item) => item.id == req.query?.id);
    if (product.length == 0)
        return res.sendStatus(404);
    res.send(
        renderToString(
            <Layout
                title="Producto | Tienda e-commerce"
                view="item"
            >
                <Detail
                    data={product[0]}
                />
            </Layout>
        )
    );
});

// Back urls
app.get('/success', (req, res) => {
    res.send(
        renderToString(
            <Layout
                title="Completado | Tienda e-commerce"
                view=""
            >
                <Success data={req.query}/>
            </Layout>
        )
    );
});

app.get('/pending', (req, res) => {
    res.send(
        renderToString(
            <Layout
                title="Pendiente | Tienda e-commerce"
                view=""
            >
                <Pending />
            </Layout>
        )
    );
});

app.get('/failure', (req, res) => {
    res.send(
        renderToString(
            <Layout
                title="Fallo al pagar | Tienda e-commerce"
                view=""
            >
                <Failure />
            </Layout>
        )
    );
})

app.post('/payment', (req, res) => {
    const product = data.filter((item) => item.id == req.body.id);
    if (product.length == 0)
        return res.send({ error: true, message: 'PRODUCT_NOT_FOUND' });
    const preference = {
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
            excluded_payment_methods: [{ id: 'amex' }],
            excluded_payment_types: [{ id: 'atm' }],
            installments: 6
        },
        items: [
            {
                id: '1234',
                title: product[0].name,
                quantity: 1,
                picture_url: process.env.URL_BASE + product[0].img,
                unit_price: product[0].price,
                currency_id: 'MXN',
                category_id: 'phones',
                description: product[0].description
            }
        ],
        auto_return: 'approved',
        back_urls: {
            success: process.env.URL_BASE + '/success',
            failure: process.env.URL_BASE + '/failure',
            pending: process.env.URL_BASE + '/pending'
        },
        notification_url: process.env.URL_BASE + '/notifications'
    };
    mercadopago.preferences.create(preference)
    .then(response => {
        console.log(response);
        res.send({ error: false, url: response.response.init_point });
    })
    .catch(err => {
        console.log(err);
        res.send({ error: true, message: 'Error con mercado pago' })
    });
});

// Webhooks
app.post('/notifications', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server on port 3000');
});

// Test data
const data = [
    {
        id: 1,
        name: "Samsung Galaxy S9",
        img: "/assets/img/galaxy-s9.jpg",
        description: "Dispositivo móvil de Tienda e-commerce​",
        price: 15000
    },
    {
        id: 2,
        name: "LG G6",
        img: "/assets/img/l6g6.jpg",
        description: "Dispositivo móvil de Tienda e-commerce​",
        price: 10000
    },
    {
        id: 3,
        name: "iPhone 8",
        img: "/assets/img/iphone.jpg",
        description: "Dispositivo móvil de Tienda e-commerce​",
        price: 16000
    },
    {
        id: 4,
        name: "Motorola G5",
        img: "/assets/img/moto-g5.jpg",
        description: "Dispositivo móvil de Tienda e-commerce​",
        price: 9000
    },
    {
        id: 5,
        name: "Motorola G4",
        img: "/assets/img/moto-g4.jpg",
        description: "Dispositivo móvil de Tienda e-commerce​",
        price: 8000
    },
    {
        id: 6,
        name: "Sony Xperia XZ2",
        img: "/assets/img/xperia.jpg",
        description: "Dispositivo móvil de Tienda e-commerce​",
        price: 10000
    }
];
