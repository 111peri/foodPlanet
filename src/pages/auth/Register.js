import React from 'react';
import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import {ClipLoader} from "react-spinners";
import {useDispatch} from "react-redux";
import {registerUser} from "../../redux/reducers/auth";

const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm()

    const onSubmit = (values) => {
        dispatch(registerUser(values))
        navigate('/')
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <form onSubmit={handleSubmit(onSubmit)} className="auth">
                <h3 className="auth__title">
                    Регистрация
                </h3>
                <label>Имя</label>
                <input type="text" placeholder='Имя' {...register('firstName')}/>
                <label>Фамилия</label>
                <input type="text" placeholder='Фамилия' {...register('lastName')}/>
                <label>Почта</label>
                <input type="email" placeholder='email' {...register('email')}/>
                <label>Пароль</label>
                <input type="password" placeholder='пароль' {...register('password')}/>
                <button className="auth__btn" type='submit'>
                    {/*<ClipLoader color="#36d7b7" size={15} />*/}
                    Регистрация
                </button>
                <div className="auth__question">
                    У вас уже есть аккаунт?
                    <Link to='/auth/login'>Войти</Link>
                </div>
            </form>
        </div>
    )
};

export default Register;