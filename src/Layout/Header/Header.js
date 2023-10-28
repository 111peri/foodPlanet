import React from 'react';
import {NavLink} from "react-router-dom";


//media
import Logo from "../../assets/Logo.png";
import {BsFillTelephoneFill} from "react-icons/bs";
import HeaderLogin from "./HeaderLogin/HeaderLogin";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../redux/reducers/auth";

const Header = () => {

    const dispatch = useDispatch()
    const {user} = useSelector(store => store.auth)

    const [authMenu, setAuthMenu] = React.useState(false)

    return (
        <header className='header'>
            <div className="container">
                <nav className="headerNav">
                    <h1 className="headerLogo">
                        <NavLink to={''}>
                            <img src={Logo} alt=""/>
                        </NavLink>
                    </h1>
                    <NavLink to='' className='headerLink'>
                        Главная
                    </NavLink>
                    <NavLink to='menu' className='headerLink'>
                        Меню
                    </NavLink>
                    <NavLink to='delivery' className='headerLink'>
                        Доставка
                    </NavLink>
                    <NavLink to='contacts' className='headerLink'>
                        Контакты
                    </NavLink>
                    {
                        user ? (
                            <button style={{
                                background: 'red'
                            }} className="headerBtn" onClick={() => {
                                dispatch(logoutUser())
                            }}>
                                Выйти
                            </button>
                        ) : (
                            <button className="headerBtn" onClick={() => {
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
                    <a href="tel:+996777777777" className='headerPhone'>
                        <BsFillTelephoneFill className="headerPhoneIcon"/>
                        +996777777777
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;