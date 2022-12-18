import {Component, eventBus} from '../../../core'

import './accaunt.scss'
import '../../malecules'
import '../../atoms'
import {usersService} from '../../../services/UserService.js'
import { appRoutes } from '../../../constants/appRoutes'
import { authService } from '../../../services/Auth'
import {routesService} from '../../../services/RouteService'
import './accaunt.scss'



export class AccauntPage extends Component{
    constructor() {
        super();
        this.state = {
          isLoading: false,
          user: null,
          uid:'',
          routes:null
        };
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
       
    
    
      toggleIsLoading() {
        this.setState((state) => {
          return {
            ...state,
            isLoading: !state.isLoading,
          };
        });
      }
    
      getUser() {
        this.toggleIsLoading();
        usersService
          .getUsers()
          .then((data) => {
            this.setState((state) => {
              return {
                ...state,
                user: data.filter((item)=>item.uid === this.state.uid)
              };
            
            });
          })
          .finally(() => {
            this.toggleIsLoading();
          });
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
          console.log(this.state.routes);
        }) .finally(() => {
          this.toggleIsLoading();
        });

      }

      componentDidMount() {
        this.getUid()
        this.getUser();
        this.getRoutes()
      }

    render(){
      console.log(this.state.uid);
      console.log(this.state.user);
      console.log(this.state.routes);
       
        if (this.state.user !== null){
          return`
      
        <tl-nav></tl-nav>
        
        ${this.state.user.map((item)=>{
          console.log(item.id);
          return `
          <div class="accaunt-info">
          <div class="accaunt-avatar" style="background: url(${item.avatar}); background-size:cover; background-position:50%" ></div>
           
            
            <tl-span class="first-name"content ="${item.firstname} ${item.lastname}"></tl-span>

          <div class="country">
            <img src="/src/assets/icons/pin outline_.png" class="icon-country">
            <tl-span class="country" content="${item.country}"></tl-span>
          </div>
            
            <tl-span class="description" content="${item.description}"></tl-span>
           
            
              <tl-link to="${appRoutes.route}">
                <tl-button content="Мои маршруты" classname="my-routes" items='${JSON.stringify(this.state.routes)}'></tl-button>
              </tl-link>
              
              <tl-link>
                <tl-button content="Пройденные маршруты" classname="passed-routes"></tl-button>
              </tl-link>
             
              <tl-link to="${appRoutes.addRoute}">
              <tl-button content="Добавить маршрут" classname="add-route"></tl-button>
                         
                
              </tl-link>
             

          </div>  
          `
        })} `
             
    } else {
      return ``
    }
} }

customElements.define('tl-accauntpage', AccauntPage)