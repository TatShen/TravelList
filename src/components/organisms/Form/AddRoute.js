import { Component, eventBus } from "../../../core";
import { authService } from "../../../services/Auth";
import { FormManager } from "../../../core";
import { usersService } from "../../../services/UserService";
import { routesService } from "../../../services/RoutesService";
import { storageService } from "../../../services/Storage";
import { appEvents } from "../../../constants/appEvents";
import { appRoutes } from "../../../constants/appRoutes";

export class AddRoute extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      uid: null,
      user: null,
    };
    this.form = new FormManager();
  }

  toggleIsLoading() {
    this.setState((state) => {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    });
  }

  getUid = () => {
    authService.init().then((user) => {
      this.setState((state) => {
        return {
          ...state,
          uid: user.uid,
        };
      });
    });
  };

  getUser() {
    this.toggleIsLoading();
    usersService
      .getUsers()
      .then((data) => {
        this.setState((state) => {
          return {
            ...state,
            user: data.filter((item) => item.uid === this.state.uid),
          };
        });
        eventBus.emit(appEvents.changeRoute, appRoutes.accaunt);
      })
      .finally(() => {
        this.toggleIsLoading();
      });
  }

  onClick = (evt) => {
    console.log("click");
    if (evt.target.closest(".addphoto")) {
      const addPhoto = document.querySelector(".add-photo");
      addPhoto.click();
    }
  };

  createRoute = (data) => {
    this.toggleIsLoading();

    storageService
      .uploadPhotoOnRoute(data.photo)
      .then((snapshot) => {
        storageService.getAllFiles(snapshot.ref);
        storageService.getDownloadURL(snapshot.ref).then((url) => {
          routesService.creatRoute({
            ...data,
            photo: url,
          });
        });

        this.dispatch(appEvents.changeRoute, { target: appRoutes.accaunt });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.toggleIsLoading();
      });
  };

  componentDidMount() {
    this.getUid();
    this.getUser();

    this.form.init(this.querySelector(".add-route"), {});
    this.addEventListener("submit", this.form.handleSubmit(this.createRoute));
  }

  render() {
    if (this.state.user !== null) {
      return `
        <form class="add-route">

        <input placeholder="Введите название маршрута" class="add-input" type="text" name="title">
        
        <input placeholder="Посященные города" class="add-input" type="text" name="map">

        <textarea class="add-input" placeholder="Введите описание маршрута" name="description"></textarea>

        <input placeholder="Cколько времени занимает маршрут?" class="add-input" type="text" name="time">

        <label class="upload-file" for="upload-image">
            <input id="upload-image" type="file" class="add-photo" hidden name="photo" multiple >  </input>
            <img src="/src/assets/icons/addfoto.png" class="addphoto">
        </div>
        
        
        ${this.state.user.map((item) => {
          return `
            <input  class="add-input" type="text" name="travelname" value="${item.firstname} ${item.lastname}"  hidden>
            </input>
            <input  class="add-input" type="text" name="uid" value="${item.uid}"  hidden>
            </input>
            <input name="avatar" value="${item.avatar}" class="add-input" hidden></input>
            <input  class="add-input" type="text" name="userId" value="${item.id}"  hidden>
            </input>
            `;
        })}
        
        <tl-button type="submit" content="Готово" classname="add"></tl-button>
        </form>
        
        `;
    }
  }
}

customElements.define("tl-addroute", AddRoute);
