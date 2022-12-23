import { appRoutes } from "../../../constants/appRoutes";
import { Component } from "../../../core";
import "../../atoms";
import "../../malecules";
import '../../organisms'
import './admin.scss'

export class EditPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

   
  static get observedAttributes() {
    return ["id"];
  }

 

  componentDidMount(){
    
  }

  render() {
    return `
        <tl-nav></tl-nav>
        <tl-edit-form id="${this.props.id}"></tl-edit-form>
       
          
        
        `;
  }
}

customElements.define("tl-editpage", EditPage);