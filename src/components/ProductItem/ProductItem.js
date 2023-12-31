import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import {addToCart} from '../../redux/reducers/cartSlice'

const ProductItem = ({product}) => {
    const [count, setCount] = useState(0);

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const increment = () => {
        setCount(count + 1);
    };

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        if (count > 0) {
            dispatch(addToCart({ ...product, count }));
            setCount(0);
        }
    };

    return (
        <div className="product__item">
            {product && (
                <>
                    <img src={product.image} alt={product.title} className="product__item-img" />
                    <h4 className="product__item-title">{product.title}</h4>
                    <p className="product__item-desc">{product.description}</p>
                    <h4 className="product__item-price">{product.price} сом</h4>
                </>
            )}
            <div className="product__item-counter">
                <span>
                    <button onClick={decrement}>-</button>
                </span>
                {count}
                <span>
                    <button onClick={increment}>+</button>
                </span>
            </div>
            <div>
                <button className="product__item-btn" onClick={handleAddToCart}>
                    Добавить в корзину
                </button>
            </div>
        </div>
    );
};

export default ProductItem;




