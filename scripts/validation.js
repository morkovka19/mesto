//отображение ошибки
function showError(inputElement, errorElement, config){
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
}

//скрsтие ошибки
function hideError(inputElement, errorElement, config){
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.textContent = '';
}

//кнопка не активна 
function disbaledButton(buttonElement, config){
    buttonElement.disabled = 'disabled';
    buttonElement.classList.add(config.inactiveButtonClass)
}

//кнопка активна 
function enableButton(buttonElement, config){
    buttonElement.disabled = false;
    buttonElement.classList.remove(config.inactiveButtonClass);
}

//установление состояния кнопки 
function toggleButtonState(buttonElement, isActive, config){
    if (!isActive){
        disbaledButton(buttonElement, config);
    }else{
        enableButton(buttonElement, config);
    }
};

//проверка валидности полей ввода 
function checkInputValidity(inputElement, formElement, config){
    inputElement.setCustomValidity="";
    const isInputValid = inputElement.validity.valid;
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    if (!errorElement) return;

    if (!isInputValid){
        showError(inputElement, errorElement, config);
    }else{
        hideError(inputElement, errorElement, config);
    }
}


//установление слушателей события на форму и поля ввода 
function setEventListener(formElement, config){
    const inputList = formElement.querySelectorAll(config.inputSelector);
    const submitButtonElement = formElement.querySelector(config.submitSelector);
    

    toggleButtonState(submitButtonElement, formElement.checkValidity(), config);

    formElement.addEventListener('submit', (evt)=>{
        evt.preventDefault();
    });
    
    [...inputList].forEach((inputItem) =>{
        inputItem.addEventListener('input', ()=>{
            checkInputValidity(inputItem, formElement, config);
            toggleButtonState(submitButtonElement, formElement.checkValidity(), config);
        })
    })

    
};

//перебираем все формы 
function enableValidation(config){
    const forms = document.querySelectorAll(config.formSelector);
    [...forms].forEach((formItem) =>{
        setEventListener(formItem, config);
    })
};


//конфигурация всех необходимых параметров 
const configFormSelector = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_inactive',
    inputErrorClass: 'popup__input_error',
}

enableValidation(configFormSelector)