import { Component } from "../../../core";

import '../../atoms'
import '../../malecules'
import '../../organisms'
import './form.scss'
import { FormManager } from "../../../core";
import { authService } from "../../../services/Auth";
import { appEvents } from "../../../constants/appEvents";
import { eventBus } from "../../../core/EventBus/EventBus";



export class FormPage extends Component{
    constructor(){
        super();
        this.state = {
            isNewUser: false,
            
    };
   
}




    changeForm = () => {
        this.setState((state)=>{
        return{
            ...state,
            isNewUser: !state.isNewUser
        }
        })
    }


   componentDidMount(){
       this.addEventListener('change-form', this.changeForm);
        
   }

    render(){
        return `
        <tl-preloader is-loading="${this.state.isLoading}">
       
        <img class="form-logo" src="/src/assets/icons/logo.png">
        <div class="button-box">
        <tl-button content="Войти" classname="form" type="button" class="${this.state.isNewUser ? '':'activ'} type="button" eventtype="change-form" ></tl-button>
        <tl-button content="Регистрация" classname="form" class="${this.state.isNewUser ? 'activ':''}"  eventtype="change-form"></tl-button>
      </div>
        
        ${
            this.state.isNewUser
              ? `
              <tl-registration-form></tl-registration-form>
              `:
              `
              <tl-enter-form></tl-enter-form>
              `
    }
    
   
    `
}
}

customElements.define('tl-formpage', FormPage)