import { Component } from "../../../core";
import "../../atoms";
import "../../malecules";
import { initialFieldsState } from "./initialState";
import { Validator, FormManager } from "../../../core";
import { authService } from "../../../services/Auth";
import { appRoutes } from "../../../constants/appRoutes";
import { eventBus, EventBus } from "../../../core/EventBus/EventBus";
import { appEvents } from "../../../constants/appEvents";

export class FormEnter extends Component {
  constructor() {
    super();
    this.state = {
      error: "",
      isLoading: false,
      fields: {
        ...initialFieldsState,
      },
    };

    this.form = new FormManager();
  }

  toggleisLoading = () => {
    this.setState((state) => {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    });
  };

  signIn = (data) => {
   
    this.toggleisLoading();
    authService
      .signIn(data.email, data.password)
      .then((user) => {
        authService.user = user;
        authService.init().then((uid) => {
          console.log(uid);
          eventBus.emit(appEvents.sendInfo, {userUid:uid})
          console.log('ccc');
         })
       
        this.dispatch(appEvents.changeRoute, { target:appRoutes.accaunt });
      })
      .catch((error) => {
        this.setState((state) => {
          return {
            ...state,
            error: error.message,
          };
        });
      })
      .finally(() => {
        this.toggleisLoading();
      });
  };

  validateForm = (evt) => {
    if (evt.target.closest("tl-input")) {
      this.form.init(this.querySelector(".registration-form"), {
        email: [
          Validator.email("Email is not valid"),
          Validator.required("The field should not be empty"),
        ],
        password: [Validator.required("The field should not be empty")],
      });
    }
  };

  validate = (evt) => {
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

  componentDidMount() {
    this.addEventListener("click", this.validateForm);
    this.addEventListener(appEvents.validateControls, this.validate);
    this.addEventListener("submit", this.form.handleSubmit(this.signIn));
  }

  render() {
    const {
      fields: { email, password },
    } = this.state;

    return `
    <form class="registration-form">
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


        <tl-input type="Password"
            label="Пароль"
            control-name="password"
            class-name = "firs-pass input-second"
            value="${password.value}"
            is-valid="${password.isValid}"
            is-touched="${password.isTouched}"
            error-message="${password.errors?.message}"></tl-input>
  
        <tl-button classname="to-enter" eventtype="submit" content="Войти"></tl-button>
  
        <tl-button classname="enter-with-google" content="Войти через Google" type="submit"></tl-button>
  
            
    </form>
      
        `;
  }
}

customElements.define("tl-enter-form", FormEnter);

