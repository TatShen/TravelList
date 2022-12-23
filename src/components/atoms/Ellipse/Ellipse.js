import { Component } from "../../../core";

export class EllipseButtom extends Component{
      
    
    render(){
       
        return `
        <img class="ellipse" src="/src/assets/icons/Ellipse.png">
        `
    }
}

customElements.define('tl-ellipse-buttom', EllipseButtom)