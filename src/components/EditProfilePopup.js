import PopupWithForm from "./PopupWithForm";
import React, {useContext, useEffect, useState} from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function PopupEditProfile({isOpen, onClose, onUpdateUser, isSaving,initialName,initialAbout}) {
    const currentUser = useContext(CurrentUserContext);

    const [name, setName] = useState(initialName);
    const [about, setAbout] = useState(initialAbout);

    const onPopupEditProfileClose = () => {
        onClose();
        setName(currentUser.name);
        setAbout(currentUser.about);
    }

    const resetInputs = () => {
        setName('');
        setAbout('')
    }

    const handleChangeName = e => setName(e.target.value);
    const handleChangeDescription = e => setAbout(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        onUpdateUser({
            name,
            about: about,
        });
        resetInputs();
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