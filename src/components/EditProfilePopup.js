import PopupWithForm from "./PopupWithForm";
import React, {useContext, useState} from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";


export default function PopupEditProfile({isOpen, onClose, onUpdateUser, isSaving}) {
    const currentUser = useContext(CurrentUserContext);

    const [name, setName] = useState(currentUser.name);
    const [about, setAbout] = useState(currentUser.about);

    /*Избавился от старой очистки инпутов, чтобы реализовать полностью управляемые компоненты, без useEffect*/

    const onPopupEditProfileClose = () => {
        onClose();
        resetInputs();
    }

    const resetInputs = () => {
        setName(currentUser.name);
        setAbout(currentUser.about);
    }

    const handleChangeName = e => setName(e.target.value);
    const handleChangeDescription = e => setAbout(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        onUpdateUser({name, about});
    }

    return (
        <PopupWithForm name='edit'
                       title='Редактировать профиль'
                       buttonText={isSaving ? 'Сохранение...' : 'Сохранить'}
                       isOpen={isOpen}
                       onSubmit={handleSubmit}
                       onClose={onPopupEditProfileClose}
        >
            <input type="text" minLength="2" maxLength="40" required
                   id="edit-form__input_field_title"
                   name="name"
                   placeholder="Имя"
                   className="form__input form__input_type_title"
                   value={name}
                   onChange={handleChangeName}
            />
            <span className="popup__error"
                  id="edit-form__input_field_title_error"/>
            <input type="text" minLength="2" maxLength="200" required
                   id="edit-form__input_field_subtitle"
                   name="about"
                   placeholder="Вид деятельности"
                   className="form__input form__input_type_subtitle"
                   value={about}
                   onChange={handleChangeDescription}
            />
            <span className="popup__error"
                  id="edit-form__input_field_subtitle_error"/>
        </PopupWithForm>
    )
}