import { appRoutes } from "../../../constants/appRoutes";
import { Component, eventBus } from "../../../core";
import {routesService} from '../../../services/RouteService'
import './routepage.scss'
import { authService} from "../../../services/Auth";



export class RoutePage extends Component{
    constructor(){
        super();
        this.state={
            routes : [],
            uid: null,
            isOpenCard: false
        }
    }

    
    toggleIsLoading() {
      this.setState((state) => {
        return {
          ...state,
          isLoading: !state.isLoading,
        };
      });
    }

    
    getUid = () => {
      authService.init().then((user)=>{
        console.log(user.uid);
        this.setState((state)=>{
          return{
            ...state,
            uid:user.uid
          }
        })
      })
    }

    getRoutes = ()=> {
      routesService.getRoutes().then((data)=>{
        this.setState((state)=>{
          return{
            ...state,
            routes: data.filter((item)=>item.uid === this.state.uid)
          }
        })
        eventBus.emit('send-routes', {routes:this.state.routes})
       
      }) 
      .finally(() => {
        this.toggleIsLoading();
      });

    }

      componentDidMount(){
        this.getUid()
        this.getRoutes()
      }


    render(){
      
      console.log(this.state.routes);
        return `
        
        <div class="alert">
        <tl-nav></tl-nav>
        
       
        ${this.state.routes
        .map((item)=>{
          console.log(item.avatar);
            return`
            <tl-li
            classname="route"
            title="${item.title}"
            map="${item.map}"
            description="${item.description}"
            photo = '${JSON.stringify(item.photos)}'
            info="${item.time}"
            reating='${JSON.stringify(item.reating)}'
            username="${item.travelname}"
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