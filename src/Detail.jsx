import React from 'react';

export default function Detail(props) {
    return (
        <div className="product-detail">
            <div className="image">
                <img src={props.data.img} alt="Imagen de producto"/>
            </div>
            <div className="details">
                <p className="title">{props.data.name}</p>
                <p className="description">{props.data.description}</p>
                <p className="price">${props.data.price} MXN</p>
                <p className="price">Cantidad: 1</p>
                <button id="btn-pay">Pagar ahora</button>
            </div>
        </div>
    );
}