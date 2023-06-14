export const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
  ]

export const configFormSelector = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_error',
};

export const title =  document.querySelector('.profile__title');
export const subtitle = document.querySelector('.profile__subtitle');
export const inputName = document.querySelector(".popup__input_name_name");
export const inputInfo = document.querySelector(".popup__input_name_info");
export const buttonOpenFormEdit = document.querySelector('.profile__btn-redaction');
export const buttonAddNewCard = document.querySelector(".profile__btn");
export const formEdit = document.querySelector('#popup-edit').querySelector(configFormSelector.formSelector);
export const formCreateNewCard = document.querySelector('#popup-new-card').querySelector(configFormSelector.formSelector);
export const inputNewCardName = document.querySelector('#popup-new-card').querySelector("#name-img");
export const inputNewCardHref = document.querySelector('#popup-new-card').querySelector("#href")