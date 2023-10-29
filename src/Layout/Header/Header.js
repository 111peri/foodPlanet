import React from 'react';
import {NavLink} from "react-router-dom";


//media
import Logo from "../../assets/Logo.png";
import {BsFillTelephoneFill} from "react-icons/bs";
import HeaderLogin from "./HeaderLogin/HeaderLogin";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../redux/reducers/auth";
import  {BsCartCheckFill} from "react-icons/bs"

const Header = ({cartItems}) => {

    const dispatch = useDispatch()
    const {user} = useSelector(store => store.auth)

    const [authMenu, setAuthMenu] = React.useState(false)



    function handleClick() {
        this.setState({ cartItem: true });
    }

    };

this.handleClick = undefined;


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
                                dispatch(logoutUser())
                            }}>
                                Выйти
                            </button>
                        ) : (
                            <button className="header__btn" onClick={this.handleClick} => {
                                setAuthMenu(true)
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
                        style={{ display: authMenu ? "block" : "none" }}
                        onClick={() => setAuthMenu(false)}
                    ></div>
                    <HeaderLogin setMenu={setAuthMenu} menu={authMenu}/>
                    <a href="tel:+996777777777" className='header__phone'>
                        <BsFillTelephoneFill className="header__phone-icon"/>
                        +996777777777
                    </a>

                    <div className="cart-info">
                        <span> {cartItems ? `(${cartItems.length})` : '(0)'}</span>
                        <button onClick={openCart}>Открыть корзину</button>
                    </div>

                </nav>
            </div>
        </header>
    );
};

export default Header;