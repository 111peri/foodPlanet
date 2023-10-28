import React from 'react';
import {useState} from "react";
import burger1 from '../../assets/burger1.png'

function Product(props) {

    const product = {
        id: 1,
        name: 'Продукт',
        description: 'Описание 1 продукта ',
        price: 250,

    }

    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        console.log(`Добавлено ${count} товаров "${product.name}" в корзину.`);
    };


    return (
        <div className="product_description" >
            <div>
                <h2>{product.name}</h2>
                <p >{product.description}</p>
                <img src={burger1} alt="#"/>
            </div>
            <p className="product_price">Цена: {product.price} сом</p>
            <div className="choose_product">
                <button onClick={handleDecrement}>-</button>
                <button onClick={handleIncrement}>+</button>
                <p>Количество: {count}</p>
                <button onClick={handleAddToCart} className="add_to_cart">Добавить в корзину</button>
            </div>

        </div>
    );
}

export default Product;