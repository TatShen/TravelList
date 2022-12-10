import { Component } from "../../../core";
import '../../malecules'
import '../../atoms'
import '../../../constants/appRoutes'
import { appRoutes } from "../../../constants/appRoutes";

export class HomePage extends Component{
    constructor(){
        super();
    }

    onChangeRoute = () =>{
        setTimeout(()=>{
            this.dispatch('change-route', {target:appRoutes.description})
        }, 100)
       
    }


    componentDidMount(){
        this.addEventListener('animationend', this.onChangeRoute)
    }

    render(){
         return `
            <tl-logo></tl-logo>
            <tl-title></tl-title>
        `
    }
}

customElements.define('tl-homepage', HomePage)