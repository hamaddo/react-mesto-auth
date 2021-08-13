import Header from './Header'
import Main from "./Main";
import Footer from "./Footer";
import PopupEditProfile from "./PopupEdit";
import PopupAddCard from "./PopupAddCard";
import PopupEditAvatar from "./PopupEditAvatar";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React, {useEffect, useState} from "react";
import CurrentUserContext from '../contexts/CurrentUserContext';
import {api} from "../utils/Api";

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({})

    const [loading, setLoading] = useState(true);

    const [cards, setCards] = useState([]);
    useEffect(() => {
        api.getUserInfo()
            .then((userData) => {
                setCurrentUser(userData);
            })
            .catch((err) => alert(err));
    }, [])

    const [currentUser, setCurrentUser] = useState('');
    useEffect(() => {
        api.getInitialCards()
            .then((cardData) => {
                setCards(cardData);
                setLoading(false);
            })
            .catch((err) => alert(err));
    }, [])


    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true)
    };

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true)
    };

    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true)
    };

    const handleCardClick = (card) => {
        setSelectedCard(card);
        setIsImagePopupOpen(true);
    }

    const handleCardLike = card => {
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        api.changeLikeCardStatus(card._id, isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            });
    }


    const handleCardDelete = card => {
        api.deleteCard(card)
            .then(() => {
                setCards(cards.filter((item) => item._id !== card._id))
            })
            .catch((err) => console.log(err));
    }

    const handleUpdateUser = ({name, about}) => {
        api.patchUserInfo(name, about)
            .then(newUserInfo => setCurrentUser(newUserInfo))
            .then(closeAllPopups)
            .catch(err => console.log(err))
    }

    const handleUpdateAvatar = (avatar) => {
        api.patchUserAvatar(avatar)
            .then(avatar => setCurrentUser(user => {
                return {...user, ...avatar}
            }))
            .then(closeAllPopups)
            .catch(err => console.log(err))
    }

    const handleAddCard = ({name, link}) => {
        api.addCard(name, link)
            .then(newCard => setCards([newCard, ...cards]))
            .then(closeAllPopups)
            .catch(err => console.log(err))
    }

    const closeAllPopups = () => {
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsImagePopupOpen(false);
    }


    return (
        <div className="page">
            <CurrentUserContext.Provider value={currentUser}>
                <Header/>

                <Main onEditProfile={handleEditProfileClick}
                      loading={loading}
                      cards={cards}
                      onAddPlace={handleAddPlaceClick}
                      onEditAvatar={handleEditAvatarClick}
                      onCardClick={handleCardClick}
                      onCardLike={handleCardLike}
                      onCardDelete={handleCardDelete}
                />

                <Footer/>

                <PopupEditProfile isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
                                  onUpdateUser={handleUpdateUser}/>
                <PopupAddCard isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddCard={handleAddCard}/>
                <PopupEditAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
                                 onUpdateAvatar={handleUpdateAvatar}/>
                <PopupWithForm name='delete' title='Вы уверены?' buttonText='Удалить' onClose={closeAllPopups}/>
                <ImagePopup isOpen={isImagePopupOpen} onClose={closeAllPopups} card={selectedCard}
                            link={selectedCard.link}
                            name={selectedCard.name}/>
            </CurrentUserContext.Provider>
        </div>
    );
}

export default App;
