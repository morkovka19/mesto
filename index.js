let editButton = document.querySelector('.profile__icon');
let popUp = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__icon');
let saveButton = document.querySelector('.popup__submit');
let title = document.querySelector('.profile__title');
let subtitle = document.querySelector('.profile__subtitle');

function openPopUp(){
    popUp.classList.add('popup_opened');
}

function closePopUp(){
    popUp.classList.remove('popup_opened');
}

function savePopUp(evt){
    evt.preventDefault();
    let inputName = document.querySelector('.popup__input_name_name');
    let inputInfo = document.querySelector('.popup__input_name_info');
    title.textContent = inputName.value;
    subtitle.textContent = inputInfo.value;
    closePopUp();
}

editButton.addEventListener('click', openPopUp);
closeButton.addEventListener('click', closePopUp);
saveButton.addEventListener('click', savePopUp);





