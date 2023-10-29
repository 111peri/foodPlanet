import React from 'react';

const Cart = ({ cartItems }) => {
    return (
        <div className="cart">
            <h2>Корзина</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>{item.title} - {item.price} сом</li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
