import { Component } from "../../../core";

export class List extends Component {
  constructor() {
    super();
    this.items = JSON.parse(this.getAttribute("items"));
  }

  onClick = (evt) => {
    if (evt.target.closest(".alert-png")) {
      console.log("close");
      this.dispatch("change-route", { target: "/accaunt" });
    }
  };

  componentDidMount() {
    this.addEventListener("click", this.onClick);
  }

  static get observedAttributes() {
    return ["items"];
  }

  render() {
    console.log(this.items);
    return `
            <div class = "mask-alert">
                
                <ul>
                <img src='/src/assets/icons/icon _close outline_.png' class="alert-png" type="button">
               ${this.items
                 .map(
                   ({
                     title,
                     type,
                     poster,
                     description,
                     photo,
                     reating,
                     info,
                   }) => {
                     return `<tl-li classname="list" content="${title}" type="${type}" poster="${poster}" description="${description}" photo='${JSON.stringify(
                       photo
                     )}' reating='${JSON.stringify(
                       reating
                     )}' info="${info}"></tl-li>`;
                   }
                 )
                 .join("")}
               
                </ul>
             
            </div>        
        `;
  }
}

customElements.define("tl-list", List);
