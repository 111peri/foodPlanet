import React from "react";
import ProductItem from "./ProductItem";
import pizza1 from "../../assets/pizza1.png";
import pizza2 from "../../assets/pizza2.png";
import pizza4 from "../../assets/pizza4.png";
import pizza3 from "../../assets/pizza3.png"

const Pizza = ({ addToCart }) => {
    const pizzas = [
        {
            image: pizza1,
            title: 'Маргарита',
            description: 'Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез',
            price: '200'
        },
        {
            image: pizza2,
            title: 'Мексиканская ',
            description: 'Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез',
            price: '220'
        },
        {
            image: pizza3,
            title: 'Пепперони ',
            description: 'Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез',
            price: '240'
        },

        {
            image: pizza4,
            title: 'Мексиканская ',
            description: 'Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез',
            price: '240'
        },
    ];

    console.log(pizzas)
    return (
        <div className="product__list">
            {pizzas.map((product, index) => (
                <ProductItem key={index} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default Pizza;