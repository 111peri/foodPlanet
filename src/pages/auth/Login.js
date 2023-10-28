import React from 'react';
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {loginUser} from "../../redux/reducers/auth"

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register,handleSubmit} = useForm()




    const onSubmit = (values) => {
        dispatch(loginUser(values))
        navigate('/')
    }


    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <form onSubmit={handleSubmit(onSubmit)} className="auth">
                <h3 className="auth__title">
                    Войти
                </h3>
                <label>Почта</label>
                <input type="email" placeholder='email' {...register('email')}/>
                <label>Пароль</label>
                <input type="password" placeholder='пароль' {...register('password')}/>
                <button className="auth__btn" type='submit'>
                    Войти
                </button>
                <div className="auth__question">
                    У вас нет аккаунта?
                    <Link to='/auth/register'>Регистрация</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;