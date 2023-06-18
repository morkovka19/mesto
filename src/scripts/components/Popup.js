export default class Popup{
    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector); 
        this._handleEscClose = this._handleEscClose.bind(this)
    }

    _handleEscClose(evt){
        if (evt.code =='Escape'){
            this.close();
        }
    }

    open(){
        document.addEventListener('keydown', this._handleEscClose);
        this._popup.classList.add('popup_opened');
    }

    close(){
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose.bind(this));
    }

    setEventListeners(){
        this._popup.querySelector('.popup__btn').addEventListener('click', this.close.bind(this));
        this._popup.addEventListener('click', (evt) =>{
            if (evt.currentTarget === evt.target) {
                this.close();
            }
        })
    }
}