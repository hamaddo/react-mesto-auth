export default function ImagePopup() {
    return (
        <div className="popup popup_type_view">
            <div className="popup__container">
                <button aria-label="Закрыть" type="button" className="popup__button button"/>
                <figure className="popup-view" id="popup-view">
                    <img className="popup-view__image" id="popup-view__image"
                         src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
                         alt=" Место"/>
                    <figcaption id="popup-view__title" className="popup-view__title"/>
                </figure>
            </div>
        </div>
    )
}