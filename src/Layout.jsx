import React from 'react';

export default function Layout(props) {
    return (
        <html lang="es-MX">
            <head>
                <title>{props.title}</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap" rel="stylesheet" /> 
                <link href="https://fonts.googleapis.com/css?family=Rubik&display=swap" rel="stylesheet" /> 
                <link rel="stylesheet" href="/assets/css/main.css" />
                <link rel="stylesheet" href="/assets/css/modal.css" />
            </head>
            <body>
                <div id="root"></div>
                <div className="menu">
                    <p>Tienda e-commerce</p>
                </div>
                {props.children}
                <footer>
                    Todos los derechos reservados. Tienda e-commerce.
                </footer>
                <script src="https://www.mercadopago.com/v2/security.js" view={props.view}></script>
                <script src="https://unpkg.com/react@16/umd/react.development.js" crossOrigin></script>
                <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossOrigin></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
                <script src="/assets/js/payment.js"></script>
                <script type="text/babel" src="/assets/js/bundle.js" />
            </body>
        </html>
    );
}