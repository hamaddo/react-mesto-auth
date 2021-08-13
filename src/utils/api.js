import {apiSettings} from "./utils";

class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
        this._cardsUrl = `${this._baseUrl}/cards`;
        this._userUrl = `${this._baseUrl}/users/me`;
        this._avaUrl = `${this._userUrl}/avatar`
    }

    setLike = (id) => {
        return fetch(`${this._baseUrl}/cards/likes/${id}`, {
            method: 'PUT',
            headers: this._headers
        })
            .then(this._handleResponse)
    }

    removeLike = (id) => {
        return fetch(`${this._baseUrl}/cards/likes/${id}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._handleResponse)
    }


    changeLikeCardStatus = (id, isLiked) => {
        return isLiked ? this.removeLike(id) : this.setLike(id);
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка ${res.status}`);
        }
    }

    getUserInfo() {
        return fetch(this._userUrl, {
            headers: this._headers,
        }).then(this._handleResponse);
    }

    patchUserInfo(name, about) {
        return fetch(this._userUrl, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: about
            })
        }).then(this._handleResponse);
    }

    patchUserAvatar = (avatar) => {
        return fetch(this._avaUrl, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({avatar: avatar})
        }).then(this._handleResponse);
    }

    addCard(name, link) {
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

export default api;