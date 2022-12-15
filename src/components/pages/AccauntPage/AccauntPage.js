import {Component} from '../../../core'
import '../../../core'
import { appRoutes } from '../../../constants/appRoutes';
import './accaunt.scss'
import '../../malecules'
import '../../atoms'

export class AccauntPage extends Component{
    constructor(){
        super();
        this.state={
            avatar:''
        }

    }

    render(){
        return`
        <tl-nav></tl-nav>
        <div class="accaunt-avatar" >
            <img src="${this.state.avatar}">
        </div>
        
        <tl-span content="#"></tl-span>
        <tl-button ></tl-button>
        <tl-button></tl-button>
        <tl-button></tl-button>
        <tl-link>
            <div class="edit">
                <img src="/src/assets/icons/icon _edit_.png">
            </div>
        </tl-link>
        `
    }
} 

customElements.define('tl-accauntpage', AccauntPage)