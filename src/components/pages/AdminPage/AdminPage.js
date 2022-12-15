import { appRoutes } from "../../../constants/appRoutes";
import { Component } from "../../../core";
import "../../atoms";
import "../../malecules";
import './admin.scss'

export class AdminPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  onClick = (evt) => {
    if(evt.target.closest('.file')) {
        const uploadFile = document.querySelector('.upload-file');
        uploadFile.click()
    }
  }



  componentDidMount(){
    window.onload = () => {
        this.addEventListener('click', this.onClick)
    }
  }

  render() {
    return `
        
        <tl-accaunt-form></tl-accaunt-form>
       
          <div class="add-div">
            <tl-button type="button" classname="add-route" content="Добавить маршрут" > </tl-button>
            <tl-link to="${appRoutes.description}">
              <img src="/src/assets/icons/icon _plus_.png" class="icon-plus">
            </tl-link>
          </div>
        
        `;
  }
}

customElements.define("tl-adminpage", AdminPage);
