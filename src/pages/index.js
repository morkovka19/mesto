import './index.css';

import {configFormSelector, cards, nameAuthor, avatarAuthorIconEdid, formEditAvatar, formDelete, infoAuthor, avatarAuthor, inputInfo, inputName, buttonOpenFormEdit, buttonAddNewCard, formEdit, formCreateNewCard, inputNewCardHref, inputNewCardName} from '../scripts/utils/constants.js'
import Card from '../scripts/components/Card.js'
import PopupwithImage from '../scripts/components/PopupWithImage.js'
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
const popupWihtImage = new PopupwithImage('#popup-card');

//поппапы с формами 
const popupWithFormEdit = new PopupWithForm('#popup-edit', savePopUpEdit);
const popupWithNewCard = new PopupWithForm('#popup-new-card', createNewCard);
const popupWithDeleteCard = new PopupWithButton('#popup-delete-card', deleteCard);
const popupWithEditAvatar = new PopupWithForm('#popup-edit-avatar', editAvatar);



const cardGroup = new Section({items: {}, rendere: createCard}, '.elements__group');


//объект с информацией об авторе
const userInfo = new UserInfo({nameSelector: '.profile__title', infoSelector: '.profile__subtitle'});

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
  const card = new Card(data, '#card', openPopupCard, getInfoAboutAuthor, deleteLike, addLike, openPopupDeleteCard);
  cards.push(card);
  cardGroup.addItem(card.generateCard());
}

//открытие попапа карточки
function openPopupCard(name, src){
  popupWihtImage.open(name, src);
}

//сохранение редактирования информации 
function savePopUpEdit({name, info}) {
  userInfo.setUserInfo({ name, info });
  api.editProfile({nameNew: name, aboutNew: info}).then(res =>{
    if (res.ok) {
      res.json().then(info => console.log(info))
    }
  }).catch(err => console.log(err))
  formEdit.querySelector('.popup__submit').textContent = 'Сохранение...';
}

//создание новой карточки после добавления 
function createNewCard(inputValues) {
  api.addNewCard({nameNew: inputValues['name-img'], linkNew: inputValues['info-img']}).then(res =>{
    console.log(res.ok)
    if (res.ok){
      res.json().then(info => {
        console.log(info);
        createCard(info)});
    }
  }).catch(err => console.log(err));
  formCreateNewCard.querySelector('.popup__submit').textContent = 'Сохранение...';
}

//редактирование аватара
function editAvatar(avatar){
  api.editAvatar(avatar['info-img-link']).then(res =>{
    if (res.ok){
      res.json().then(res =>{
        console.log(res)
        avatarAuthor.src = res.avatar;
      })
    }
  }).catch(err => console.log(err));
  formEditAvatar.querySelector('.popup__submit').textContent = 'Сохранение...';
}

//удаление карточки
function deleteCard(id){
  api.deleteCard(id).then(res => {
    if (res.ok){
      cards.forEach(card =>{
        if (card.getId() === id){
          card.removeTemplate();
        }
      })
    }
  }).catch(err => console.log(err));
}

//открытие попапа для удаления карточки
function openPopupDeleteCard(id){
  popupWithDeleteCard.open(id);
}

//получение информации об авторе 
function getInfoAboutAuthor(){
  return api.getInfoAboutAuthor();
}

//удаление лайка
function deleteLike(id){
  return api.deleteLike(id);
}

//добавление лайка 
function addLike(id){
  return api.addLike(id);
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


//апи для инициализации страницы при загрузке 
api.getInitialsCard().then((res)=>{
  if (res.ok){
    res.json().then((cards)=>{
        cards.forEach(card =>{
          createCard(card);
        })
    })
  }
}).catch((err) =>{
  console.log(err);
});

//запрашиваем имя и информацию о пользователе 
api.getInfoAboutAuthor().then((res)=>{
  if (res.ok){
    res.json().then((res)=>{
      nameAuthor.textContent = res.name;
      infoAuthor.textContent = res.about;
      avatarAuthor.src = res.avatar;
    })
  }
}).catch((err) => console.log(err));











