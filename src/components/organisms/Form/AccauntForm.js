import { Component, FormManager } from "../../../core";
import { initialFieldsState } from "./initialState";
import { storageService } from "../../../services/Storage";
import {authService} from '../../../services/Auth'
import { appRoutes } from "../../../constants/appRoutes";



export class AccauntForm extends Component {
  constructor() {
    super();
    this.state = {
        isLoading: false,
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

  createUser = (data) => {
    createUser = (data) => {
        this.toggleIsLoading();
        console.log(data);
        storageService.uploadPoster(data.poster)
          .then((snapshot) => {
            storageService.getDownloadURL(snapshot.ref).then((url) => {
              userService.create('users', {
              ...data,
              avatar : url
            })  
            })
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(()=>{
            console.log('ofof');
          })
      }
  }

  componentDidMount() {
    this.form.init(this.querySelector('.send-data'), {})
    this.addEventListener('submit', this.form.handleSubmit(this.createUser))
      
    if (!authService.user) {
            this.dispatch("change-route", {
        target: appRoutes[this.props.path ?? "signUp"],
      });
    }
  }

  render() {
    return `
        <form>
        <div class="file">
            <input type="file"class="upload-file" hidden>  </input>
            <img class="uplouad" src="/src/assets/icons/x31 1 DSLR Camera.png">
        </div>
        <input placeholder="Введите имя" class="input first-name" type="text">
        <input placeholder="Введите фамилия" class="input last-name" type="text">
        <input placeholder="Введите страну проживания" class="input country" type="text">
        <textarea placeholder="Введите информацию о себе" class="textarea country" type="text"></textarea>
        </form>
        <tl-button type="submit" content="Save" classname="save" eventtype="submit">
        
        </tl-button>
        `;
  }
}

customElements.define("tl-accaunt-form", AccauntForm);
