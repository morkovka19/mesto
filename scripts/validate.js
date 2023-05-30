export function disableSubmitButton(button, config){
    button.disabled = 'disabled';
    button.classList.add(config.inactiveButtonClass);
}