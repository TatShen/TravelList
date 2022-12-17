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
        <a href="${this.props.to}">
            <slot></slot>
        </a>
        `;
  }
}

customElements.define("tl-link", Link);
