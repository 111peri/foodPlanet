import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { removeProductFromCart } from '../../redux/reducers/cartSlice';
import productItem from "../ProductItem/ProductItem";

const Cart = () => {
    const location = useLocation();
    const isCartPage = location.pathname === '/cart';

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const totalProductsCount = cartItems.reduce((total, product) => total + product.count, 0);
    const totalProductsPrice = cartItems.reduce((total, product) => total + (product.count * product.price), 0);

    const handleRemoveProduct = (productId) => {
        dispatch(removeProductFromCart(productId)); // Вызов действия для удаления продукта
    };

    if (isCartPage) {
        return (
            <div className='cart__container'>
                <h1 className='cart__basket'>Корзина</h1>
                <p className='cart__total-count'>Общее количество продуктов в корзине: {totalProductsCount}</p>
                <ul className='cart__item'>
                    {cartItems.map((product, index) => (
                        <li key={index}>
                            <img src={product.image} alt="#"/>
                            <p className='cart__title'>{product.title}</p>
                            <p className='cart__price'>{product.price} сом</p>
                            <p className='cart__count'>Количество: {product.count}</p>
                            <button onClick={() => handleRemoveProduct(product.id)}>Удалить</button>
                        </li>
                    ))}
                </ul>
                <p className='cart__total-price'>Общая сумма: {totalProductsPrice} сом</p>
            </div>
        );
    } else {
        return null;
    }
};

export default Cart;



