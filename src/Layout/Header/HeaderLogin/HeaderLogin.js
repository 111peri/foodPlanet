import React from 'react';
import {Link} from "react-router-dom";

const HeaderLogin = ({setMenu, menu}) => {
    return (
        <div className="header__login" style={{display: menu ? 'flex' : 'none'}}>
            <div style={{
                display: 'flex',
                justifyContent: 'end'
            }}>
                <span style={{cursor: 'pointer', fontSize: '25px', fontWeight: '500'}} onClick={() => {
                    setMenu(false)
                }}>x</span>
            </div>
            <Link to='/auth/login'>
                <button className="header__btn user" onClick={() => setMenu(false)}>
                    Войти как пользователь
                </button>
            </Link>
            <button className="header__btn admin" onClick={() => setMenu(false)}>
                Войти как админ
            </button>
        </div>
    );
};

export default HeaderLogin;