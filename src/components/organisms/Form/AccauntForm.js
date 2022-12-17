import { Component, FormManager } from "../../../core";

import { storageService } from "../../../services/Storage";
import {authService} from '../../../services/Auth'
import { appRoutes } from "../../../constants/appRoutes";
import{usersService} from "../../../services/UserService"



export class AccauntForm extends Component {
  constructor() {
    super();
    
    this.state = {
        isLoading: false,
        uid: null
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


  
  onClick = (evt) => {
    if(evt.target.closest('.file')) {
        const uploadFile = document.querySelector('.upload-file');
        uploadFile.click()
    }
  }
 
  getUid = (evt) => {
    console.log('send');
    this.setState((state) => {
      return {
        ...state,
        uid: evt.detail.uid
      }
    })
  }

    createUser = (data) => {
        this.toggleIsLoading();
        console.log(data);
        storageService.uploadPhoto(data.avatar)
          .then((snapshot) => {
            storageService.getDownloadURL(snapshot.ref).then((url) => {
              usersService.creatUser( {
              ...data,
              avatar : url
            })  
            })
            this.dispatch('change-route', {target: appRoutes.accaunt})
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(()=>{
            console.log('ofof');
          })
      }
  

      
  componentDidMount() {
    this.form.init(this.querySelector('.send-data'), {})
    this.addEventListener('submit', this.form.handleSubmit(this.createUser))
    this.onload = () => {
      this.addEventListener('click', this.onClick)
    } 
    window.addEventListener('send-userInfo', this.getUid)

    if (!authService.user) {
            this.dispatch('change-route', {
        target: appRoutes[this.props.path ?? "signUp"],
      });
    }
  }

  render() {
    console.log(this.state.uid);
    
    return `
        <form>
          <div class="file">
              <input type="file"class="upload-file" hidden name="avatar">  </input>
              <img class="uplouad" src="/src/assets/icons/x31 1 DSLR Camera.png">
          </div>
          <input placeholder="Введите имя" class="input first-name" type="text" name="first-name">
          <input placeholder="Введите фамилия" class="input last-name" type="text" name="last-name">
          <input placeholder="Введите страну проживания" class="input country" type="text" name="country">
          <textarea placeholder="Введите информацию о себе" class="textarea country" type="text" name="description"></textarea>
          
          <tl-button type="submit" content="Save" classname="save" eventtype="submit">
        </form>
        </tl-button>
        `;
  }
}

customElements.define("tl-accaunt-form", AccauntForm);
