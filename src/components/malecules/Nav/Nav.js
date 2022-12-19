import { Component } from "../../../core";
import '../../../core'
import { appRoutes } from "../../../constants/appRoutes";
import './Nav.scss'

export class Nav extends Component{
    render(){
        return`
        <div class="nav">
            <tl-link to="${appRoutes.map}">
            <img class="search" src="/src/assets/icons/icon _search_.png">
            </tl-link>
            <tl-link to="${appRoutes.accaunt}">
            <img class="accaunt-r" src="/src/assets/icons/icon _person outline_.png">
            </tl-link> 
        </div>
        `
    }
}

customElements.define('tl-nav', Nav)