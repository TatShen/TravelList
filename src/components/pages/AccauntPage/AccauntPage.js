import {Component, eventBus} from '../../../core'

import './accaunt.scss'
import '../../malecules'
import '../../atoms'
import {usersService} from '../../../services/UserService.js'
import { appEvents } from '../../../constants/appEvents';



export class AccauntPage extends Component{
    constructor() {
        super();
        this.state = {
          isLoading: false,
          user: null,
          uid:null
        };
      }


      getUs = (evt) => {
        console.log('getuser');
        console.log(evt.detail);
        this.setState((state) => {
          return {
            ...state,
            uid: evt.detail.userUid
          }
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
    
      componentDidMount() {
        this.addEventListener(appEvents.sendUid, this.getUs)
        this.getUser();
      }

    render(){
      console.log(this.state.uid);
      console.log(this.state.user);
        return`
        <tl-nav></tl-nav>
       
        <div class="accaunt-avatar" >
            <img src="${this.state.avatar}">
        </div>
        
        <tl-span content="${this.state.user}"></tl-span>
     
        
        `
    }
} 

customElements.define('tl-accauntpage', AccauntPage)