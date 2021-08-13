
const settings = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_inactive',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'popup__error'
}

const apiSettings = {
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-25",
    headers: {
        authorization: 'e607a51a-eb78-4922-8513-12160ebc53dd',
        'Content-Type': 'application/json'
    }
}


const buttonOpenPopupEditProfile = document.querySelector('.profile-info__button');
const buttonOpenPopupAddCard = document.querySelector('.profile__button');
const buttonOpenPopupAvatar = document.querySelector('.profile__avatar-edit-button')



export {
    settings,
    apiSettings,
    buttonOpenPopupAddCard,
    buttonOpenPopupEditProfile,
    buttonOpenPopupAvatar,
};
