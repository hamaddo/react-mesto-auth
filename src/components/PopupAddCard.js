import PopupWithForm from "./PopupWithForm";

export default function PopupAddCard(props) {
    return (
        <PopupWithForm name='add' title='Новое место' buttonText='Сохранить' isOpen={props.isOpen}
                       onClose={props.onClose}>
            <input type="text" minLength="2" maxLength="30" required
                   id="add-form__input_field_title"
                   name="name"
                   placeholder="Название"
                   className="form__input form__input_type_title"/>
            <span className="popup__error"
                  id="add-form__input_field_title_error"/>
            <input type="url" required
                   id="add-form__input_field_subtitle"
                   name="link"
                   placeholder="Ссылка на картинку"
                   className="form__input form__input_type_subtitle"/>
            <span className="popup__error"
                  id="add-form__input_field_subtitle_error"/>
        </PopupWithForm>
    )
}