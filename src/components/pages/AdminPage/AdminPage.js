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




  componentDidMount(){
  
  }

  render() {
    return `
        <tl-accaunt-form></tl-accaunt-form>
        `;
  }
}

customElements.define("tl-adminpage", AdminPage);
