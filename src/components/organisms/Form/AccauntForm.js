import { Component, FormManager } from "../../../core";

import { storageService } from "../../../services/Storage";
import {authService} from '../../../services/Auth'
import { appRoutes } from "../../../constants/appRoutes";
import{usersService} from "../../../services/UserService"
import { appEvents } from "../../../constants/appEvents";





export class AccauntForm extends Component {
  constructor() {
    super();
    
    this.state = {
        isLoading: false,
        uid: '',
       
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
 
  getUid = () => {
    authService.init().then((user)=>{
      console.log(user);
      this.setState((state)=>{
        return{
          ...state,
          uid:user.uid
        }
      })
    })
      }
   

    createUser = (data) => {
        this.toggleIsLoading();
      
        storageService.uploadAvatar(data.avatar)
          .then((snapshot) => {
            storageService.getDownloadURL(snapshot.ref).then((url) => {
              usersService.creatUser( {
              ...data,
              avatar : url,
              
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
  

     

      
  componentDidMount() {
    this.getUid()
    window.onload = () => {
      this.addEventListener('click', this.onClick)
    } 
    this.form.init(this.querySelector('.send-data'), {})
    this.addEventListener('submit', this.form.handleSubmit(this.createUser))
    
    

    if (!authService.user) {
            this.dispatch(appEvents.changeRoute, {
        target: appRoutes[this.props.path ?? "signUp"],
      });
    }
  }

  render() {
    console.log(this.state.uid);
    
    return `
        <form>
          <label  for="upload-avatar">
              <input id="upload-avatar" type="file" class="upload-file" hidden name="avatar">  </input>
              <img class="uplouad" src="/src/assets/icons/addfoto.png">
          </lable>
          <input placeholder="Введите имя" class="input firstname" type="text" name="firstname">
          <input placeholder="Введите фамилия" class="input lastname" type="text" name="lastname">
          <input placeholder="Введите страну проживания" class="input country" type="text" name="country">
          <input placeholder="Введите страну проживания" class="input " type="text" name="uid" value="${this.state.uid}" hidden>
          <textarea placeholder="Введите информацию о себе" class="textarea country" type="text" name="description"></textarea>
          
          <tl-button type="submit" content="Save" classname="save" eventtype="submit">
       
        </tl-button>
        </form>
        `;
  }
}

customElements.define("tl-accaunt-form", AccauntForm);
