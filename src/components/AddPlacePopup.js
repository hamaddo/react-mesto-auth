import PopupWithForm from "./PopupWithForm";
import {useRef, useEffect} from "react";

export default function AddPlacePopup({onClose, onAddCard, isOpen, isSaving}) {

    const name = useRef();
    const link = useRef();

    useEffect(() => {
        name.current.value = '';
        link.current.value = '';
    }, [isOpen]);


    function handleSubmit(e) {
        e.preventDefault();

        onAddCard({
            name: name.current.value,
            link: link.current.value
        });
    }

    return (
        <PopupWithForm name='add'
                       title='Новое место'
                       buttonText={isSaving ? 'Сохранение...' : 'Сохранить'}
                       onSubmit={handleSubmit} isOpen={isOpen}
                       onClose={onClose}>
            <input type="text" minLength="2" maxLength="30" required
                   id="add-form__input_field_title"
                   name="name"
                   placeholder="Название"
                   className="form__input form__input_type_title"
                   ref={name}
            />
            <span className="popup__error"
                  id="add-form__input_field_title_error"/>
            <input type="url" required
                   id="add-form__input_field_subtitle"
                   name="link"
                   placeholder="Ссылка на картинку"
                   className="form__input form__input_type_subtitle"
                   ref={link}
            />
            <span className="popup__error"
                  id="add-form__input_field_subtitle_error"/>
        </PopupWithForm>
    )
}