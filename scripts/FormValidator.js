export default class FormValidator{
    constructor(config, formElement){
        this._config = config;
        this._formElement = formElement;
    }

    _showError(inputElement, errorElement){
        inputElement.classList.add(this._config.inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
    }
    
    _hideError(inputElement, errorElement){
        inputElement.classList.remove(this._config.inputErrorClass);
        errorElement.textContent = '';
    }

    _enableButton(){
        this._submitButtonElement.disabled = false;
        this._submitButtonElement.classList.remove(this._config.inactiveButtonClass);
    }

    _disbaledButton(){
        this._submitButtonElement.disabled = 'disabled';
        this._submitButtonElement.classList.add(this._config.inactiveButtonClass);
    }

    _checkInputValidity(inputElement){
        inputElement.setCustomValidity="";
        const isInputValid = inputElement.validity.valid;
        const errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);
        if (!errorElement) return;
    
        if (!isInputValid){
            this._showError(inputElement, errorElement);
        }else{
            this._hideError(inputElement, errorElement);
        }
    }

    _toggleButtonState(){
        if (!this._formElement.checkValidity()){
            this._disbaledButton();
        } else{
            this._enableButton();
        }
    }

    _setEventListeners(){
        this._inputList = this._formElement.querySelectorAll(this._config.inputSelector);
        this._submitButtonElement = this._formElement.querySelector(this._config.submitSelector);
        

        this._toggleButtonState();

        this._formElement.addEventListener('submit', (evt)=>{
            evt.preventDefault();
        });
        
        [...this._inputList].forEach((inputItem) =>{
            inputItem.addEventListener('input', ()=>{
                this._checkInputValidity(inputItem);
                this._toggleButtonState();
            })
        })
    }

    enableValidation(){
        this._setEventListeners();
    }
}