import { Component } from "../../../core";

export class EllipseButtom extends Component{
      
    
    render(){
       
        return `
        <img class="ellipse" src="/src/assets/icons/Ellipse 3944.png">
        `
    }
}

customElements.define('tl-ellipse-buttom', EllipseButtom)