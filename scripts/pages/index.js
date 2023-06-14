//попапы
/*import Card from "../scripts/Card.js";
import  FormValidator  from "./FormValidator.js";
import { initialCards } from './cards.js';
import {openPopUp, popUpCard, closePopUpEscape, closePopUp} from '../utils/utils.js';




const popUpEdit = document.querySelector("#popup-edit");
const popUpNewCard = document.querySelector("#popup-new-card");


const formCreateNewCard = popUpNewCard.querySelector(configFormSelector.formSelector);
const formEdit = popUpEdit.querySelector(configFormSelector.formSelector);
const addCardFormValidator = new FormValidator(configFormSelector, formCreateNewCard);
const editFormValidator = new FormValidator(configFormSelector, formEdit);
addCardFormValidator.enableValidation();
editFormValidator.enableValidation();





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

//элементы карточек
const cardElementName = popUpNewCard.querySelector("#name-img")
const cardElementImg = popUpNewCard.querySelector("#href")


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

function createCard(data){
  return new Card(data, '#card');
}

//функция добавления новой карточки 
function createNewCard(evt) {
  evt.preventDefault();
  const card = createCard({'name': cardElementName.value, 'link': cardElementImg.value})
  groupCards.prepend(card.generateCard());
  closePopUp(popUpNewCard)
  inputNewCardName.value = "";
  inputNewCardHref.value = "";
  addCardFormValidator.disableSubmitButton();
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
  const card = createCard(item);
  groupCards.append(card.generateCard());
}

*/

import {initialCards, configFormSelector, inputInfo, inputName, title, subtitle, buttonOpenFormEdit, buttonAddNewCard, formEdit, formCreateNewCard, inputNewCardHref, inputNewCardName} from '../utils/constants.js'
import Card from '../components/Card.js'
import PopupwithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';


const popupWihtImage = new PopupwithImage('#popup-card');
const cardGroup = new Section({items: initialCards, renderer: createCard}, '.elements__group' );
const userInfo = new UserInfo({name: title.textContent, info: subtitle.textContent});
const editFormValidator = new FormValidator(configFormSelector, formEdit);
const popupWithFormEdit = new PopupWithForm('#popup-edit', savePopUpEdit);
const addCardFormValidator = new FormValidator(configFormSelector, formCreateNewCard);

const popupWithNewCard = new PopupWithForm('#popup-new-card', (evt)=>{
  createNewCard(evt);
});


popupWihtImage.setEventListeners();
cardGroup.renderItems()

function createCard(data){
  const card = new Card(data, '#card', (evt)=>{
    popupWihtImage.open(evt);
  });
  cardGroup.addItem(card.generateCard());
}



//функция сохранения редактирования 
function savePopUpEdit(evt) {
  evt.preventDefault()
  userInfo.setUserInfo({ newName: inputName.value, newInfo: inputInfo.value })
  popupWithFormEdit.close();
}




editFormValidator.enableValidation();


popupWithFormEdit.setEventListeners();


buttonOpenFormEdit.addEventListener('click', ()=>{
  popupWithFormEdit.open();
  inputInfo.value = userInfo.getUserInfo().info;
  inputName.value = userInfo.getUserInfo().name;
})


addCardFormValidator.enableValidation();

function createNewCard(evt) {
  evt.preventDefault();
  const card = new Card({name: inputNewCardName.value, link: inputNewCardHref.value}, '#card', (evt)=>{
    popupWihtImage.open(evt);
  });
  cardGroup.addItem(card.generateCard());
  popupWithNewCard.close();
  inputNewCardName.value = "";
  inputNewCardHref.value = "";
  addCardFormValidator.disableSubmitButton();
}


popupWithNewCard.setEventListeners();

buttonAddNewCard.addEventListener('click', ()=>{
  popupWithNewCard.open();
});
















