import PopupWithForm from "./PopupWithForm";
import {useEffect, useState} from "react";

export default function AddPlacePopup({onClose, onAddCard, isOpen, isSaving}) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    const resetInputs = () =>{
        setName('');
        setLink('');
    }

    const onAddPlacePopupClose =()=>{
        onClose();
        resetInputs();
    }

    const handleChangeName = e => setName(e.target.value);
    const handleChangeLink = e => setLink(e.target.value);

    function handleSubmit(e) {
        e.preventDefault();
        onAddCard(name, link);
        resetInputs();
    }

    return (
        <PopupWithForm name='add'
                       title='Новое место'
                       buttonText={isSaving ? 'Сохранение...' : 'Сохранить'}
                       onSubmit={handleSubmit} isOpen={isOpen}
                       onClose={onAddPlacePopupClose}
        >
            <input type="text" minLength="2" maxLength="30" required
                   id="add-form__input_field_title"
                   name="name"
                   placeholder="Название"
                   className="form__input form__input_type_title"
                   onChange={handleChangeName}
                   value={name}
            />
            <span className="popup__error"
                  id="add-form__input_field_title_error"/>
            <input type="url" required
                   id="add-form__input_field_subtitle"
                   name="link"
                   placeholder="Ссылка на картинку"
                   className="form__input form__input_type_subtitle"
                   onChange={handleChangeLink}
                   value={link}
            />
            <span className="popup__error"
                  id="add-form__input_field_subtitle_error"/>
        </PopupWithForm>
    )
}