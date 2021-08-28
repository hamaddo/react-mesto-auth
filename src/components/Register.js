import React from "react";
import {Link} from "react-router-dom";


export default function Register({onRegistration}) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleSubmit(e) {
        e.preventDefault();
        onRegistration(email, password)
    }

    return (
        <div className="auth">
            <p className="auth__title">Регистрация</p>
            <form onSubmit={handleSubmit} className="auth__form">
                <input
                    className="auth__input"
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    className="auth__input"
                    type="password"
                    name="email"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Пароль"
                />
            </form>
            <button className="auth__button" type="submit" onClick={handleSubmit}>Зарегистрироваться</button>
            <Link className="auth__link" to="/signin">Уже зарегистрированы? Войти</Link>
        </div>
    )
}