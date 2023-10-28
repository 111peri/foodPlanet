import React from 'react';
import ProductMenu from "../../components/ProductMenu/ProductMenu";
import ProductItem from "../../components/ProductItem/ProductItem";

const Menu = () => {
    return (
        <>

            <ProductMenu/>
            <div className="product__list">
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>

        </>
    );
};

export default Menu;