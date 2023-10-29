import React from 'react';


//media
import burger1 from "../../assets/burger1.png";

const ProductItem = () => {
    return (
        <div className='product__item'>
            <img src={burger1} alt="" className="product__item-img"/>
            <h4 className="product__item-title">
                Чизбургер
            </h4>
            <p className="product__item-desc">
                Булка, котлета , сыр, соленый огурец,
                лук, помидор, салат айсберг, соус чесночный,
                соус гриль, кетчуп, майонез
            </p>
            <h4 className="product__item-price">
                200 сом
            </h4>
            <div className='product__item-counter'>
                <span>
                    <button>
                        -
                    </button>
                </span>
                0
                <span>
                    <button>
                        +
                    </button>
                </span>
            </div>
            <div>
                <button className="product__item-btn">
                    Добавить в корзину
                </button>
            </div>
        </div>
    );
};

export default ProductItem;