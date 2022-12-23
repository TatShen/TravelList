import { Component, FormManager } from "../../../core";

import { storageService } from "../../../services/Storage";
import { authService } from "../../../services/Auth";
import { appRoutes } from "../../../constants/appRoutes";
import { usersService } from "../../../services/UserService";
import { appEvents } from "../../../constants/appEvents";

export class EditForm extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      uid: "",
      user: [],
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

  onClick = (evt) => {
    if (evt.target.closest(".file")) {
      const uploadFile = document.querySelector(".upload-file");
      uploadFile.click();
    }
  };

  getUid = () => {
    authService.init().then((user) => {
      console.log(user);
      this.setState((state) => {
        return {
          ...state,
          uid: user.uid,
        };
      });
    });
  };

  createUser = (data) => {
    this.toggleIsLoading();

    storageService
      .uploadAvatar(data.avatar)
      .then((snapshot) => {
        storageService.getDownloadURL(snapshot.ref).then((url) => {
          usersService.creatUser({
            ...data,
            avatar: url,
          });
        });
        console.log(data);

        this.dispatch(appEvents.changeRoute, { target: appRoutes.accaunt });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.toggleIsLoading();
      });
  };

  getUser = () => {
    usersService.getUser(this.props.id).then((user) => {
      this.setState((state) => {
        return {
          ...state,
          user: user,
        };
      });
    });
  };

  editUser = (data) => {
    this.toggleIsLoading();
    storageService
      .uploadAvatar(data.avatar)
      .then((snapshot) => {
        storageService.getDownloadURL(snapshot.ref).then((url) => {
          usersService
            .updateUsers(
              {
                ...data,
                avatar: url,
              },
              this.props.id
            )
            .then(() => {
              this.dispatch(appEvents.changeRoute, {
                target: appRoutes.accaunt,
              });
            });
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.toggleIsLoading();
      });
  };

  static get observedAttributes() {
    return ["id"];
  }

  componentDidMount() {
    if (this.props.id) {
      this.getUser();
      this.addEventListener("submit", this.form.handleSubmit(this.editUser));
    } else {
      this.getUid();
      this.form.init(this.querySelector(".send-data"), {});
    }
  }

  render() {
    console.log(this.state.user);

    return `
        <form>
          <label  for="upload-avatar">
              <input id="upload-avatar" type="file" class="upload-file" hidden name="avatar" value="${
                this.state.user.length ? "" : this.state.user.avatar
              }">  </input>
              <img class="uplouad" src="/src/assets/icons/addfoto.png">
          </lable>
          <input placeholder="Введите имя" class="input firstname" type="text" name="firstname" value="${
            this.state.user.length ? "Введите имя" : this.state.user.firstname
          }">
          <input placeholder="Введите фамилию" class="input lastname" type="text" name="lastname" value="${
            this.state.user.length
              ? "Введите фамилию"
              : this.state.user.lastname
          }">
          <input placeholder="Введите страну проживания" class="input country" type="text" name="country" value="${
            this.state.user.length
              ? "Введите страну проживания"
              : this.state.user.country
          }">
          <input placeholder="Введите страну проживания" class="input " type="text" name="uid" value="${
            this.state.uid
          }" hidden>
          <input placeholder="Введите информацию о себе" class="textarea country" type="text" name="description" value="${
            this.state.user.length
              ? "Введите информацию о себе"
              : this.state.user.description
          }"></input>
          
          <tl-button type="submit" content="Save" classname="save" eventtype="submit">
       
        </tl-button>
        </form>
        `;
  }
}

customElements.define("tl-edit-form", EditForm);
