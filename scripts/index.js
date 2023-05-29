//попапы
import Card from "../scripts/Card.js";
import { initialCards } from './cards.js';
import  FormValidator  from "./FormValidator.js";

const popUpEdit = document.querySelector("#popup-edit");
const popUpNewCard = document.querySelector("#popup-new-card");
export const popUpCard = document.querySelector("#popup-card")

//Кнопки закрытия
const buttonClosePopupProfile = popUpEdit.querySelector(".popup__btn")
const buttonClosePopupAddCard = popUpNewCard.querySelector(".popup__btn")
const buttonClosePopupImage = popUpCard.querySelector(".popup__btn")
const buttonSaveNewCard = popUpNewCard.querySelector('.popup__submit');

//кнопки на основной странице 
const editButton = document.querySelector(".profile__icon")
const buttonAddNewCard = document.querySelector(".profile__btn")

//поля ввода 
const inputName = document.querySelector(".popup__input_name_name")
const inputInfo = document.querySelector(".popup__input_name_info")
const inputNewCardName = popUpNewCard.querySelector("#name-img")
const inputNewCardHref = popUpNewCard.querySelector("#href")

//элементы страницы 
const title = document.querySelector(".profile__title")
const subtitle = document.querySelector(".profile__subtitle")
const groupCards = document.querySelector(".elements__group")
//const cardTemplate = document.querySelector("#card").content


//формы 
const formCreateNewCard = popUpNewCard.querySelector(".popup__form")
const formEdit = popUpEdit.querySelector(".popup__form")

//элементы карточек
const cardElementName = popUpNewCard.querySelector("#name-img")
const cardElementImg = popUpNewCard.querySelector("#href")

const configFormSelector = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_error',
}

//функция открытия попапа 
export function openPopUp(element) {
  document.addEventListener("keydown", closePopUpEscape)
  element.classList.add("popup_opened")
}

//функция скрытия попапа 
function closePopUp(element) {
  element.classList.remove("popup_opened")
  document.removeEventListener("keydown", closePopUpEscape)
}

//функция закрытия попапа по esc
function closePopUpEscape(evt) {
  if (evt.code == "Escape") {
    const element = document.querySelector(".popup_opened")
    closePopUp(element)
  }
}

//установка слушателя событий на попап ркдактирования 
popUpEdit.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopUp(popUpEdit);
  }
})

//установка слушателя события на попап добавления новой карточки 
popUpNewCard.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopUp(popUpNewCard);
  }
})

//установка слушателя события на попап новой карточки 
popUpCard.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopUp(popUpCard)
  }
})

//установка слушателя событий на кнопку закрытия попапа редактирования 
buttonClosePopupProfile.addEventListener("click", () => {
  closePopUp(popUpEdit)
})

//установка слушателя событий на кнопку закрытия попапа для добавления новой карточки 
buttonClosePopupAddCard.addEventListener("click", () => {
  closePopUp(popUpNewCard)
})

//установка слушателя событий на кнопку закрытия попапа карточки 
buttonClosePopupImage.addEventListener("click", () => {
  closePopUp(popUpCard)
})

//функция сохранения редактирования 
function savePopUpEdit(evt) {
  evt.preventDefault()
  title.textContent = inputName.value
  subtitle.textContent = inputInfo.value
  closePopUp(popUpEdit)
}

function  disbaledButton(button){
  button.disabled = 'disabled';
  button.classList.add(configFormSelector.inactiveButtonClass);
}


//функция добавления новой карточки 
function createNewCard(evt) {
  evt.preventDefault();
  const card = new Card({'name': cardElementName.value, 'link': cardElementImg.value}, '#card')
  groupCards.prepend(card.generateCard());
  closePopUp(popUpNewCard)
  inputNewCardName.value = "";
  inputNewCardHref.value = "";
  disbaledButton(buttonSaveNewCard);
}

//установка слушателя событий на кнопку редактирования 
editButton.addEventListener("click", function () {
  openPopUp(popUpEdit)
})

//установка слушателя событий на форму сохранения редактирования 
formEdit.addEventListener("submit", savePopUpEdit)
buttonAddNewCard.addEventListener("click", function () {
  openPopUp(popUpNewCard)
})

//установкка слушателя событий на форму создания новой карточки 
formCreateNewCard.addEventListener("submit", createNewCard)

for (let item of initialCards) {
  const card = new Card(item, '#card');
  groupCards.append(card.generateCard());
}

const forms = document.querySelectorAll(configFormSelector.formSelector);
[...forms].forEach((formItem)=>{
  const form = new FormValidator(configFormSelector, formItem);
  form.enableValidation();
});

