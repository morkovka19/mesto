import {initialCards, configFormSelector, inputInfo, inputName, title, subtitle, buttonOpenFormEdit, buttonAddNewCard, formEdit, formCreateNewCard, inputNewCardHref, inputNewCardName} from '../utils/constants.js'
import Card from '../components/Card.js'
import PopupwithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';

//попап с картинкой
const popupWihtImage = new PopupwithImage('#popup-card');

//поппапы с формами 
const popupWithFormEdit = new PopupWithForm('#popup-edit', savePopUpEdit);
const popupWithNewCard = new PopupWithForm('#popup-new-card', createNewCard);

//секция с карточками 
const cardGroup = new Section({items: initialCards, renderer: createCard}, '.elements__group' );
cardGroup.renderItems();

//объект с информацией об авторе
const userInfo = new UserInfo({name: title.textContent, info: subtitle.textContent});

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
  const card = new Card(data, '#card', (evt)=>{
    popupWihtImage.open(evt);
  });
  cardGroup.addItem(card.generateCard());
}

//сохранение редактирования информации 
function savePopUpEdit(evt) {
  evt.preventDefault()
  userInfo.setUserInfo({ newName: inputName.value, newInfo: inputInfo.value })
  popupWithFormEdit.close();
}

//создание новой карточки после добавления 
function createNewCard(evt) {
  evt.preventDefault();
  createCard({ name: inputNewCardName.value, link: inputNewCardHref.value })
  popupWithNewCard.close();
  inputNewCardName.value = "";
  inputNewCardHref.value = "";
  addCardFormValidator.disableSubmitButton();
}

//сдушатели событий на кнопки для открытия попапов с формами 
buttonAddNewCard.addEventListener('click', ()=>{
  popupWithNewCard.open();
});

buttonOpenFormEdit.addEventListener('click', ()=>{
  popupWithFormEdit.open();
  inputInfo.value = userInfo.getUserInfo().info;
  inputName.value = userInfo.getUserInfo().name;
})
















