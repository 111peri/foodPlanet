import React from 'react';




function Cart({ cartItems }) {


    return (
        <div className="cart">
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>{item.title} - {item.price} сом</li>
                ))}
            </ul>
        </div>
    );
}

export default Cart


