import PopupWithForm from "./PopupWithForm";

export default class PopupWithButton extends PopupWithForm{
    constructor(popupSelector, submitCallback){
        super(popupSelector, submitCallback);
    }

    
    setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener('submit', evt =>{
            evt.preventDefault();
            this._submitCallback(this._id);
            this.close();
        });
    }

    open(id){
        super.open();
        this._id = id;
    }
}