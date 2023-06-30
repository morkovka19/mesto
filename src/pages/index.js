import './index.css';

import {configFormSelector, avatarAuthorIconEdid, formEditAvatar, formDelete, inputInfo, inputName, buttonOpenFormEdit, buttonAddNewCard, formEdit, formCreateNewCard} from '../scripts/utils/constants.js'
import Card from '../scripts/components/Card.js'
import PopupWithImage from '../scripts/components/PopupWithImage.js'
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import Section from '../scripts/components/Section.js';
import FormValidator from '../scripts/components/FormValidator.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Api from '../scripts/components/Api.js';
import PopupWithButton from '../scripts/components/PopupWithButton';
import { info } from 'autoprefixer';


//создаем объект для создания api
const api = new Api({cahort: 'cohort-70', id: '14bb670c-f56d-4056-9e87-e524535efbde'});

//попап с картинкой
const popupWihtImage = new PopupWithImage('#popup-card');

//поппапы с формами 
const popupWithFormEdit = new PopupWithForm('#popup-edit', savePopUpEdit);
const popupWithNewCard = new PopupWithForm('#popup-new-card', createNewCard);
const popupWithDeleteCard = new PopupWithButton('#popup-delete-card', deleteCard);
const popupWithEditAvatar = new PopupWithForm('#popup-edit-avatar', editAvatar);


//контейнер с карточками 
const cardGroup = new Section({items: {}, renderer: createCard}, '.elements__group');


//объект с информацией об авторе
const userInfo = new UserInfo({nameSelector: '.profile__title', infoSelector: '.profile__subtitle', avatarSelector: '.profile__avatar'});

//объекты для валидации форм 
const editFormValidator = new FormValidator(configFormSelector, formEdit);
const addCardFormValidator = new FormValidator(configFormSelector, formCreateNewCard);
const deleteCardFormValidator = new FormValidator(configFormSelector, formDelete);
const editAvatarFormValodator = new FormValidator(configFormSelector, formEditAvatar)


//слушатели событий на поппапы 
popupWithFormEdit.setEventListeners();
popupWithNewCard.setEventListeners();
popupWihtImage.setEventListeners();
popupWithDeleteCard.setEventListeners();
popupWithEditAvatar.setEventListeners();

//настройка валидации на формах
editFormValidator.enableValidation();
addCardFormValidator.enableValidation();
deleteCardFormValidator.enableValidation();
editAvatarFormValodator.enableValidation();


//создание крточки 
function createCard(data){
  const card = new Card(data, '#card', openPopupCard, openPopupDeleteCard, setLikes, userInfo.getUserId());
  return card;
}

//добавление карточки в секцию в конец
function addCardToSection(data){
  const card = createCard(data);
  cardGroup.addItem(card.generateCard());
}

//добавление карточки в секцию в начало 
function appendCardToSection(data){
  const card = createCard(data);
  cardGroup.appendItem(card.generateCard());
}

//создание новой карточки после добавления 
function createNewCard(inputValues) {
  api.addNewCard({nameNew: inputValues['name-img'], linkNew: inputValues['info-img']}).then(info => {
        addCardToSection(info);
        popupWithNewCard.close();
    }).catch(err => console.log(err));
  formCreateNewCard.querySelector('.popup__submit').textContent = 'Сохранение...';
}

//открытие попапа карточки
function openPopupCard(name, src){
  popupWihtImage.open(name, src);
}

//открытие попапа для удаления карточки
function openPopupDeleteCard(card){
  popupWithDeleteCard.open(card);
}


//сохранение редактирования информации 
function savePopUpEdit({name, info}) {
  api.editProfile({nameNew: name, aboutNew: info}).then(info => {
        userInfo.setUserInfo({ name: info.name, info: info.about });
        popupWithFormEdit.close();
    }).catch(err => console.log(err))
  formEdit.querySelector('.popup__submit').textContent = 'Сохранение...';
}

//редактирование аватара
function editAvatar(avatar){
  api.editAvatar(avatar['info-img-link']).then(res =>{
        userInfo.setUserAvatar(res.avatar);
        popupWithEditAvatar.close();
      }).catch(err => console.log(err));
  formEditAvatar.querySelector('.popup__submit').textContent = 'Сохранение...';
}

//удаление карточки
function deleteCard(card){
  api.deleteCard(card.getId()).then(res => {
          card.removeTemplate();
          popupWithDeleteCard.close();
      }).catch(err => console.log(err));
}

//установка лайка на карточку
function setLikes(card, likeStatus){
  if (likeStatus){
    api.deleteLike(card.getId()).then(res =>{
          card.updateLikes(res.likes.length);
        }).catch(err => console.log(err));
  } else{
    api.addLike(card.getId()).then(res =>{
          card.updateLikes(res.likes.length);
        }).catch(err => console.log(err));
  }
}

//сдушатели событий на кнопки для открытия попапов с формами 
buttonAddNewCard.addEventListener('click', ()=>{
  addCardFormValidator.disableSubmitButton();
  formCreateNewCard.querySelector('.popup__submit').textContent = 'Сохранить';
  popupWithNewCard.open();
});

buttonOpenFormEdit.addEventListener('click', ()=>{
  formEdit.querySelector('.popup__submit').textContent = 'Сохранить';
  popupWithFormEdit.open();
  const userInfoFromPage = userInfo.getUserInfo();
  inputInfo.value = userInfoFromPage.info;
  inputName.value = userInfoFromPage.name;
})

avatarAuthorIconEdid.addEventListener('click', ()=>{
  formEditAvatar.querySelector('.popup__submit').textContent = 'Сохранить';
  popupWithEditAvatar.open();
})

//добавление информации об авторе на страницу
function addUserInfo(res){
  userInfo.setUserId(res._id);
  userInfo.setUserInfo({name: res.name, info: res.about});
  userInfo.setUserAvatar(res.avatar);
}

 
//добавление загрузившихся карточек на страницу
function addInitialsCards(cards){
  cards.forEach(card =>{
    appendCardToSection(card);
  })
}


Promise.all([
  api.getUserInfo(),
  api.getInitialsCard()
  ])
  .then(values =>{
      addUserInfo(values[0]);
      addInitialsCards(values[1]);
  }).catch(err => console.log(err));














