import { Component } from "../../../core";
import "./logo.scss";
export class Logo extends Component {
  constructor() {
    super();
  }

  render() {
    return `
        <div class="logo-border">
            <img class="logo" src="/src/assets/icons/logo.png">
        </div>
        `;
  }
}

customElements.define("tl-logo", Logo);
