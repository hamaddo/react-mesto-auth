import React from "react";
import success from '../images/success.svg'
import fail from '../images/Unionfail.svg'

export default function InfoTooltip({tooltipStatus, isOpen, onClose}) {

    const handleText = (
        `${tooltipStatus ? 'Что-то пошло не так! Попробуйте ещё раз.' : 'Вы успешно зарегистрировались!'}`
    );

    const handleImage = (`${tooltipStatus ? fail : success}`);

    return (
        <div className={`popup ${isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <button className="popup__button button" type="button" onClick={onClose}/>
                <form className="form" name="infoTooltip-form" id='infoTooltip-form'>
                    <fieldset className="popup__fieldset">
                        <img className="infoTooltip__image" src={handleImage} alt=""/>
                        <p className="infoTooltip__title">{handleText}</p>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}