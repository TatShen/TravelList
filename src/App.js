import * as core from "./core";
import './components'


import { appRoutes } from "./constants/appRoutes";

export class App extends core.Component {
  constructor() {
    super();
  }

  render() {
    return `
    
      <tl-router> 

        <tl-route path="${appRoutes.home}" component="tl-homepage" title="home-page"></tl-route>

        <tl-route path="${appRoutes.description}" component="tl-descriptionpage" title="description"></tl-route>

        <tl-route path="${appRoutes.form}" component="tl-formpage" title="form"></tl-route>

        <tl-route path="/geopage" component="tl-geopage" title="geo-page"></tl-route>
        <tl-route path="/map" component="tl-mappage" title="map-page"></tl-route>
        <tl-route path="/accaunt" component="tl-accauntpage" title="map-page"></tl-route>
        <tl-route path="/place" component="tl-listpage" title="map-page"></tl-route>
        <tl-route path="/apartment" component="tl-listpage" title="map-page"></tl-route>
        <tl-route path="/eat" component="tl-listpage" title="map-page"></tl-route>


       
        <tl-outlet></tl-outlet>
          
         
        
      </tl-router>
   
      `;
  }
}

customElements.define("tl-app", App);
