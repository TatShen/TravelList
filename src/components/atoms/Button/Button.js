import { Component } from "../../../core";

export class Button extends Component {
  componentDidMount() {
    this.addEventListener("click", () => {
      this.dispatch(this.props.eventtype, { target: this.props.to });
    });
  }

  static get observedAttributes() {
    return ["content", "classname", "eventtype", "to"];
  }

  render() {
    const { content, classname } = this.props;
    return `
        <button  class="${classname}-button">${content}</button>
        `;
  }
}

customElements.define("tl-button", Button);
