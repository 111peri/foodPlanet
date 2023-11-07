import React from 'react';
import ProductMenu from "../../components/ProductMenu/ProductMenu";
import ProductList from "../../components/ProductItem/ProductList";

const Menu = () => {
    return (
        <>
            <ProductMenu/>
            <div className="product__list">
                <ProductList/>
            </div>


        </>
    );
};

export default Menu;