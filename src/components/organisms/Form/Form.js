import { Component} from "../../../core";
import "../../atoms";
import '../../malecules'
import { initialFieldsState } from "./initialState";
import { Validator, FormManager } from "../../../core";




export class FormRegister extends Component {
  constructor() {
    super();
    this.state = {
      isNewUser: false,
      error: '',
        isLoading: false,
        fields: {
            ...initialFieldsState
        }
    };
    this.form = new FormManager()

  }

  changeForm = () => {
    this.setState((state)=>{
      return{
        ...state,
        isNewUser: !state.isNewUser
      }
    })
  }

  toggleisLoading = () => {
    this.setState((state) => {
      return {
        ...state,
        isLoading: !state.isLoading
      }
    })
  }

  registerUser = (data) => {
    this.toggleisLoading();
    authService.signUp(data.email, data.password, datd.userName)
    .then((user) => {
      console.log(user)
    })
    .catch((error) => {
      this.setState((state) => {
        return {
          ...state,
          error: error.message
        }
      })
    })
    .finally(() => {
      this.toggleisLoading()
    })
  };

  validateForm = (evt) => {
    console.log('validateForm');
    if (evt.target.closest("tl-input")) {
      this.form.init(this.querySelector(".registration-form"), {
        userName: [Validator.required('The field should not be empty')],
        email: [
          Validator.email('Email is not valid'),
          Validator.required('The field should not be empty')
        ],
        password: [Validator.required('The field should not be empty')],
      });
    }
  };

  validate = (evt) => {
    console.log('validate');
    this.setState((state) => {
      return {
        ...state,
        fields: {
          ...state.fields,
          ...evt.detail,
        },
      };
    });
  };

  componentDidMount(){
    this.addEventListener('change-form', this.changeForm);
    this.addEventListener("click", this.validateForm);
    this.addEventListener('validate-controls', this.validate);
    this.addEventListener("submit", this.form.handleSubmit(this.registerUser));
  }


  render() {
    const { fields:{email, password, userName}} = this.state
    return `
    <tl-preloader is-loading="${this.state.isLoading}">
    <form class="registration-form">
     
        <div class="button-box">
          <tl-button content="Войти" classname="form" type="button" class="${this.state.isNewUser ? '':'activ'}" eventtype="change-form"></tl-button>
          <tl-button content="Регистрация" classname="form" class="${this.state.isNewUser ? 'activ':''}" eventtype="change-form"></tl-button>
        </div>
        
        ${
          this.state.isNewUser
            ? `
          <div class="register">

            <tl-input
              class-name="input-first"
              type="text"
              label="Имя пользователя"
              control-name="userName"
              value="${userName.value}"
              is-valid="${userName.isValid}"
              is-touched="${userName.isTouched}"
              error-message="${userName.errors?.message}">
             </tl-input>


            <tl-input 
              class-name="input-second"
              type="E-mail"
              label="E-mail"
              control-name="email"
              value="${email.value}"
              is-valid="${email.isValid}"
              is-touched="${email.isTouched}"
              error-message="${email.errors?.message}"
            ></tl-input>

            <tl-input
              type="Password"
              label="Пароль"
              control-name="password"
              class-name = "firs-pass input-third"
              value="${password.value}"
              is-valid="${password.isValid}"
              is-touched="${password.isTouched}"
              error-message="${password.errors?.message}"
            ></tl-input>
            <tl-button classname="to-register" eventtype="submit"  content="Зарегистрироваться"></tl-button>
          </div>
          `
            : `
          <div class="enter">
            <tl-input 
              class-name="input-first"
              type="text"
              label="Имя пользователя"
              control-name="userName"
              value="${userName.value}"
              is-valid="${userName.isValid}"
              is-touched="${userName.isTouched}"
              error-message="${userName.errors?.message}">
            </tl-input>
            <tl-input type="Password"
            label="Пароль"
            control-name="password"
            class-name = "firs-pass input-second"
            value="${password.value}"
            is-valid="${password.isValid}"
            is-touched="${password.isTouched}"
            error-message="${password.errors?.message}"></tl-input>

            <tl-button classname="to-enter" eventtype="submit" content="Войти"></tl-button>
            
            <tl-span classname="google" content="Забыли пароль?"></tl-span>
            <tl-a href="#" content="Нажмите сюда!"></tl-a>
            <tl-button classname="enter-with-google" content="Войти через Google" type="submit"></tl-button>
          </div>
          </form>
          </tl-preloader>
         
          `
        }`;
  }
}

customElements.define("tl-form", FormRegister);
