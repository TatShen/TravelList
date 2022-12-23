import { Component } from "../../../core";
import "./menu.scss";
import { routesService, usersService } from "../../../services";
import "../../malecules";

export class Menu extends Component {
  constructor() {
    super(),
      (this.state = {
        users: [],
        routes: [],
        searchRoute: "",
        searchUser: "",
      });
  }

  getUsers = () => {
    usersService.getUsers().then((data) => {
      this.setState((state) => {
        return {
          ...state,
          users: this.state.searchUser
            ? data.filter(
                (item) => item.firstname.toLowerCase() === this.state.searchUser
              )
            : data,
        };
      });
    });
  };

  getInputvalue = () => {
    const routes = document.getElementById("routes").value;

    const users = document.getElementById("users").value;

    this.setState((state) => {
      return {
        ...state,
        searchRoute: routes.toLowerCase(),
        searchUser: users.toLowerCase(),
      };
    });

    this.getRoutes();
    this.getUsers();
  };

  getRoutes = () => {
    routesService.getRoutes().then((data) => {
      this.setState((state) => {
        return {
          ...state,
          routes: this.state.searchRoute
            ? data.filter(
                (item) => item.map.toLowerCase() === this.state.searchRoute
              )
            : data,
        };
      });
    });
  };

  componentDidMount() {
    this.getInputvalue();

    this.addEventListener("change", this.getInputvalue);
  }

  render() {
    return `
        <tl-nav></tl-nav>
        <div id="menu">
        <div class="list-routes">
            <span class="menu">МАРШРУТЫ</span>
            <input id="routes" class="search-input" placeholder="Введите название города"></input>
            <tl-button classname="search-one" content="Поиск" type="submit"></tl-button>
            <div class="menu-list">
        ${
          !this.state.routes.length
            ? `<span class="menu-er">Маршрутов не найдено! </span>`
            : `${this.state.routes
                .map(({ map, title, photo, id }) => {
                  return `
            <tl-route-card title="${title}"  photo='${photo}' city="${map}" id="${id}" class="route-card"></tl-route-card>`;
                })
                .join("")}  `
        }


            
            
            </div>
        </div>  
       

        <div class="list-users">
            <span class="menu-u">ПУТЕШЕСТВЕННИКИ</span>
            <input class="search-input" id="users" placeholder="Введите имя путешественника"></input>
            <tl-button classname="search" content="Поиск"></tl-button>
            <div class="menu-list-u">
            ${
              !this.state.users.length
                ? `<span class="menu-er">Путешественников с таким именем не найдено!</span>`
                : ` ${this.state.users
                    .map(({ firstname, lastname, avatar, id }) => {
                      return `
                <tl-user-card username="${firstname} ${lastname}"  avatar='${avatar}' class="user-card" id="${id}"></tl-user-card>`;
                    })
                    .join("")}  
            `
            }
            </div>
        </div>    
        </div>
       
        `;
  }
}

customElements.define("tl-menu", Menu);
