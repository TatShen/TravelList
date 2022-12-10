import { Component } from "../../../core";

import '../../atoms'
import '../../malecules'
import '../../organisms'
import './form.scss'




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
       
        <img class="form-logo" src="/src/assets/svg/hot-air-balloon-svgrepo-com.svg">
        <div class="button-box">
        <tl-button content="Войти" classname="form" type="button" class="${this.state.isNewUser ? '':'activ'}" eventtype="change-form"></tl-button>
        <tl-button content="Регистрация" classname="form" class="${this.state.isNewUser ? 'activ':''}" eventtype="change-form"></tl-button>
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
    
    <tl-button classname="let-pass" content="Пропустить этот шаг" eventtype="change-route" to="/geopage"></tl-button>
    `
}
}

customElements.define('tl-formpage', FormPage)