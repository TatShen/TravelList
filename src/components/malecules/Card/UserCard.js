import { Component } from "../../../core";
import '../../../core'

export class UserCard extends Component{
    constructor(){
        super()
    }

    static get observedAttributes() {
        return ["username", 'avatar' ];
      };

    render(){
        return`
        <tl-link>
            <div clas="user-card">
                <img src="${avatar}">
                <span class="user-name">${username}</span>
            
            </div>
        </tl-link>
        `
    }  
}

customElements.define('tl-user-card', UserCard)