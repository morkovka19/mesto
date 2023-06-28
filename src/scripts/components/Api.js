export default class Api{
    constructor(options){
        this._cahort = options.cahort;
        this._id = options.id;
    }

    getInitialsCard(){
        return fetch(`https://mesto.nomoreparties.co/v1/${this._cahort}/cards`, {
            headers: {
                authorization: this._id,
            }
        })
    }

    getInfoAboutAuthor(){
        return fetch(`https://mesto.nomoreparties.co/v1/${this._cahort}/users/me`, {
            headers: {
                authorization: this._id,
            }
        })
    }

    editProfile({nameNew, aboutNew}){
        return fetch(`https://mesto.nomoreparties.co/v1/${this._cahort}/users/me`, {
            headers: {
                authorization: this._id,
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify({
                name: nameNew,
                about: aboutNew
            })
            
        })
    }

    addNewCard({nameNew, linkNew}){
        return fetch(`https://mesto.nomoreparties.co/v1/${this._cahort}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._id,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameNew,
                link: linkNew
            })
        })
    }

    addLike(id){
        return fetch(`https://mesto.nomoreparties.co/v1/${this._cahort}/cards/${id}/likes`, {
            method: 'PUT',
            headers: {
                authorization: this._id,
            }
        })
    }

    deleteLike(id){
        return fetch(`https://mesto.nomoreparties.co/v1/${this._cahort}/cards/${id}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: this._id,
            }
        })
    }

    deleteCard(id){
        return fetch(`https://mesto.nomoreparties.co/v1/${this._cahort}/cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._id,
            }
        })
    }

    editAvatar(avatar){
        console.log(avatar);
        return fetch(`https://mesto.nomoreparties.co/v1/${this._cahort}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._id,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: avatar
            })
        })
    }
}