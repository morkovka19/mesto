export default class Popup{
    constructor(popupSelector){
        this._popupTemplate = document.querySelector(popupSelector); 
    }

    _handleEscClose(evt){
        if (evt.code =='Escape'){
            this.close();
        }
    }


    open(){
        document.addEventListener('keydown', this._handleEscClose.bind(this));
        this._popupTemplate.classList.add('popup_opened');
    }

    close(){
        this._popupTemplate.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose.bind(this));
    }

  
    setEventListeners(buttonElement){
        buttonElement.addEventListener('click', this.close.bind(this));
        this._popupTemplate.addEventListener('click', (evt) =>{
            if (evt.currentTarget === evt.target) {
                this.close();
            }
        })
    }
}