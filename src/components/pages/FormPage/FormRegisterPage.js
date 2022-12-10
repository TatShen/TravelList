import { Component } from "../../../core";

import '../../atoms'
import '../../malecules'

import './form.scss'




export class Form extends Component{
    constructor(){
        super();
    };

   

    render(){
        return `
       
        <img class="form-logo" src="/src/assets/svg/hot-air-balloon-svgrepo-com.svg">
        <tl-form></tl-form>
        <tl-button classname="let-pass" content="Пропустить этот шаг" eventtype="change-route" to="/geopage"></tl-button>
        `
    }
}

customElements.define('tl-formpage', Form)