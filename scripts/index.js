let content = document.querySelector('.main');
let profile = content.querySelector('.profile');
let popUp = document.querySelector('.popup');
let editButton = profile.querySelector('.profile__icon');
let title = profile.querySelector('.profile__title');
let subtitle = profile.querySelector('.profile__subtitle');
let closeButton = popUp.querySelector('.popup__icon');
let inputName = popUp.querySelector('.popup__input_name_name');
let inputInfo = popUp.querySelector('.popup__input_name_info');
let formPopUp = popUp.querySelector('.popup__form');

function openPopUp(){
    inputName.value =  title.textContent;
    inputInfo.value =  subtitle.textContent;
    popUp.classList.add('popup_opened');
}

function closePopUp(){
    popUp.classList.remove('popup_opened');
}

function savePopUp(evt){
    evt.preventDefault();
    title.textContent = inputName.value;
    subtitle.textContent = inputInfo.value;
    closePopUp();
}

editButton.addEventListener('click', openPopUp);
closeButton.addEventListener('click', closePopUp);
formPopUp.addEventListener('submit', savePopUp);





