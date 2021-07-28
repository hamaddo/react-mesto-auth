export default function ImagePopup({isOpen, onClose, link, name}) {
    return (
        <div className={`popup popup_type_view ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button aria-label="Закрыть" type="button" onClick={onClose} className="popup__button button"/>
                <figure className="popup-view" id="popup-view">
                    <img className="popup-view__image" id="popup-view__image"
                         src={link}
                         alt={name}/>
                    <figcaption id="popup-view__title" className="popup-view__title">{name}</figcaption>
                </figure>
            </div>
        </div>
    )
}