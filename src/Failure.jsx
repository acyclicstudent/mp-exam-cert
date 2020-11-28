import React from 'react';

export default function Failure() {
    return (
        <div className="state state-failure">
            <p className="title">
                No hemos podido procesar tu pago
            </p>
            <p className="message">
                Intenta más tarde o con otro producto.
            </p>
            <a href="/">Volver a la tienda</a>
        </div>
    );
}