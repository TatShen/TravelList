import { Component } from "../../../core";
import '../../organisms'
import '../../malecules'
import { appRoutes } from "../../../constants/appRoutes";
import { usersService } from "../../../services/UserService";
import { appEvents } from "../../../constants/appEvents";
import { routesService } from "../../../services";
import './userdetails.scss'

export class UserDetails extends Component{
    constructor(){
        super(),
        this.state={
            user:[],
            routes:[]
        }
    }

    getUser() {
        
        usersService
          .getUser(this.props.id)
          .then((data) => {
            this.setState((state) => {
              return {
                ...state,
                user: data,
              };
            });
          })
          .finally(() => {
           
          });
      }

      getRoutes = () => {
        routesService
          .getRoutes()
          .then((data) => {
            this.setState((state) => {
              return {
                ...state,
                routes: data.filter((item) => item.uid === this.state.user.uid),
              };
            });
           
          })
          .finally(() => {
           
          });
      };
    

    
   
  static get observedAttributes() {
    return ["id"];
  }
    
  componentDidMount(){
    this.getUser()
    this.getRoutes()
  }




    render(){
        console.log(this.state.routes);
        return`
        <tl-nav></tl-nav>
        <div class="accaunt-info">
        <div class="accaunt-avatar" style="background: url(${
          this.state.user.avatar
        }); background-size:cover; background-position:50%" ></div>
         
          
          <tl-span class="first-name"content ="${this.state.user.firstname} ${
            this.state.user.lastname
        }"></tl-span>

        <div class="country">
          <img src="/src/assets/icons/pin outline_.png" class="icon-country">
          <tl-span class="country" content="${this.state.user.country}"></tl-span>
        </div>
          
          <tl-span class="description" content="${
            this.state.user.description
          }"></tl-span>
         
          
         <div class="routes-list">
            <span class="menu">Маршруты пользователя</span>
            <div class="menu-list">
            ${this.state.routes.map((item)=>{
              console.log(item);
               return `<tl-route-card
              title="${item.title}"
              city="${item.map}"
              photo="${item.photo}"
              id="${item.id}"
              ></tl-route-card>`
            })}
            </div>
         </div>
        `
    }
}

customElements.define('tl-user-details', UserDetails)