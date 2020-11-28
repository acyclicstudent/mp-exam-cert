import React from 'react';

export default function Pending() {
    return (
        <div className="state state-pending">
            <p className="title">
                Tu pago se esta procesando
            </p>
            <p className="message">
                En lo que acabamos, hecha un vistazo a la
                amplia variedad de productos que te ofrecemos.
            </p>
            <a href="/">Seguir comprando</a>
        </div>
    );
}