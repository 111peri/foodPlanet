import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import HeaderLogin from "./HeaderLogin/HeaderLogin";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/reducers/auth";
import cart_Icon from "../../assets/cart_Icon.png"


const Header = ({ cartItems }) => {
    const dispatch = useDispatch();
    const { user } = useSelector(store => store.auth);

    const [authMenu, setAuthMenu] = useState(false);
    const [isCartOpen, setCartOpen] = useState(false);

    const totalProductsInCart = useSelector((state) => state.cart.items.length);

    function openCart() {
        setCartOpen(true);
    }

    return (
        <header className='header'>
            <div className="container">
                <nav className="header__nav">
                    <h1 className="header__logo">
                        <NavLink to={''}>
                            <img src={Logo} alt=""/>
                        </NavLink>
                    </h1>
                    <NavLink to='' className='header__link'>
                        Главная
                    </NavLink>
                    <NavLink to='menu' className='header__link'>
                        Меню
                    </NavLink>
                    <NavLink to='delivery' className='header__link'>
                        Доставка
                    </NavLink>
                    <NavLink to='contacts' className='header__link'>
                        Контакты
                    </NavLink>
                    {
                        user ? (
                            <button style={{
                                background: 'red'
                            }} className="header__btn" onClick={() => {
                                dispatch(logoutUser());
                            }}>
                                Выйти
                            </button>
                        ) : (
                            <button className="header__btn" onClick={() => {
                                setAuthMenu(true);
                            }}>
                                Войти
                            </button>
                        )
                    }
                    {
                        user ? (
                            <>
                                <p>{user.email}</p>
                                <h4>{user.firstName}</h4>
                            </>
                        ) : ''
                    }
                    <div
                        className="overlay"
                        style={{display: authMenu ? "block" : "none"}}
                        onClick={() => setAuthMenu(false)}
                    ></div>
                    <HeaderLogin setMenu={setAuthMenu} menu={authMenu}/>
                    <a href="tel:+996777777777" className='header__phone'>
                        <BsFillTelephoneFill className="header__phone-icon"/>
                        +996777777777
                    </a>

                    <div className="cart-info">
                        <img src={cart_Icon} alt="Cart" className="header__cart"/>
                        <span> {cartItems ? `(${cartItems})` : '0'}</span>
                        <span>{totalProductsInCart}</span>

                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;

