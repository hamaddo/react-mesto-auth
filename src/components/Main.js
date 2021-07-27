import profileLoader from "../images/profile__avatar-loader.gif";
import {useEffect, useState} from "react";
import {api} from "../utils/Api";
import Card from "./Card";

export default function Main(props) {

    const [userName, setUserName] = useState();
    const [userDescription, setUserDescription] = useState();
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([api.getInitialCards(), api.getUserInfo()])
            .then(([cardData, userData]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                setCards(cardData);
                setLoading(false);
            })
            .catch((err) => alert(err));
    })

    return (
        <main className="content">
            <section className="profile">
                <img className="profile__avatar" src={loading ? profileLoader : userAvatar} alt="Жак Фреско"/>
                <button onClick={props.onEditAvatar} className="profile__avatar-edit-button"/>
                <div className="profile-info">
                    <h1 id="profile-info__title" className="profile-info__title">{userName}</h1>
                    <p id="profile-info__subtitle" className="profile-info__subtitle">{userDescription}</p>
                    <button aria-label="Редактировать" type="button" onClick={props.onEditProfile}
                            className="profile-info__button button"/>
                </div>
                <button type="button" onClick={props.onAddPlace} aria-label="Добавить"
                        className="profile__button button"/>
            </section>

            <section className="elements">
                <ul className="elements__list">
                    {cards.map((card) => (
                        <Card
                            key={card._id}
                            link={card.link}
                            name={card.name}
                            likes={card.likes.length}
                        />
                    ))}
                </ul>
            </section>
        </main>
    )
}
