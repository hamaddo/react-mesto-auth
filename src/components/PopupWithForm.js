export default function PopupWithForm(props) {

    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button aria-label="Закрыть" onClick={props.onClose} type="button" className="popup__button button"/>
                <form name={`${props.name}-form`} id={`${props.name}-form`} className="form">
                    <h2 className="form__title">{props.title}</h2>
                    <fieldset className="popup__fieldset">
                        {props.children}
                        <button type="submit" className="form__button button">{props.buttonText}</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}