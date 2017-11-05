import $ from 'jquery';
export class BaseElement{
    constructor(){
        this.element = null // jquery object
    }
    appendToElement(el){
        this.createElement();
        el.append(this.element);
    }
    createElement(){
        let s = this.getElement();
        this.element = $(s);
    }
    getElementString(){
        throw 'Please override getElementString() in BaseElement';
    }
}

