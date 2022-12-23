import { Component } from "../../../core";
import "../../../core";
import { appRoutes } from "../../../constants/appRoutes";
import "./nav.scss";
import "../../malecules";

export class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isSearch: true,
    };
  }
  render() {
    return `
        <div class="nav">
            <tl-link to="${appRoutes.menu}">
            <img class="search" src="/src/assets/icons/home.png">
            </tl-link>
            <tl-link to="${appRoutes.accaunt}">
            <img class="accaunt-r" src="/src/assets/icons/accaunt.png">
            </tl-link> 
        </div>
        `;
  }
}

customElements.define("tl-nav", Nav);
