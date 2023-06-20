import Popup from "../components/Popup.js";

export default class PopupwithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        this._img =  this._popup.querySelector('.popup__img');
        this._figcaption = this._popup.querySelector('.popup__figcaption');
    }

    open(name, src){
        this._img.src =  src;
        this._img.alt = name;
        this._figcaption.textContent = name;
        super.open();
    }

    close(){
        super.close();
        this._img.src = '';
        this._img.alt = '';
        this._figcaption.textContent = '';
    }
}