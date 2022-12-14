import { Component } from "../../../core";
import 'googlemap'
import './map.scss'
import '../../../core'
import { appRoutes } from "../../../constants/appRoutes";

export class Map extends Component{
    constructor(){
        super();
        this.msp = null
    }

    getMap = () => {
      

    }

    componentDidMount(){
        this.getMap()
    }


    render(){
        return`
        <tl-link to="${appRoutes.route}">
            <div class = "map">
            
            </div>
        </tl-link>
        `
    }
}

customElements.define('tl-map', Map)

