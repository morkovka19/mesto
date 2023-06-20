import './index.css';

import {initialCards, configFormSelector, inputInfo, inputName, buttonOpenFormEdit, buttonAddNewCard, formEdit, formCreateNewCard, inputNewCardHref, inputNewCardName} from '../scripts/utils/constants.js'
import Card from '../scripts/components/Card.js'
import PopupwithImage from '../scripts/components/PopupWithImage.js'
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import Section from '../scripts/components/Section.js';
import FormValidator from '../scripts/components/FormValidator.js';
import UserInfo from '../scripts/components/UserInfo.js';

//попап с картинкой
const popupWihtImage = new PopupwithImage('#popup-card');

//поппапы с формами 
const popupWithFormEdit = new PopupWithForm('#popup-edit', savePopUpEdit);
const popupWithNewCard = new PopupWithForm('#popup-new-card', createNewCard);

//секция с карточками 
const cardGroup = new Section({items: initialCards, renderer: createCard}, '.elements__group' );
cardGroup.renderItems();

//объект с информацией об авторе
const userInfo = new UserInfo({nameSelector: '.profile__title', infoSelector: '.profile__subtitle'});

//объекты для валидации форм 
const editFormValidator = new FormValidator(configFormSelector, formEdit);
const addCardFormValidator = new FormValidator(configFormSelector, formCreateNewCard);

//слушатели событий на поппапы 
popupWithFormEdit.setEventListeners();
popupWithNewCard.setEventListeners();
popupWihtImage.setEventListeners();

//настройка валидации на формах
editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

//создание крточки 
function createCard(data){
  const card = new Card(data, '#card', (name, src) => {
    popupWihtImage.open(name, src);
  });
  cardGroup.addItem(card.generateCard());
}

//сохранение редактирования информации 
function savePopUpEdit({name, info}) {
  userInfo.setUserInfo({ name, info });
}

//создание новой карточки после добавления 
function createNewCard(inputValues) {
  createCard({ name: inputValues['name-img'], link: inputValues['info-img'] });
}

//сдушатели событий на кнопки для открытия попапов с формами 
buttonAddNewCard.addEventListener('click', ()=>{
  addCardFormValidator.disableSubmitButton();
  popupWithNewCard.open();
});

buttonOpenFormEdit.addEventListener('click', ()=>{
  popupWithFormEdit.open();
  const userInfoFromPage = userInfo.getUserInfo();
  inputInfo.value = userInfoFromPage.info;
  inputName.value = userInfoFromPage.name;
})
