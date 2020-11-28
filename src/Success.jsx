import React from 'react';

export default function Success(props) {
    return (
        <div className="state state-success">
            <p className="title">
                !En hora buena!
            </p>
            <p className="message">
                Tu pago se ha procesado correctamente,
                puedes seguir comprando en la tienda.
            </p>
            <div className="payment-info">
                <p className="title-info">Información adicional sobre el pago</p>
                <p>ID de pago: {props.data.collection_id}</p>
                <p>Tipo de pago: {props.data.payment_type}</p>
                <p>Status: {props.data.collection_status}</p>
                <p>External reference: {props.data.external_reference}</p>
            </div>

            <a href="/">Volver a la tienda</a>
        </div>
    );
}