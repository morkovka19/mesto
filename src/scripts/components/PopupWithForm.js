import Popup from "../components/Popup.js";

export default class PopupWithForm extends Popup{
    constructor(popupSelector, submitCallback){
        super(popupSelector);
        this._submitCallback = submitCallback;
    }

    _getInputsValue(){
       this._inputs =  this._popupTemplate.querySelectorAll('.popup__input');
       this._inputs.forEach(input =>{
        this._inputValues[input.name] = input.value;
       })
       return this._inputValues;
    }

    setEventListeners(){
        super.setEventListeners();
        this._popupTemplate.querySelector('.popup__form').addEventListener('submit', this._submitCallback);
    }

    close(){
        super.close();
        this._popupTemplate.querySelector('.popup__form').reset();
    }
}