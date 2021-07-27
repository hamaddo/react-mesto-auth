
const settings = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_inactive',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'popup__error'
}

const profileSettings = {
    name: '.profile-info__title',
    about: '.profile-info__subtitle',
    avatar: '.profile__avatar'
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

const elementTemplate = document.querySelector('#element-template');
const elementsList = document.querySelector('.elements__list');


const checkIfMine = (myId, {_id}) => {
    return _id === myId;
}

/*
const renderLoading = (popup, flag) => {
    let newMsg;

    if (flag) {
        newMsg = popup.submitButton.textContent.substring(0, popup.submitButton.textContent.length - 3);
        newMsg = newMsg + 'ение...';
    } else {
        newMsg = popup.submitButton.textContent.substring(0, popup.submitButton.textContent.length - 7);
        newMsg = newMsg + 'ить';
    }

    popup.submitButton.textContent = newMsg;
}
*/

/*
const checkIfLiked = ({likes}, {id}) => {
    let isLiked = false;
    likes.forEach((user) => {
        if (user._id == id) {
            isLiked = true;
        }
    });
    return isLiked;
};
*/

export {
    settings,
    profileSettings,
    apiSettings,
    buttonOpenPopupAddCard,
    buttonOpenPopupEditProfile,
    buttonOpenPopupAvatar,
    elementTemplate,
    elementsList,
    checkIfMine,

};
