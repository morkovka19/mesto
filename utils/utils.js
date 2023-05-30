export function openPopUp(element) {
    document.addEventListener("keydown", closePopUpEscape)
    element.classList.add("popup_opened")
  }

  //функция закрытия попапа по esc
export function closePopUpEscape(evt) {
    if (evt.code == "Escape") {
      const element = document.querySelector(".popup_opened")
      closePopUp(element)
    }
  }

  export const popUpCard = document.querySelector("#popup-card")