import Popup from "../components/Popup.js";

export default class PopupwithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);
    }

    open(evt){
        evt.preventDefault();
        this._img =  this._popupTemplate.querySelector('.popup__img');
        this._figcaption = this._popupTemplate.querySelector('.popup__figcaption');
        this._img.src =  evt.target.src;
        this._img.alt = evt.target.alt;
        this._figcaption.textContent = evt.target.alt;
        super.open();
    }

    close(){
        super.close();
        this._img.src = '';
        this._img.alt = '';
        this._figcaption.textContent = '';
    }
}