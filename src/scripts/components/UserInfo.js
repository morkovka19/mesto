import { info } from "autoprefixer";

export default class UserInfo {
    constructor({nameSelector, infoSelector, avatarSelector}){
        this._userName = document.querySelector(nameSelector);
        this._userInfo = document.querySelector(infoSelector);
        this._userAvatar = document.querySelector(avatarSelector);
    }

    getUserInfo(){
        return {name: this._userName.textContent, info: this._userInfo.textContent, avatar: this._userAvatar.src};
    }

    setUserInfo({name, info}){
        this._userName.textContent = name;
        this._userInfo.textContent = info;
    }

    setUserAvatar(avatar){
        this._userAvatar.src = avatar;
    }

    setUserId(id){
        this._id = id;
    }

    getUserId(){
        return this._id;
    }

}