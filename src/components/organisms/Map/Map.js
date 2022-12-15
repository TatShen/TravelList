import { Component } from "../../../core";
import {GoogleMap} from './googlemap'
import './map.scss'
import '../../../core'
import { appRoutes } from "../../../constants/appRoutes";

export class Map extends Component{
    constructor(){
        super();
        this.state={
            map:null
        }

    }

    getMap = () => {
    
function initMap() {
   
    const uluru = { lat: -25.344, lng: 131.031 };
    
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
  
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;

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

