import {Component} from '../../../core'
import './menu.scss'
import {routesService, usersService} from '../../../services'
import '../../malecules'


export class Menu extends Component{
    constructor(){
        super(),
        this.state={
            users: [],
            routes:[]
        }
    }

    getUsers = () => {
        usersService.getUsers().then((data) => {
            this.setState((state) => {
                return{
                    ...state,
                    users: data
                }
            })
        })
    }

    getRoutes = () => {
        routesService.getRoutes().then((data) => {
            this.setState((state) => {
                return{
                    ...state,
                    routes: data
                }
            })
        })
    }


    componentDidMount(){
        this.getUsers()
        this.getRoutes()
    }

    render(){
        console.log(this.state.users);
        console.log(this.state.routes);
        return `
        <tl-nav></tl-nav>
       <div class="list-routes">
            <span class="menu">МАРШРУТЫ</span>
            <input class="search-input"></input>
            <tl-button classname="search-one" content="Поиск"></tl-button>
            <div class="menu-list">
            
            ${this.state.routes.map(({map, title, photo,id})=>{
                return`
                <tl-route-card title="${title}"  photo='${photo}' city="${map}" id="${id}" class="route-card"></tl-route-card>`
              })
            .join('')}  
            
            </div>
        </div>  
       

        <div class="list-users">
            <span class="menu">ПУТЕШЕСТВЕННИКИ</span>
            <input class="search-input"></input>
            <tl-button classname="search" content="Поиск"></tl-button>
            <div class="menu-list">
            
            ${this.state.users.map(({firstname, lastname, avatar, id})=>{
                return`
                <tl-user-card username="${firstname} ${lastname}"  avatar='${avatar}' class="user-card" id="${id}"></tl-user-card>`
              })
            .join('')}  
            
            </div>
        </div>    
        `
        
    }
}

customElements.define('tl-menu', Menu)