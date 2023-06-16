export default class Card{
    constructor(data, templateSelector, handleCardClick){
        this._name = data.name;
        this._src  = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate(){
        const cardElement = document.querySelector(this._templateSelector).content.querySelector('.elements__item').cloneNode(true);
        return cardElement;
    }

    _addLike(){
        this._element.querySelector('.elements__btn-like').classList.toggle("elements__btn-like_active");
    }

    _removeCard(){
        this._element.remove();
    }

    _setEventListeners(){
        this._element.querySelector('.elements__item-img').addEventListener('click', this._handleCardClick)
        

        this._element.querySelector('.elements__btn-like').addEventListener('click', ()=>{
            this._addLike();
        })

        this._element.querySelector('.elements__trash').addEventListener('click', ()=>{
            this._removeCard();
        })
    }

    generateCard(){
        this._element = this._getTemplate();
        this._img =  this._element.querySelector(".elements__item-img");
        this._img.src = this._src;
        this._element.querySelector(".elements__item-title").textContent = this._name;
        this._img.alt = this._name;
        this._setEventListeners();
        return this._element;
    }
}
