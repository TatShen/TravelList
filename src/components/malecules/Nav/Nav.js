import { Component } from "../../../core";
import '../../../core'
import { appRoutes } from "../../../constants/appRoutes";
import './Nav.scss'

export class Nav extends Component{
    render(){
        return`
        <tl-link to="${appRoutes.map}">
        <img class="search" src="/src/assets/icons/icon _search_.png">
        </tl-link>
        <tl-link to="${appRoutes.accaunt}">
        <img class="accaunt-r" src="/src/assets/icons/icon _person outline_.png">
        </tl-link> 
        
        `
    }
}

customElements.define('tl-nav', Nav)