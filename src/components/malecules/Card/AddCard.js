import './card.scss';
import '../../atoms'

import { Component } from "../../../core";

export class AddCard extends Component{
    constructor(){
        super()
    };

    static get observedAttributes(){
       return ['lable','time','nav']
    }

    render(){
        const {lable,  time, nav} = this.props
        return `
        <tl-input classname="card-h" placeholder="Введите название ${lable}"></tl-input>
        <tl-input classname="card-map" placeholder="Добавьте данные карт"></tl-input>
        <tl-input classname="card-description" placeholder="Введите описание ${lable}"></tl-input>
        <tl-input classname="card-other" placeholder="Введите ${time} ${nav} ${lable}"></tl-input>
        <tl-add src="/src/assets/icons/x31 1 DSLR Camera.png" classname="card"></tl-add>
        <tl-button classname="save" content="Сохранить"></tl-button>
        `
    }

}

customElements.define('tl-addcard', AddCard)