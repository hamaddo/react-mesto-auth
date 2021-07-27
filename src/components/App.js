import Header from './Header'
import Main from "./Main";
import Footer from "./Footer";
import PopupEdit from "./PopupEdit";
import PopupAddCard from "./PopupAddCard";
import PopupEditAvatar from "./PopupEditAvatar";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React, {useState} from "react";

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({})

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
        setIsImagePopupOpen(true);
        setSelectedCard(card);
    }

    const closeAllPopups = () => {
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsImagePopupOpen(false);
    }


    return (
        <>
            <div className="page">
                <Header/>
                <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
                      onEditAvatar={handleEditAvatarClick}/>
                <Footer/>
                <PopupEdit isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
                <PopupAddCard isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
                <PopupEditAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
                <PopupWithForm name='delete' title='Вы уверены?' buttonText='Удалить' onClose={closeAllPopups}/>
                <ImagePopup/>


                <template id="element-template">

                </template>
            </div>
        </>
    );
}

export default App;
