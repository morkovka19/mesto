//попапы
const popUpEdit = document.querySelector("#popup-edit")
const popUpNewCard = document.querySelector("#popup-new-card")
const popupImage = document.querySelector("#popup-card")

//Кнопки закрытия
const buttonClosePopupProfile = popUpEdit.querySelector(".popup__btn")
const buttonClosePopupAddCard = popUpNewCard.querySelector(".popup__btn")
const buttonClosePopupImage = popupImage.querySelector(".popup__btn")

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
const cardTemplate = document.querySelector("#card").content
const popUpCard = document.querySelector("#popup-card")

//формы 
const formCreateNewCard = popUpNewCard.querySelector(".popup__form")
const formEdit = popUpEdit.querySelector(".popup__form")

//элементы карточек
const cardElementName = popUpNewCard.querySelector("#name-img")
const cardElementImg = popUpNewCard.querySelector("#href")

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
]

//функция открытия попапа 
function openPopUp(element) {
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
    console.log(element)
    closePopUp(element)
  }
}

//функция открытия попапа картинки 
function openPopUpCard(src, name) {
  openPopUp(popUpCard)
  popUpCard.querySelector(".popup__img").src = src
  popUpCard.querySelector(".popup__img").alt = name
  popUpCard.querySelector(".popup__figcaption").textContent = name
}

//функция установления лайка на картинки 
function addLike(element) {
  element.classList.toggle("elements__btn-like_active")
}

//функция удаления картинки 
function removeCard(element) {
  element.remove()
}

//установка слушателя событий на попап ркдактирования 
popUpEdit.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopUp(popUpEdit)
  }
})

//установка слушателя события на попап добавления новой карточки 
popUpNewCard.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopUp(popUpNewCard)
  }
})

//установка слушателя события на попап новой карточки 
popupImage.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopUp(popupImage)
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
  closePopUp(popupImage)
})


//функция создания новой карточки 
function createCard(name, src) {
  const cardElement = cardTemplate
    .querySelector(".elements__item")
    .cloneNode(true)
  cardElement.querySelector(".elements__item-img").src = src
  cardElement.querySelector(".elements__item-title").textContent = name
  cardElement.querySelector(".elements__item-img").alt = name
  cardElement
    .querySelector(".elements__item-img")
    .addEventListener("click", function () {
      openPopUpCard(src, name)
    })
  cardElement
    .querySelector(".elements__btn-like")
    .addEventListener("click", function () {
      addLike(cardElement.querySelector(".elements__btn-like"))
    })
  cardElement
    .querySelector(".elements__trash")
    .addEventListener("click", function () {
      removeCard(cardElement)
    })
  return cardElement
}

for (let item of initialCards) {
  groupCards.append(createCard(item["name"], item["link"]))
}

//функция сохранения редактирования 
function savePopUpEdit(evt) {
  evt.preventDefault()
  title.textContent = inputName.value
  subtitle.textContent = inputInfo.value
  closePopUp(popUpEdit)
}

//функция добавления новой карточки 
function createNewCard(evt) {
  evt.preventDefault()
  groupCards.prepend(createCard(cardElementName.value, cardElementImg.value))
  closePopUp(popUpNewCard)
  inputNewCardName.value = ""
  inputNewCardHref.value = ""
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

