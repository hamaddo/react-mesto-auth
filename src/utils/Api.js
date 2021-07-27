import {apiSettings} from "./utils";

class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
        this._cardsUrl = `${this._baseUrl}/cards`;
        this._userUrl = `${this._baseUrl}/users/me`;
        this._avaUrl = `${this._userUrl}/avatar`
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка ${res.status}`);
        }
    }

    handleLikeClick({_id}, method) {
        return fetch(`${this._cardsUrl}/likes/${_id}`, {
            method: method,
            headers: this._headers,
        }).then(this._handleResponse);
    }

    getUserInfo() {
        return fetch(this._userUrl, {
            headers: this._headers,
        }).then(this._handleResponse);
    }

    patchUserInfo({name, about}) {
        return fetch(this._userUrl, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: about
            })
        }).then(this._handleResponse);
    }

    patchUserAvatar({avatar}) {
        return fetch(this._avaUrl, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({avatar: avatar})
        }).then(this._handleResponse);
    }

    addCard({name, link}) {
        return fetch(this._cardsUrl, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link
            }),
        }).then(this._handleResponse);
    }

    deleteCard({_id}) {
        return fetch(`${this._cardsUrl}/${_id}`, {
            method: "DELETE",
            headers: this._headers,
        }).then(this._handleResponse);
    }


    getInitialCards() {
        return fetch(this._cardsUrl, {
            headers: this._headers,
        }).then(this._handleResponse);
    }

}

const api = new Api(apiSettings);

export {api};