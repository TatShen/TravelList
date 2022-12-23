import { Component } from "../../../core";

import "../../atoms";
import "../../malecules";
import "./description.scss";
import "../../organisms";

export class DescriptionPage extends Component {
  constructor() {
    super();
  }

  render() {
    return `
        <tl-slider></tl-slider>
       `;
  }
}

customElements.define("tl-descriptionpage", DescriptionPage);
