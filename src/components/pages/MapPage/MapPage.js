import { Component } from "../../../core";
import '../../organisms'

export class MapPage extends Component{
    constructor(){
        super()
    }

    render(){
        return `
        <tl-map></tl-map>
        
        `
    }
}

customElements.define('tl-mappage', MapPage)