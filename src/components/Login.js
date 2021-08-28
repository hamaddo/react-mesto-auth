import React from "react";

export  default function Login(props) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleSubmit(e) {
        e.preventDefault();
        props.enter(email, password)
    }

    return (
        <div className="auth">
            <p className="auth__title">Вход</p>
            <form className="login__form" type="form" onSubmit={handleSubmit}>
                <input
                    className="auth__input"
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}/>
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Пароль"
                    onChange={(e) => setPassword(e.target.value)}/>
            </form>
            <button className="auth__button" type="submit" onClick={handleSubmit}>Войти</button>
        </div>
    )
}