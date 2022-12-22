import { Component } from "../../../core";

export class EllipseButtom extends Component{
      
    
    render(){
       
        return `
        <img class="ellipse" src="src/assets/svg/Ellipse 3944.svg">
        `
    }
}

customElements.define('tl-ellipse-buttom', EllipseButtom)