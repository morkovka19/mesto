import {api} from '../../pages/index.js'

export default class Card{
    constructor(data, templateSelector, handleCardClick, openPopupDeleteCard, setLikes, userId){
        this._name = data.name;
        this._src  = data.link;
        this._likes = data.likes;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._id = data._id;
        this._owner = data.owner;
        this._openPopupDeleteCard = openPopupDeleteCard;
        this._setLikes = setLikes;
        this._userId = userId;
    }

    _getTemplate(){
        const cardElement = document.querySelector(this._templateSelector).content.querySelector('.elements__item').cloneNode(true);
        return cardElement;
    }

    _addLike(){
        this._setLikes(this, this._btnLike.classList.contains('elements__btn-like_active'));
    }

    updateLikes(amountLikes){
        this._btnLike.classList.toggle('elements__btn-like_active');
        this._amountLikes.textContent = amountLikes;
    }

    _removeCard(){
            this._openPopupDeleteCard(this);
    }

    getId(){
        return this._id;
    }

    removeTemplate(){
        this._element.remove();
    }

    _setEventListeners(){
        this._img.addEventListener('click', ()=>{
            this._handleCardClick(this._name, this._src);
        })
        

        this._btnLike.addEventListener('click', ()=>{
            this._addLike();
        })

        this._element.querySelector('.elements__trash').addEventListener('click', ()=>{
            this._removeCard();
        })
    }

    generateCard(){
        this._element = this._getTemplate();
        this._img = this._element.querySelector('.elements__item-img');
        this._btnLike = this._element.querySelector('.elements__btn-like');
        this._img.src = this._src;
        this._element.querySelector(".elements__item-title").textContent = this._name;
        this._img.alt = this._name;
        this._amountLikes =  this._element.querySelector('.elements__amount-likes');
        this._amountLikes.textContent = this._likes.length;
        this._setEventListeners();
        if (this._userId !== this._owner._id){
            this._element.querySelector('.elements__trash').classList.add('elements__trash_noactive');
        }
        this._likes.forEach(like =>{
            if (like._id === this._userId){
                this._btnLike.classList.add('elements__btn-like_active');
            }
        })
        return this._element;
    }
}
