import { Component } from "../../../core";
import './title.scss'

export class Title extends Component {
  constructor() {
    super();
  }

  render() {
    return `
    <div class="wrapper">
      <div class="typing">
        TraveList
      </div>
    </div>
        `;
  }
}

customElements.define("tl-title", Title);
