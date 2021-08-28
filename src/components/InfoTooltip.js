import React from "react";
import success from '../images/success.svg'
import fail from '../images/Unionfail.svg'

export default function InfoTooltip(props) {

    const handleText = (
        `${props.tooltipStatus ? 'Что-то пошло не так! Попробуйте ещё раз.' : 'Вы успешно зарегистрировались!'}`
    );

    const handleImage = (`${props.tooltipStatus ? fail : success}`);

    return (
        <div className={`popup ${props.isOpen && 'popup_opened'}`}>
            <div className="infoTooltip">
                <button className="popup__button button" type="button" onClick={props.onClose}/>
                <img className="infoTooltip__image" src={handleImage} alt=""/>
                <p className="infoTooltip__title">{handleText}</p>
            </div>
        </div>
    )
}