import headerLogo from "../images/header__logo.svg";
import {Link, Route} from "react-router-dom";

function Header({email, signOut}){
    return (
        <header className="header">
            <img className="header__logo" src={headerLogo} alt="Лого"/>
            <Route path="/sign-up">
                <Link to="/sign-in" className="header__button">Войти</Link>
            </Route>
            <Route path="/sign-in">
                <Link to="/sign-up" className="header__button">Регистрация</Link>
            </Route>
            <Route exact path="/">
                <div className="header__container">
                    <p className="header__email">{email}</p>
                    <button className="header__button" onClick={signOut}>Выйти</button>
                </div>
            </Route>
        </header>
    )
}

export default Header;