import { Component } from "../../../core";
import '../../../core'
import { appEvents } from "../../../constants/appEvents";
import { appRoutes } from "../../../constants/appRoutes";

export class UserCard extends Component{
    constructor(){
        super()
    }

    static get observedAttributes() {
        return ["username", 'avatar', 'id' ];
      };

    render(){
        const {username, avatar, id} = this.props
        return`
        <tl-link to="${appRoutes.accaunt}/${id}">
            <div clas="user-card">
                <img src="${avatar}" class="user-photo">
                <span class="user-name">${username}</span>
            </div>
        </tl-link>
        `
    }  
}

customElements.define('tl-user-card', UserCard)