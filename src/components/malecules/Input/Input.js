import { Component } from "../../../core";

export class Input extends Component {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return [
      "type",
      "label",
      "control-name",
      "class-name",
      "value",
      "is-valid",
      "is-touched",
      "error-message",
    ];
  }

  render() {
    const controlClassName = JSON.parse(this.props["is-valid"])
      ? "is-valid"
      : "is-invalid";
    const isAddClassName = JSON.parse(this.props["is-touched"])
      ? controlClassName
      : "";
    return `
      
              <input 
              type="${this.props.type}"
              class="form-control ${isAddClassName} ${
      this.props["class-name"] ?? ""
    }"
              name="${this.props["control-name"]}"
              value="${this.props.value}"
              placeholder ="${this.props.label}"
              />
              <div class="invalid-feedback ${
                this.props["error-message"] == "undefined" ? "hidden" : ""
              }">${this.props["error-message"]}</div>
              </div>
     
          `;
  }
}

customElements.define("tl-input", Input);
