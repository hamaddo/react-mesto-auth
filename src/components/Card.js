import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";


export default function Card({card, onCardClick, onCardLike, onCardDelete}) {
    const currentUser = React.useContext(CurrentUserContext);


    const isOwn = card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (
        `element__trash ${isOwn ? 'element__trash_active' : 'element__trash_hidden'}`
    );

    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = (
        `element__like ${isLiked ? 'element__like_active' : ''}`
    );

    const handleLikeClick = () => {
        onCardLike(card);
    }

    const handleDeleteClick = () => {
        onCardDelete(card);
    }

    const handleClick = () => {
        onCardClick(card)
    }

    return (
        <li className="element">
            <img alt={'Место' + card.name} className="element__image"
                 src={card.link} onClick={handleClick}/>
            <button aria-label="Удалить" type="button" onClick={handleDeleteClick}
                    className={cardDeleteButtonClassName + ' button'}/>
            <div className="element__group">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__like-container">
                    <button aria-label="Лайк" type="button" onClick={handleLikeClick}
                            className={cardLikeButtonClassName + ' button'}/>
                    <p className="element__like-count">{card.likes.length}</p>
                </div>
            </div>
        </li>
    )
}