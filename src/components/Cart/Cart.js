import React from 'react';
import { useSelector } from 'react-redux';
import Cart from "../../redux/store"

const Cart = () => {
    // Используйте useSelector, чтобы получить доступ к данным корзины из Redux Store
    const cartItems = useSelector(state => state.Cart.items);

    return (
        <div className="cart">
            <h2>Корзина</h2>
            <ul>
                {cartItems.map((product, index) => (
                    <li key={index}>
                        <p>{product.title}</p>
                        <p>{product.price} сом</p>
                        <p>Количество: {product.count}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;



