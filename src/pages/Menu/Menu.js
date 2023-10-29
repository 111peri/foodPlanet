import React from 'react';
import ProductMenu from "../../components/ProductMenu/ProductMenu";
import ProductItem from "../../components/ProductItem/ProductItem";

const Menu = () => {
    return (
        <>

            <ProductMenu/>
            <div className="product__list">
                <ProductItem/>
            </div>

        </>
    );
};

export default Menu;