import './index.css';

import {initialCards, configFormSelector, nameAuthor, infoAuthor, avatarAuthor, inputInfo, inputName, buttonOpenFormEdit, buttonAddNewCard, formEdit, formCreateNewCard, inputNewCardHref, inputNewCardName} from '../scripts/utils/constants.js'
import Card from '../scripts/components/Card.js'
import PopupwithImage from '../scripts/components/PopupWithImage.js'
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import Section from '../scripts/components/Section.js';
import FormValidator from '../scripts/components/FormValidator.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Api from '../scripts/components/Api.js';
import { info } from 'autoprefixer';


//создаем объект для создания api
const api = new Api({cahort: 'cohort-70', id: '14bb670c-f56d-4056-9e87-e524535efbde'});



//попап с картинкой
const popupWihtImage = new PopupwithImage('#popup-card');

//поппапы с формами 
const popupWithFormEdit = new PopupWithForm('#popup-edit', savePopUpEdit);
const popupWithNewCard = new PopupWithForm('#popup-new-card', createNewCard);

api.getInitialsCard().then((res)=>{
  if (res.ok){
    res.json().then((cards)=>{
      if (cards.length == 0){
        const cardGroup = new Section({items: {}, rendere: createCard}, '.elements__group');
      } else{
        const cardGroup = new Section({items: cards,  renderer: createCard}, '.elements__group')
      }
    })
  }
}).catch((err) =>{
  console.log(err);
  const cardGroup = new Section({items: {}, rendere: createCard}, '.elements__group');
});


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
  api.editProfile({nameNew: name, aboutNew: info}).then(res =>{
    if (res.ok) console.log(res.ok)
  }).catch(err => console.log(err))
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

