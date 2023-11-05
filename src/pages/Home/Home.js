import React from 'react';
import {AiOutlineArrowRight} from "react-icons/ai";
import {Link} from "react-router-dom";
import ProductList from "../../components/ProductItem/ProductList";
import Pizza from "../../components/ProductItem/Pizza";


//media
import burger from "../../assets/burger.png";

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
            <ProductList/>



            <h2 style={{
                margin: '50px'
            }}>
                Пиццы
            </h2>
            <div className="product__list">
                <Pizza/>
                <Pizza/>
            </div>

            <h2 style={{
                margin: '50px'
            }}>
                Отзывы
            </h2>
            <div className="product__list">

            </div>
        </>
    );
};

export default Home;