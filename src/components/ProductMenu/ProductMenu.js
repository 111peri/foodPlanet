import React from 'react';

const ProductMenu = () => {

    const [menu, setMenu] = React.useState('burgers')

    return (
        <div className="menu__list">
            <button className={`menu__item ${menu === 'burgers' ? 'active' : ''}`}
                    onClick={() => {
                        setMenu('burgers')
                    }}
            >
                Бургеры
            </button>
            <button className={`menu__item ${menu === 'sushi' ? 'active' : ''}`}
                    onClick={() => {
                        setMenu('sushi')
                    }}
            >
                Суши
            </button>
            <button className={`menu__item ${menu === 'rolls' ? 'active' : ''}`}
                    onClick={() => {
                        setMenu('rolls')
                    }}
            >
                Роллы
            </button>
            <button className={`menu__item ${menu === 'salads' ? 'active' : ''}`}
                    onClick={() => {
                        setMenu('salads')
                    }}
            >
                Салаты
            </button>
            <button className={`menu__item ${menu === 'dessert' ? 'active' : ''}`}
                    onClick={() => {
                        setMenu('dessert')
                    }}
            >
                Десерты
            </button>
            <button className={`menu__item ${menu === 'beverages' ? 'active' : ''}`}
                    onClick={() => {
                        setMenu('beverages')
                    }}
            >
                Напитки
            </button>

        </div>
    );
};

export default ProductMenu;