import PopupWithForm from "./PopupWithForm";

export default function PopupEdit(props) {
    return (
        <PopupWithForm name='edit' title='Редактировать профиль' buttonText='Сохранить' isOpen={props.isOpen}
                       onClose={props.onClose}>
            <input type="text" minLength="2" maxLength="40" required
                   id="edit-form__input_field_title"
                   name="name"
                   placeholder="Имя"
                   className="form__input form__input_type_title"/>
            <span className="popup__error"
                  id="edit-form__input_field_title_error"/>
            <input type="text" minLength="2" maxLength="200" required
                   id="edit-form__input_field_subtitle"
                   name="about"
                   placeholder="Вид деятельности"
                   className="form__input form__input_type_subtitle"/>
            <span className="popup__error"
                  id="edit-form__input_field_subtitle_error"/>
        </PopupWithForm>
    )
}