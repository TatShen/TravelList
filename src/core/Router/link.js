import { appEvents } from "../../constants/appEvents";
import { Component } from "../Component";

export class Link extends Component {
  constructor() {
    super();
    this.isShadow = true;
  }

  static get observedAttributes() {
    return ["to"];
  }

  onClick = (evt) => {
    evt.preventDefault();
    this.dispatch(appEvents.changeRoute, { target: this.props.to });
  };

  componentDidMount() {
    this.addEventListener("click", this.onClick);
  }

  componentWillUpdate() {
    this.removeEventListener("click", this.onClick);
  }

  render() {
    return `
    <style>
    .it-link {
      text-decoration: none;
    }
  </style>
        <a href="${this.props.to}" class="it-link">
            <slot></slot>
        </a>
        `;
  }
}

customElements.define("tl-link", Link);
