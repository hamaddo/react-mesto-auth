import PopupWithForm from "./PopupWithForm";

export default function PopupEditAvatar(props) {
    return (
        <PopupWithForm name='edit-avatar' title='Обновить Аватар' buttonText='Сохранить'>
            <input type="url" required
                   name="link"
                   id="edit-avatar--form__input_field_subtitle"
                   className="form__input form__input_type_subtitle"
                   placeholder="Ссылка на картинку"/>
            <span className="popup__error"
                  id="edit-avatar--form__input_field_subtitle_error"/>
        </PopupWithForm>
    )
}