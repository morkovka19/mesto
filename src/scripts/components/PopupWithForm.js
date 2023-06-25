import Popup from "../components/Popup.js";

export default class PopupWithForm extends Popup{
    constructor(popupSelector, submitCallback){
        super(popupSelector);
        this._submitCallback = submitCallback;
        this._inputs =  this._popup.querySelectorAll('.popup__input');
        this._form = this._popup.querySelector('.popup__form');
    }

    _getInputValues(){
        const inputValues = {}; 
        this._inputs.forEach(input =>{
            inputValues[input.name] = input.value;
       })
       return inputValues;
    }

    setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener('submit', evt =>{
            evt.preventDefault();
            this._submitCallback(this._getInputValues());
            this.close();
        });
    }

    close(){
        super.close();
        this._form.reset();
    }
}