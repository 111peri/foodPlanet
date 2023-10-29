import React, { useState } from 'react';
import burger1 from '../../assets/burger1.png';
import burger2 from '../../assets/burger2.png';
import burger4 from '../../assets/burger4.png';

const products = [
    {
        image: burger1,
        title: 'Чизбургер',
        description: 'Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез',
        price: '200'
    },
    {
        image: burger2,
        title: 'Бургер 2',
        description: 'Описание бургера 2',
        price: '220'
    },
    {
        image: burger4,
        title: 'Бургер 4',
        description: 'Описание бургера 4',
        price: '240'
    },
];

const ProductItem = ({ product, addToCart }) => {
    const [count, setCount] = useState(0);

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const increment = () => {
        setCount(count + 1);
    };

    const handleAddToCart = () => {
        if (count > 0) {
            addToCart({ ...product, count });
            setCount(0);
        }
    };

    return (
        <div className="product__item">
            <img src={product.image} alt={product.title} className="product__item-img" />
            <h4 className="product__item-title">{product.title}</h4>
            <p className="product__item-desc">{product.description}</p>
            <h4 className="product__item-price">{product.price} сом</h4>
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

const ProductList = ({ addToCart }) => {
    return (
        <div className="product__list">
            {products.map((product, index) => (
                <ProductItem key={index} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default ProductList;

