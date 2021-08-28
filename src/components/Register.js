import React from "react";
import {Link} from "react-router-dom";


export default function Register({onRegistration}) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleEmailChange = e => setEmail(e.target.value);
    const handlePasswordChange = e => setPassword(e.target.value);

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
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Email"
                />
                <input
                    className="auth__input"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Пароль"
                />
            <button className="auth__button" type="submit">Зарегистрироваться</button>
            </form>
            <Link className="auth__link" to="/signin">Уже зарегистрированы? Войти</Link>
        </div>
    )
}