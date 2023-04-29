let editButton = document.querySelector('.profile__icon'); //кнопка редакирования 
let popUpEdit = document.querySelector('#popup-edit'); //попап редактирования 
let closeButtonEdit = popUpEdit.querySelector('.popup__btn');//кнопка для закрытия попапа редактирования 
let saveButtonEdit = popUpEdit.querySelector('.popup__submit');//кнопка сохранения информации

const addButtonNewCard = document.querySelector('.profile__btn');//кнопка новой карточки
const popUpNewCard = document.querySelector('#popup-new-card');//попап новой карточки 
const closeButtonNewCard = popUpNewCard.querySelector('.popup__btn');//кнопка зкрытия попапа новой карточки 
const createButtonNewCard = popUpNewCard.querySelector('.popup__submit');//кнопка сохранения новой карточки 


let title = document.querySelector('.profile__title'); //имя автора 
let subtitle = document.querySelector('.profile__subtitle'); //информация об авторе 


const groupCards = document.querySelector('.elements__group'); //список карточек
const cardTemplate = document.querySelector('#card').content; // шаблон карточки 

//словарь карточек для загрузки страницы 
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

for (let item of initialCards){
  const cardElement = cardTemplate.querySelector('.elements__item').cloneNode(true);
  cardElement.querySelector('.elements__item-img').src = item['link'];
  cardElement.querySelector('.elements__item-title').textContent = item['name'];
  groupCards.append(cardElement);
}

let likeButtons = Array.from(groupCards.querySelectorAll('.elements__btn-like'));//масив кновок лайков 

//окрыть попап редактирования 
function openPopUpEdit(){
    popUpEdit.classList.add('popup_opened');
}

//закрыть попап редактирования 
function closePopUpEdit(){
    popUpEdit.classList.remove('popup_opened');
}

//сохранить редактирование 
function savePopUpEdit(evt){
    evt.preventDefault();
    let inputName = document.querySelector('.popup__input_name_name');
    let inputInfo = document.querySelector('.popup__input_name_info');
    title.textContent = inputName.value;
    subtitle.textContent = inputInfo.value;
    closePopUpEdit();
}

//открыть попап новой карточки 
function openPopUpNewCard(){
    popUpNewCard.classList.add('popup_opened');
}

//закрыть попап новой карточки 
function closePopUpNewCard(){
    popUpNewCard.classList.remove('popup_opened');
}

//добавить событие на кнопку лайка 
function addLike(element){
    element.addEventListener('click', function(){
        element.classList.toggle('elements__btn-like_active');
    })
}

//сохранить новую карточку 
function createNewCard(evt){
    evt.preventDefault();
    const cardElement = cardTemplate.querySelector('.elements__item').cloneNode(true);
    let cardElementName = document.querySelector('#name-img');
    let cardElementImg = document.querySelector('#href');
    cardElement.querySelector('.elements__item-title').textContent = cardElementName;
    cardElement.src = cardElementImg;
    groupCards.prepend(cardElement);
    likeButtons.unshift(cardElement.querySelector('.elements__btn-like'));
    addLike(cardElement.querySelector('.elements__btn-like'));
    closePopUpNewCard();
}


Array.from(likeButtons).forEach(element => {
    addLike(element);
});


editButton.addEventListener('click', openPopUpEdit);
closeButtonEdit.addEventListener('click', closePopUpEdit);
saveButtonEdit.addEventListener('click', savePopUpEdit);

addButtonNewCard.addEventListener('click', openPopUpNewCard);
closeButtonNewCard.addEventListener('click', closePopUpNewCard);
createButtonNewCard.addEventListener('click', createNewCard);





