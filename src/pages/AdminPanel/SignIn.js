import React from 'react';

function SignIn(props) {
    return (
        <div className="signIn_container">
            <div>
                <label>Введите имя</label><br/>
                <input type="text" value="Имя"/>
            </div>
            <div>
                <label>User name</label><br/>
                <input type="text" value="user name"/>
            </div>
            <div>
                <label>Введите номер телефона</label>
                <input type="number" value="номер телефона"/>
            </div>
            <div>
                <label>Пароль</label><br/>
                <input type="number" value="Password"/>
            </div>

            <button type="submit">Войти</button>
        </div>
    );
}

export default SignIn;