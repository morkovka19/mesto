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
    inputName =  title.textContent;
    inputInfo =  subtitle.textContent;
    popUp.classList.add('popup_opened');
}

function closePopUp(){
    popUp.classList.remove('popup_opened');
}

function savePopUp(evt){
    evt.preventDefault();
    let inputNameBuff = popUp.querySelector('.popup__input_name_name');
    let inputInfoBuff = popUp.querySelector('.popup__input_name_info');
    title.textContent = inputNameBuff.value;
    subtitle.textContent = inputInfoBuff.value;
    closePopUp();
}

editButton.addEventListener('click', openPopUp);
closeButton.addEventListener('click', closePopUp);
formPopUp.addEventListener('submit', savePopUp);





