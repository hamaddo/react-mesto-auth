import Header from './Header'
import Main from "./Main";
import Footer from "./Footer";
import PopupEditProfile from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React, {useEffect, useState} from "react";
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
import {ProtectedRoute} from './ProtectedRoute';
import Login from './Login';
import Register from './Register';
import InfoTooltip from './InfoTooltip';
import CurrentUserContext from '../contexts/CurrentUserContext';
import api from "../utils/api";
import * as apiAuth from "../utils/apiAuth";

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
    const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);

    const [currentUser, setCurrentUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const history = useHistory();

    const [selectedCard, setSelectedCard] = useState({})
    const [cards, setCards] = useState([]);

    const [loading, setLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [tooltipStatus, setToolTipStatus] = React.useState(false);

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        if(jwt){
            apiAuth.getContent(jwt)
                .then((res) => {
                    setIsLoggedIn(true);
                    setEmail(res.data.email);
                    history.push('/')
                })
                .catch((err) => alert(err));
        }
    }, [history])

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
    const handleRegistration = (email, password) => {
        apiAuth.register(email, password)
            .then((res) => {
                if (res.data._id) {
                    setToolTipStatus(false)
                    setIsInfoTooltipOpen(true)
                    history.push('/signin');
                }
            })
            .catch((err) => {
                setToolTipStatus(true)
                setIsInfoTooltipOpen(true)
                console.log(err);
            })
    }

    const handleLogin = (email, password) => {
        apiAuth.login(email, password)
            .then((data) => {
                if (data.token) {
                    setToolTipStatus(false)
                    setIsInfoTooltipOpen(false)
                    localStorage.setItem('jwt', data.token)
                    setIsLoggedIn(true)
                    history.push('/')
                    setEmail(email)

                } else {
                    setToolTipStatus(true)
                    setIsInfoTooltipOpen(true)
                }
            })
            .catch((err) => {
                setToolTipStatus(true)
                setIsInfoTooltipOpen(true)
                console.log(err);
            })
    }


    const closeAllPopups = () => {
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsImagePopupOpen(false);
        setIsInfoTooltipOpen(false);
    }

    const handleSignOut = () => {
        localStorage.removeItem('jwt');
        setIsLoggedIn(false);
        history.push('/sign-in');
    };


    return (
        <div className="page">
            <CurrentUserContext.Provider value={currentUser}>
                <Header signOut={handleSignOut} email={email}/>
                <Switch>
                    <ProtectedRoute
                        exact path="/"
                        isLoggedIn={isLoggedIn}
                        component={Main}
                        onEditProfile={handleEditProfileClick}
                        loading={loading}
                        cards={cards}
                        onAddPlace={handleAddPlaceClick}
                        onEditAvatar={handleEditAvatarClick}
                        onCardClick={handleCardClick}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                    />

                    <Route path="/signup">
                        <Register onRegistration={handleRegistration}/>
                    </Route>

                    <Route path="/signin">
                        <Login handleLogin={handleLogin}/>
                    </Route>

                    <Route path="/">
                        {isLoggedIn ? <Redirect to="/"/> : <Redirect to="/signin"/>}
                    </Route>
                </Switch>
                <Footer/>

                <InfoTooltip
                    onClose={closeAllPopups}
                    isOpen={isInfoTooltipOpen}
                    tooltipStatus={tooltipStatus}
                />
                <PopupEditProfile isOpen={isEditProfilePopupOpen}
                                  isSaving={isSaving}
                                  onClose={closeAllPopups}
                                  onUpdateUser={handleUpdateUser}/>
                <AddPlacePopup isOpen={isAddPlacePopupOpen}
                               isSaving={isSaving}
                               onClose={closeAllPopups}
                               onAddCard={handleAddCard}/>
                <EditAvatarPopup isOpen={isEditAvatarPopupOpen}
                                 isSaving={isSaving}
                                 onClose={closeAllPopups}
                                 onUpdateAvatar={handleUpdateAvatar}/>
                <PopupWithForm name='delete' title='Вы уверены?' buttonText='Удалить' onClose={closeAllPopups}/>
                <ImagePopup isOpen={isImagePopupOpen}
                            onClose={closeAllPopups}
                            card={selectedCard}
                            link={selectedCard.link}
                            name={selectedCard.name}/>
            </CurrentUserContext.Provider>
        </div>
    );
}

export default App;
