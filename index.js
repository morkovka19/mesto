let editButton = document.querySelector('.profile__icon');
let popUp = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__icon');

function openPopUp(){
    popUp.classList.add('popup_opened');
}

function closePopUp(){
    popUp.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopUp);
closeButton.addEventListener('click', closePopUp);