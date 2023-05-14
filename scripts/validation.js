function toggleButtonsubmit(buttonElement){
    buttonElement.disable = false;
    buttonElement.classList.remove()
}

function checkInputValidity(inputElement, formElement){
    inputElement.setCustomValidity("");

    const isInputValid = inputElement.validity.valid;
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    if (!errorElement) return;

    if (!isInputValid){
        showError(inputElement, errorElement);
    } else{
        hideError(inputElement, errorElement);
    }
};

function setEventListeners(formElement){
    const inputList = formElement.querySelectorAll('.popup__input');
    const submitButtomElement = formElement.querySelector('.popup__submit');
    toggleButtonState(submitButtonElement, formElement.checkValidity());

    formElement.addEventListener('submit', (evt)=>{
        evt.preventDefault();
    });

    [...inputList].forEach((inputItem)=>{
        inputElement.addEventListener('input', ()=>{
            checkInputValidity(inputItem, formElement);
            toggleButtonState(submitButtonElement, formElement.checkValidity());
        })
    })

    
};

function enaableValidation(){
    const forms = document.querySelectorAll('.popup__form');
    [...forms].forEach((formItem)=>{
        setEventListeners(formItem);
    })
}