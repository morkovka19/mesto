import {openPopUp} from './index.js';
import {popUpCard} from './index.js';

export default class Card{
    constructor(data, templateSelector){
        this._name = data.name;
        this._src  = data.link;
        this._templateSelector = templateSelector;
    }

    _getTemplate(){
        const cardElement = document.querySelector(this._templateSelector).content.querySelector('.elements__item').cloneNode(true);
        return cardElement;
    }

    _openPopUpCard(){
        openPopUp(popUpCard);
        popUpCard.querySelector(".popup__img").src = this._src
        popUpCard.querySelector(".popup__img").alt = this._name
        popUpCard.querySelector(".popup__figcaption").textContent = this._name;
    }

    _addLike(){
        this._element.querySelector('.elements__btn-like').classList.toggle("elements__btn-like_active");
    }

    _removeCard(){
        this._element.remove();
    }

    _setEventListeners(){
        this._element.querySelector('.elements__item-img').addEventListener('click', ()=>{
            this._openPopUpCard();
        })

        this._element.querySelector('.elements__btn-like').addEventListener('click', ()=>{
            this._addLike();
        })

        this._element.querySelector('.elements__trash').addEventListener('click', ()=>{
            this._removeCard();
        })
    }

    generateCard(){
        this._element = this._getTemplate();
        this._element.querySelector(".elements__item-img").src = this._src;
        this._element.querySelector(".elements__item-title").textContent = this._name;
        this._element.querySelector('.elements__item-img').alt = this._name;

        this._setEventListeners();
        return this._element;
    }
}
