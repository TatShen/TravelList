import { appEvents } from "../../../constants/appEvents";
import { Component, eventBus } from "../../../core";
import { storageService } from "../../../services/Storage";
import "../../atoms";
import { appRoutes } from "../../../constants/appRoutes";

export class Card extends Component {
  constructor() {
    super(),
      (this.state = {
        isEdit: false,
      });
  }

  onClick = (evt) => {
    if (evt.target.closest(".card-back")) {
      this.dispatch(appEvents.back);
    }
    if (evt.target.closest(".card-edit")) {
      this.setState((state) => {
        return {
          ...state,
          isEdit: true,
        };
      });
    }
  };

  uploudMorePhoto = () => {
    storageService.uploadRoute(this.props.id).then((snapshot) => {
      console.log(snapshot);
    });
  };

  componentDidMount() {
    this.addEventListener("click", this.onClick);
    this.addEventListener("submit", this.uploudMorePhoto);
  }

  static get observedAttributes() {
    return [
      "title",
      "description",
      "photo",
      "info",
      "username",
      "avatar",
      "map",
      "id",
      "vizibility",
      "classname",
      "userid",
    ];
  }

  render() {
    const {
      title,
      description,
      info,
      map,
      username,
      avatar,
      photo,
      id,
      visibility,
      classname,
      userid,
    } = this.props;

    return `
     
        <div class="open-card ${classname} ">
        <div class="header  ${visibility}" >
            <img src="/src/assets/icons/back.png" type="button" class="card-back">
            <h2 class="card-h">${title}</h2>
            <img src="/src/assets/icons/edit.png" class="card-edit" >
        </div>

        ${
          !this.state.isEdit
            ? `<div class="card-photo" style="background: url(${photo}); background-size:cover; background-position:50%" ></div>
        <div class="card-city">
            <tl-span  content="${map}"></tl-span>
        </div>
        <div class="card-description">
            <tl-span  content="${description}"></tl-span>
        </div>
        <div class="card-info">
            <tl-span classname="info" content="${info}"></tl-span>
        </div>
        <tl-link to="${appRoutes.accaunt}/${userid}">
            <div class="card-avatar" style="background: url(${avatar}); background-size:cover; background-position:50%" ></div>
            <tl-span class="card-username" content="${username}"></tl-span>
        </tl-link>  
       
        
        
    </div>`
            : `<div class ="addPhoto">
                <label class="upload-file" for="upload-image">
                <input id="upload-image" type="file" class="add-photo" hidden name="photo" multiple >  </input>
                <div class="addMorePhoto"></div>
                <div class="addMorePhoto"></div>
                <div class="addMorePhoto"></div>
                <div class="addMorePhoto"></div>
                <div class="addMorePhoto"></div>
                <div class="addMorePhoto"></div>
                <tl-button classname="photo" type="submit" eventtype="submit" content="??????????????????"></tl-button>
            </div>
    
    </div>`
        }
        
       
        `;
  }
}

customElements.define("tl-card", Card);
