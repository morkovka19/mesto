export default class Section{
    constructor({items, renderer}, containerSelector){
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItem(element){
        this._container.prepend(element);
    }

    appendItem(item){
        this._container.append(item);
    }

    renderItems(){
        this._renderedItems.forEach(this._renderer);
    }
}