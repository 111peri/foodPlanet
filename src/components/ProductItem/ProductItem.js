import React from 'react';


//media
import burger from "../../assets/burger.png";

const ProductItem = () => {
    return (
        <div className='productItem'>
            <img src={burger} alt="" className="productItemImg"/>
            <h4 className="productItemTitle">
                Чизбургер
            </h4>
            <p className="productItem-desc">
                Булка, котлета , сыр, соленый огурец,
                лук, помидор, салат айсберг, соус чесночный,
                соус гриль, кетчуп, майонез
            </p>
            <h4 className="productItemPrice">
                200 сом
            </h4>
            <div className='productItemCounter'>
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
                <button className="productItemBtn">
                    Добавить в корзину
                </button>
            </div>
        </div>
    );
};

export default ProductItem;