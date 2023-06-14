import { title, subtitle } from "../utils/constants.js";

export default class UserInfo {
    constructor({name, info}){
        this._userName = name;
        this._userInfo = info;
    }

    getUserInfo(){
        return {name: this._userName, info: this._userInfo};
    }

    

    setUserInfo({newName, newInfo}){
        this._userName = newName;
        this._userInfo = newInfo;
        title.textContent = this._userName;
        subtitle.textContent = this._userInfo;
    }

}