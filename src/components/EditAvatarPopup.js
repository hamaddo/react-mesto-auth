import PopupWithForm from "./PopupWithForm";
import {useEffect, useRef} from "react";


export default function EditAvatarPopup({onClose, isOpen, onUpdateAvatar}) {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.value = '';
    }, [isOpen]);

    const handleSubmit = e => {
        e.preventDefault();
        onUpdateAvatar(inputRef.current.value);
    }

    return (
        <PopupWithForm name='edit-avatar' title='Обновить Аватар' buttonText='Сохранить' onSubmit={handleSubmit} isOpen={isOpen}
                       onClose={onClose}>
            <input type="url" required
                   name="link"
                   id="edit-avatar--form__input_field_subtitle"
                   className="form__input form__input_type_subtitle"
                   placeholder="Ссылка на картинку"
                   ref={inputRef}
            />
            <span className="popup__error"
                  id="edit-avatar--form__input_field_subtitle_error"/>
        </PopupWithForm>
    )
}