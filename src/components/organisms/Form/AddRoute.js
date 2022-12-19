
import { Component, eventBus } from "../../../core";
import { authService } from "../../../services/Auth";
import { FormManager } from "../../../core";
import { usersService } from "../../../services/UserService";
import {routesService} from '../../../services/RouteService'
import { storageService} from "../../../services/Storage";
import { appEvents } from "../../../constants/appEvents";
import { appRoutes } from "../../../constants/appRoutes";


export class AddRoute extends Component{
    constructor(){
        super();
        this.state = {
            isLoading: false,
            uid : null,
            user:null
        };
        this.form = new FormManager()
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
        this.setState((state) => {
            return{
                ...state,
                uid: user.uid
            }
        })
       })
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
            eventBus.emit(appEvents.changeRoute, appRoutes.accaunt)

          })
          .finally(() => {
            this.toggleIsLoading();
          });
      }

      onClick = (evt) => {
        if(evt.target.closest('.file')) {
          const uploadFile = document.querySelector('.upload-file');
          uploadFile.click()
      }
    }

      createRoute = (data) => {
        this.toggleIsLoading();
      
        storageService.uploadPhoto(data.avatar)
          .then((snapshot) => {
            storageService.getDownloadURL(snapshot.ref).then((url) => {
              routesService.creatRoute( {
              ...data,
              photos : url,
              
            })  
            })
            console.log(data);
           
            this.dispatch(appEvents.changeRoute, {target: appRoutes.accaunt})
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(()=>{
            this.toggleIsLoading();
          })
      }



    componentDidMount(){
        this.getUid()
        this.getUser()

        window.onload = () => {
            this.addEventListener('click', this.onClick)
          } 

        this.form.init(this.querySelector('.add-route'), {})
        this.addEventListener('submit', this.form.handleSubmit(this.createRoute))
    
    }

    render(){
       console.log(this.state.uid);
       console.log(this.state.user);
       
       if (this.state.user !== null){
        return`
        <form class="add-route">
        <input placeholder="Введите название маршрута" class="add-input" type="text" name="title">
        <div class="map"></div>
        <textarea class="add-input" placeholder="Введите описание маршрута" name="description"></textarea>>
        <input placeholder="Cколько времени занимает маршрут?" class="add-input" type="text" name="time">
        <div class="upload-file">
            <input type="file" class="upload-file" hidden name="avatar">  </input>
            <img src="/src/assets/icons/addfoto.png" class="addphoto">
        </div>
        ${this.state.user.map((item)=>{
            return `
            <input  class="add-input" type="text" name="travelname" value="${item.firstname} ${item.lastname}"  hidden>
            </input>
            <input  class="add-input" type="text" name="uid" value="${item.uid}"  hidden>
            </input>
            <input name="avatar" value="${item.avatar}" class="add-input" hidden></input>
            
            `
        })}
        
        <tl-button type="submit" content="Готово" classname="add"></tl-button>
        </form>
        
        `
    }}
}

customElements.define('tl-addroute', AddRoute)