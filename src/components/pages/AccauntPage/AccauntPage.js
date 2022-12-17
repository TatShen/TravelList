import {Component} from '../../../core'
import '../../../core'
import { appRoutes } from '../../../constants/appRoutes';
import './accaunt.scss'
import '../../malecules'
import '../../atoms'
import {usersService} from '../../../services/UserService.js'


export class AccauntPage extends Component{
    constructor() {
        super();
        this.state = {
          isLoading: false,
          user: null,
        };
      }

      static get observedAttributes() {
        return ["id"];
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
          .getUser(this.props.id)
          .then((data) => {
            this.setState((state) => {
              return {
                ...state,
                movie: data,
              };
            });
          })
          .finally(() => {
            this.toggleIsLoading();
          });
      }
    
      componentDidMount() {
        this.getUser();
      }

    render(){
        return`
        <tl-nav></tl-nav>
        <div class="accaunt-avatar" >
            <img src="${this.state.avatar}">
        </div>
        
        <tl-span content="#"></tl-span>
        <tl-button ></tl-button>
        <tl-button></tl-button>
        <tl-button></tl-button>
        <tl-link>
            <div class="edit">
                <img src="/src/assets/icons/icon _edit_.png">
            </div>
        </tl-link>
        `
    }
} 

customElements.define('tl-accauntpage', AccauntPage)