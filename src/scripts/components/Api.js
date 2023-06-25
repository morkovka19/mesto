export default class Api{
    constructor(options){
        this.cahort = options.cahort;
        this.id = options.id;
    }

    getInitialsCard(){
        return fetch(`https://mesto.nomoreparties.co/v1/${this.cahort}/cards`, {
            headers: {
                authorization: this.id,
            }
        })
    }

    getInfoAboutAuthor(){
        return fetch(`https://mesto.nomoreparties.co/v1/${this.cahort}/users/me`, {
            headers: {
                authorization: this.id,
            }
        })
    }

    editProfile({nameNew, aboutNew}){
        return fetch(`https://mesto.nomoreparties.co/v1/${this.cahort}/users/me`, {
            headers: {
                authorization: this.id,
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify({
                name: nameNew,
                about: aboutNew
            })
            
        })
    }
}