import Header from './Header'
import Main from "./Main";
import Footer from "./Footer";
import PopupEdit from "./PopupEdit";
import PopupAddCard from "./PopupAddCard";
import PopupEditAvatar from "./PopupEditAvatar";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

    const handleEditAvatarClick = () => {
        document.querySelector('.popup_type_edit-avatar').classList.add('popup_opened');

    }

    const handleEditProfileClick = () => {
        document.querySelector('.popup_type_edit').classList.add('popup_opened');
    };

    const handleAddPlaceClick = () => {
        document.querySelector('.popup_type_add').classList.add('popup_opened');

    };


    return (
        <>
            <div className="page">
                <Header/>
                <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
                      onEditAvatar={handleEditAvatarClick}/>
                <Footer/>
                <PopupEdit/>
                <PopupAddCard/>
                <PopupEditAvatar/>
                <PopupWithForm name='delete' title='Вы уверены?' buttonText='Удалить'/>
                <ImagePopup/>


                <template id="element-template">
                    <li className="element">
                        <img alt="Место" className="element__image"
                             src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"/>
                        <button aria-label="Удалить" type="button" className="element__trash button "/>
                        <div className="element__group">
                            <h2 className="element__title"></h2>
                            <div className="element__like-container">
                                <button aria-label="Лайк" type="button" className="element__like button"/>
                                <p className="element__like-count">0</p>
                            </div>
                        </div>
                    </li>
                </template>
            </div>
        </>
    );
}

export default App;
