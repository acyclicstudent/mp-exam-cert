import React from 'react';
import ProductCard from './ProductCard';

export default function Home(props) {
    return (
        <div className="home">
            <div className="section-title">
                <p>Smartphones</p>
            </div>
            <div className="grid">
                <div className="sections">
                    <ul>
                        <li>Marca</li>
                        <li><a>Apple</a></li>
                        <li><a>LG</a></li>
                        <li><a>Motorola</a></li>
                        <li><a>Samsung</a></li>
                        <li><a>Huawei</a></li>
                        <li><a>Sony</a></li>
                    </ul>
                </div>
                <div id="products" className="products">
                    {
                        props.data.map((item) => (
                            <ProductCard
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                img={item.img}
                                price={item.price}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
