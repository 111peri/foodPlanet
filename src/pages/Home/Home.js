import React from 'react';

//media
import burger from "../../assets/burger.png";
import {AiOutlineArrowRight} from "react-icons/ai";
import {Link} from "react-router-dom";
import ProductItem from "../../components/ProductItem/ProductItem";

const Home = () => {
    return (
        <>

            <section className="begin">
                <div className="begin__info">
                    <h2 className="begin__title">
                        Доставка вкусной еды до 30 минут + напиток в подарок!
                    </h2>
                    <p className="begin__desc">
                        Доставим заказ вовремя и можете рассчитывать,
                        что еда будет доставлена всегда горячим и ароматным.
                    </p>
                    <div>
                        <Link to='menu'>
                            <button className="begin__btn">
                                Перейти в меню
                                <AiOutlineArrowRight className="begin__btn-icon"/>
                            </button>
                        </Link>
                    </div>
                </div>
                <img src={burger} alt="" className="begin__img"/>
            </section>

            <h2 style={{
                margin: '50px'
            }}>
                Бургеры
            </h2>
            <div className="product__list">
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>

            <h2 style={{
                margin: '50px'
            }}>
                Пиццы
            </h2>
            <div className="product__list">
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>

            <h2 style={{
                margin: '50px'
            }}>
                Суши
            </h2>
            <div className="product__list">
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>
        </>
    );
};

export default Home;