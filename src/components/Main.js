import profileLoader from "../images/profile__avatar-loader.gif";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";
import React from "react";

export default function Main({loading, onAddPlace, cards, onEditProfile, onEditAvatar, onCardClick, onCardDelete, onCardLike}) {

    const currentUser = React.useContext(CurrentUserContext);
    return (
        <main className="content">
            <section className="profile">
                <img className="profile__avatar" src={loading ? profileLoader : currentUser.avatar} alt="Жак Фреско"/>
                <button onClick={onEditAvatar} className="profile__avatar-edit-button"/>
                <div className="profile-info">
                    <h1 id="profile-info__title" className="profile-info__title">{currentUser.name}</h1>
                    <p id="profile-info__subtitle" className="profile-info__subtitle">{currentUser.about}</p>
                    <button aria-label="Редактировать" type="button" onClick={onEditProfile}
                            className="profile-info__button button"/>
                </div>
                <button type="button" onClick={onAddPlace} aria-label="Добавить"
                        className="profile__button button"/>
            </section>

            <section className="elements">
                <ul className="elements__list">
                    {cards.map((card) => (
                        <Card
                            card={card}
                            key={card._id}
                            link={card.link}
                            name={card.name}
                            likes={card.likes.length}
                            onCardClick={onCardClick}
                            onCardDelete={onCardDelete}
                            onCardLike={onCardLike}
                        />
                    ))}
                </ul>
            </section>
        </main>
    )
}
