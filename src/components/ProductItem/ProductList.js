import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ addToCart }) => {
    let products;
    return (
        <div className="product__list">
            {products.map((product, index) => (
                <ProductItem key={index} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default ProductList;