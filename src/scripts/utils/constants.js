
export const configFormSelector = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_error',
};


export const inputName = document.querySelector(".popup__input_name_name");
export const inputInfo = document.querySelector(".popup__input_name_info");
export const buttonOpenFormEdit = document.querySelector('.profile__btn-redaction');
export const buttonAddNewCard = document.querySelector(".profile__btn");
export const formEdit = document.querySelector('#popup-edit').querySelector(configFormSelector.formSelector);
export const formCreateNewCard = document.querySelector('#popup-new-card').querySelector(configFormSelector.formSelector);
export const inputNewCardName = document.querySelector('#popup-new-card').querySelector("#name-img");
export const inputNewCardHref = document.querySelector('#popup-new-card').querySelector("#href");
export const nameAuthor = document.querySelector('.profile__title');
export const infoAuthor = document.querySelector('.profile__subtitle');
export const avatarAuthor = document.querySelector('.profile__avatar');
export const formDelete = document.querySelector('#popup-delete-card').querySelector(configFormSelector.formSelector);
export const cards = [];
export const avatarAuthorIconEdid = document.querySelector('.profile__block-pen');
export const formEditAvatar = document.querySelector('#popup-edit-avatar').querySelector(configFormSelector.formSelector);