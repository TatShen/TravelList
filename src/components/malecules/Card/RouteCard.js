import "./card.scss";
import "../../atoms";
import {appRoutes} from '../../../constants/appRoutes'

import { Component } from "../../../core";

export class RouteCard extends Component {
  static get observedAttributes() {
    return ["title", "city", "photo", 'id'];
  }

  render() {
    const { title, city, photo, id } = this.props;
    return `
        <tl-link to="${appRoutes.route}/${id}">
             <div class="route-card">
                <img src="${photo}" class="route-photo">
                <span class="route-span">${title}</span>
                <span class="city-span">${city}</span>
            </div>
        </tl-link>
        `;
  }
}

customElements.define("tl-route-card", RouteCard);
