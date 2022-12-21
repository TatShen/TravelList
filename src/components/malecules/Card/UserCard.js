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
        const {username, avatar} = this.props
        return`
        <tl-link to="">
            <div clas="user-card">
                <img src="${avatar}" class="user-photo">
                <span class="user-name">${username}</span>
            </div>
        </tl-link>
        `
    }  
}

customElements.define('tl-user-card', UserCard)