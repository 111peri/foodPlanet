import React from 'react';
import {NavLink} from "react-router-dom";
import Logo from "../../assets/Logo.png"
import {BsFillTelephoneFill} from "react-icons/bs";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <nav className="footer__nav">
                    <h1 className="footer__logo">
                        <NavLink to={''}>
                            <img src={Logo} alt=""/>
                        </NavLink>
                    </h1>
                    <NavLink to='' className='footer__link'>
                        Главная
                    </NavLink>
                    <NavLink to='menu' className='footer__link'>
                        Меню
                    </NavLink>
                    <NavLink to='delivery' className='footer__link'>
                        Доставка
                    </NavLink>
                    <NavLink to='contacts' className='footer__link'>
                        Контакты
                    </NavLink>
                    <a href="tel:+996777777777" className='footer__phone'>
                        <BsFillTelephoneFill className="footer__phone-icon"/>
                        +996777777777
                    </a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;