import Header from './Header'
import Main from "./Main";
import Footer from "./Footer";
import PopupEditProfile from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React, {useEffect, useState} from "react";
import {Route, Switch, Redirect, useHistory, BrowserRouter} from "react-router-dom";
import {ProtectedRoute} from './ProtectedRoute';
import Login from './Login';
import Register from './Register';
import InfoTooltip from './InfoTooltip';
import CurrentUserContext from '../contexts/CurrentUserContext';
import api from "../utils/api";

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
    const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);

    const [currentUser, setCurrentUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const history = useHistory();

    const [selectedCard, setSelectedCard] = useState({})
    const [cards, setCards] = useState([]);

    const [loading, setLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [tooltipStatus, setToolTipStatus] = React.useState(false);

    useEffect(() => {
        Promise.all([api.getInitialCards(), api.getUserInfo()])
            .then(([cardData, userData]) => {
                setCurrentUser(userData);
                setCards(cardData);

            })
            .catch((err) => alert(err))
            .finally(() => setLoading(false))
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
            })
            .catch(err => console.log(err));
    }


    const handleCardDelete = card => {
        api.deleteCard(card)
            .then(() => {
                setCards(cards.filter((item) => item._id !== card._id))
            })
            .catch((err) => console.log(err));
    }

    const handleUpdateUser = ({name, about}) => {
        setIsSaving(true);

        api.patchUserInfo(name, about)
            .then(newUserInfo => {
                setCurrentUser(newUserInfo);
            })
            .then(closeAllPopups)
            .catch(err => console.log(err))
            .finally(() => setIsSaving(false))
    }

    const handleUpdateAvatar = (avatar) => {
        setIsSaving(true);

        api.patchUserAvatar(avatar)
            .then(avatar => setCurrentUser(user => {
                return {...user, ...avatar}
            }))
            .then(closeAllPopups)
            .catch(err => console.log(err))
            .finally(() => setIsSaving(false))
    }

    const handleAddCard = ({name, link}) => {
        setIsSaving(true);
        api.addCard(name, link)
            .then(newCard => setCards([newCard, ...cards]))
            .then(closeAllPopups)
            .catch(err => console.log(err))
            .finally(() => setIsSaving(false))
    }
    const handleRegistration = ({email, password}) => {

    }

    const handleLogin = ({email, password}) => {

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
                <BrowserRouter>
                    <Switch>
                        <ProtectedRoute>
                            path="/"
                            loggedIn={isLoggedIn}
                            component={Main}
                            onEditProfile={handleEditProfileClick}
                            loading={loading}
                            cards={cards}
                            onAddPlace={handleAddPlaceClick}
                            onEditAvatar={handleEditAvatarClick}
                            onCardClick={handleCardClick}
                            onCardLike={handleCardLike}
                            onCardDelete={handleCardDelete}
                        </ProtectedRoute>

                        <Route path="/sign-up">
                            <Register onRegistration={handleRegistration}/>
                        </Route>

                        <Route path="/sign-in">
                            <Login handleLogin={handleLogin}/>
                        </Route>

                        <Route path="/">
                            {isLoggedIn ? <Redirect to="/"/> : <Redirect to="/sign-in"/>}
                        </Route>
                    </Switch>
                </BrowserRouter>
                <Footer/>

                <InfoTooltip
                    onClose={closeAllPopups}
                    isOpen={isInfoTooltipOpen}
                    tooltipStatus={tooltipStatus}
                />
                <PopupEditProfile isOpen={isEditProfilePopupOpen} isSaving={isSaving} onClose={closeAllPopups}
                                  onUpdateUser={handleUpdateUser}/>
                <AddPlacePopup isOpen={isAddPlacePopupOpen} isSaving={isSaving} onClose={closeAllPopups}
                               onAddCard={handleAddCard}/>
                <EditAvatarPopup isOpen={isEditAvatarPopupOpen} isSaving={isSaving} onClose={closeAllPopups}
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
