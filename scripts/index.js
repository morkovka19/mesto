const editButton = document.querySelector('.profile__icon');
const popUpEdit = document.querySelector('#popup-edit');
const buttonClosePopUpEdit = popUpEdit.querySelector('.popup__btn');
const buttonAddNewCard = document.querySelector('.profile__btn');
const popUpNewCard = document.querySelector('#popup-new-card');
const buttonCloseNewCard = popUpNewCard.querySelector('.popup__btn');
const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');
const groupCards = document.querySelector('.elements__group');
const cardTemplate = document.querySelector('#card').content;
const popUpCard = document.querySelector('#popup-card');
const buttonCloseCard = popUpCard.querySelector('.popup__btn');
const inputName = document.querySelector('.popup__input_name_name');
const inputInfo = document.querySelector('.popup__input_name_info');
const formCreateNewCard = popUpNewCard.querySelector('.popup__form');
const formEdit = popUpEdit.querySelector('.popup__form');
const cardElementName = popUpNewCard.querySelector('#name-img');
const cardElementImg = popUpNewCard.querySelector('#href');
const inputNewCardName = popUpNewCard.querySelector('#name-img');
const inputNewCardHref = popUpNewCard.querySelector('#href');
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

function openPopUp(element) {
    element.classList.add('popup_opened');
}

function closePopUp(element) {
    element.classList.remove('popup_opened');
}

function openPopUpCard(src, name) {
    openPopUp(popUpCard);
    popUpCard.querySelector('.popup__img').src = src;
    popUpCard.querySelector('.popup__img').alt = name;
    popUpCard.querySelector('.popup__figcaption').textContent = name;
    
}

function addLike(element) {
    element.classList.toggle('elements__btn-like_active');
}

function removeCard(element) {
    element.remove();
}

function createCard(name, src) {
    const cardElement = cardTemplate.querySelector('.elements__item').cloneNode(true);
    cardElement.querySelector('.elements__item-img').src = src;
    cardElement.querySelector('.elements__item-title').textContent = name;
    cardElement.querySelector('.elements__item-img').alt = name;
    cardElement.querySelector('.elements__item-img').addEventListener('click', function () { openPopUpCard(cardElement.querySelector('.elements__item-img').src, cardElement.querySelector('.elements__item-img').alt)});
    cardElement.querySelector('.elements__btn-like').addEventListener('click', function () { addLike(cardElement.querySelector('.elements__btn-like'))});
    cardElement.querySelector('.elements__trash').addEventListener('click', function () { removeCard(cardElement) })
    return cardElement;
}

for (let item of initialCards) {
    groupCards.append(createCard(item['name'], item['link']));
}

function savePopUpEdit(evt) {
    evt.preventDefault();
    title.textContent = inputName.value;
    subtitle.textContent = inputInfo.value;
    closePopUp(popUpEdit);
}

function createNewCard(evt) {
    evt.preventDefault();
    groupCards.prepend(createCard(cardElementName.value, cardElementImg.value));
    closePopUp(popUpNewCard);
    inputNewCardName.value = '';
    inputNewCardHref.value = '';
}


editButton.addEventListener('click', function () { openPopUp(popUpEdit) });
buttonClosePopUpEdit.addEventListener('click', function () { closePopUp(popUpEdit) });
formEdit.addEventListener('submit', savePopUpEdit);
buttonAddNewCard.addEventListener('click', function () { openPopUp(popUpNewCard) });
buttonCloseNewCard.addEventListener('click', function () { closePopUp(popUpNewCard) });
buttonCloseCard.addEventListener('click', function () { closePopUp(popUpCard) });
formCreateNewCard.addEventListener('submit', createNewCard)
