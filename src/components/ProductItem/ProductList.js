import React from "react";
import ProductItem from "./ProductItem";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger4 from "../../assets/burger4.png";

const ProductList = ({ addToCart }) => {
    const burgers = [
        {
            image: burger1,
            title: 'Чизбургер',
            description: 'Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез',
            price: '200'
        },
        {
            image: burger2,
            title: 'Бургер 2',
            description: 'Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез',
            price: '220'
        },
        {
            image: burger4,
            title: 'Бургер 4',
            description: 'Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез',
            price: '240'
        },
        {
            image: burger4,
            title: 'Бургер 4',
            description: 'Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез',
            price: '240'
        },
    ];

    console.log(burgers)
    return (
        <div className="product__list">
            {burgers.map((product, index) => (
                <ProductItem key={index} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default ProductList;
