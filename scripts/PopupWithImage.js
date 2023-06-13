import Popup from "../scripts/Popup.js";

export default class PopupwithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);
    }

    open(card){
        super.open();
        this._img =  this._popupTemplate.querySelector('.popup__img');
        this._figcaption = this._popupTemplate.querySelector(".popup__figcaption");
        this._img.src =  card.getSrc();
        this._img.alt = card.getName();
        this._figcaption.textContent = card.getName();
    }
}