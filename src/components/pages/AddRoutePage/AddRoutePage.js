import { Component } from "../../../core";
import '../../atoms'
import '../../malecules'
import '../../organisms'
import './addroute.scss'

export class AddRoutePage extends Component{
    render(){
        return`
        <tl-nav></tl-nav>
        <tl-addroute></tl-addroute>
        `
    }
}

customElements.define('tl-addroutepage', AddRoutePage)