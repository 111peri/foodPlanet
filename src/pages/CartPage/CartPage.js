import React from 'react';
import { useSelector } from 'react-redux';

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const totalProductsCount = cartItems.reduce((total, product) => total + product.count, 0);

    return (
        <div>
            <h2>Корзина</h2>
            <p>Общее количество продуктов в корзине: {totalProductsCount}</p>
            {cartItems.length === 0 ? (
                <p>Ваша корзина пуста.</p>
            ) : (
                <ul>
                    {cartItems.map((product, index) => (
                        <li key={index}>
                            <p>{product.title}</p>
                            <p>{product.price} сом</p>
                            <p>Количество: {product.count}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartPage;
