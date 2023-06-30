import Popup from "./Popup.js";

export default class PopupWithButton extends Popup{
    constructor(popupSelector, submitCallback){
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._submitCallback = submitCallback;
    }

    
    setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener('submit', evt =>{
            evt.preventDefault();
            this._submitCallback(this._card);
        });
    }

    open(card){
        super.open();
        this._card = card;
    }
}