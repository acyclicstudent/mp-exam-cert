import React from 'react';

export default function ProductCard(props) {
    return (
        <a 
            href={`/details?id=${props.id}`}
            className="product"
        >
            <img src={props.img} alt="Imagen Producto" />
            <p className="name">{props.name}</p>
            <p className="price">${props.price} MXN</p>
        </a>
    );
}