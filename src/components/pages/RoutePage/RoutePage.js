import { appRoutes } from "../../../constants/appRoutes";
import { Component, eventBus } from "../../../core";
import {routesService} from '../../../services/RouteService'
import './routepage.scss'



export class RoutePage extends Component{
    constructor(){
        super();
        this.state={
            routes : []
        }
    }

    getRoutes = (evt) => {
      console.log('evt.detail');
       this.setState((state)=>{
        return{
          ...state,
          
        }
       })
      };

      componentDidMount(){
        
        eventBus.on('send-routes', this.getRoutes)
      }


    render(){
        return `
        
        <div class="alert">
        <tl-link to="${appRoutes.map}">
        <img class="search" src="/src/assets/icons/icon _search_.png">
        </tl-link>
        <tl-link to="${appRoutes.accaunt}">
        <img class="accaunt" src="/src/assets/icons/icon _person outline_.png">
        </tl-link> 
       
        ${this.state.routes
        .map((item)=>{
            return`
            <tl-li
            classname="route"
            title="${item.title}"
            map="${item.map}"
            description="${item.description}"
            photo = '${JSON.stringify(item.photo)}'
            info="${item.info}"
            reating='${JSON.stringify(item.reating)}'
            username="${item.userName}"
            avatar="${item.avatar}"
            >
            </tl-li>`
        })
        .join('')
      
      }
        
        
        </div>
        
        `
    }
}
customElements.define('tl-routepage', RoutePage)