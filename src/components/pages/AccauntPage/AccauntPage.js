import { Component, eventBus } from "../../../core";

import "./accaunt.scss";
import "../../malecules";
import "../../atoms";
import { usersService } from "../../../services/UserService.js";
import { appRoutes } from "../../../constants/appRoutes";
import { authService } from "../../../services/Auth";
import { routesService } from "../../../services/RoutesService";
import "./accaunt.scss";

export class AccauntPage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      user: null,
      uid: "",
      routes: null,
      isOpenRoutes: false,
    };
  }

  getUid = () => {
    authService.init().then((user) => {
      this.setState((state) => {
        return {
          ...state,
          uid: user.uid,
        };
      });
    });
  };

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
            user: data.filter((item) => item.uid === this.state.uid),
          };
        });
      })
      .finally(() => {
        this.toggleIsLoading();
      });
  }

  componentDidMount() {
    this.getUid();
    this.getUser();
  }

  render() {
    if (this.state.user !== null) {
      return `
      
        <tl-nav></tl-nav>
        

        
        ${this.state.user.map((item) => {
          console.log(item.avatar);
          return `
         
          <div class="accaunt-info">
          <div class="accaunt-avatar" style="background: url(${item.avatar}); background-size:cover; background-position:50%"></div>
           
            
            <tl-span class="first-name"content ="${item.firstname} ${
            item.lastname
          }"></tl-span>

          <div class="country">
            <img src="/src/assets/icons/pin outline_.png" class="icon-country">
            <tl-span class="country" content="${item.country}"></tl-span>
          </div>
            
            <tl-span class="description" content="${
              item.description
            }"></tl-span>
           
            
              <tl-link to="${appRoutes.route}">
                <tl-button content="Мои маршруты" classname="my-routes" items='${JSON.stringify(
                  this.state.routes
                )}'></tl-button>
              </tl-link>
              
             
             
              <tl-link to="${appRoutes.addroute}">
              <tl-button content="Добавить маршрут" classname="add-route"></tl-button>
                         
                
              </tl-link>
             

          </div>  
          `;
        })} `;
    } else {
      return ``;
    }
  }
}

customElements.define("tl-accauntpage", AccauntPage);
