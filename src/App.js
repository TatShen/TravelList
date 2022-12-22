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

    
        <tl-route path="${appRoutes.admin}" component="tl-adminpage" title="map-page"></tl-route>


        <tl-route path="${appRoutes.route}" component="tl-routespage" title="route-page"></tl-route>


        <tl-route path="${appRoutes.accaunt}" component="tl-accauntpage" title="accaunt-page"></tl-route>

        <tl-route path="${appRoutes.addroute}" component="tl-addroutepage" title="add-route"></tl-route>

        <tl-route path="${appRoutes.menu}" component="tl-menu" title="home"></tl-route>

        <tl-route path="${appRoutes.route}/:id" component="tl-routedetail" title="route"></tl-route>

        <tl-route path="${appRoutes.accaunt}/:id" component="tl-user-details" title="user"></tl-route>

        <tl-route path="${appRoutes.accaunt}/:uid" component="tl-user-details" title="user"></tl-route>

        <tl-route path="${appRoutes.usersroutes}" component="tl-users-route" title="route"></tl-route>

        <tl-route path="/apartment" component="tl-listpage" title="map-page"></tl-route>
        <tl-route path="/eat" component="tl-listpage" title="map-page"></tl-route>


       
        <tl-outlet></tl-outlet>
          
         
        
      </tl-router>
   
      `;
  }
}

customElements.define("tl-app", App);
