import React from "react";

function Login({handleLogin}) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleEmailChange = e=>setEmail(e.target.value);
    const handlePasswordChange = e=>setPassword(e.target.value);

    function handleSubmit(e) {
        e.preventDefault();
        handleLogin(email, password)
    }

    return (
        <div className="auth">
            <p className="auth__title">Вход</p>
            <form className="auth__form" onSubmit={handleSubmit}>
                <input
                    className="auth__input"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}/>
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={handlePasswordChange}/>
            <button className="auth__button" type="submit">Войти</button>
            </form>
        </div>
    )
}

export default Login;