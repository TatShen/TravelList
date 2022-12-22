import { appRoutes } from "../../../constants/appRoutes";
import { Component, eventBus } from "../../../core";
import { routesService } from "../../../services/RoutesService";
import "./routepage.scss";
import { authService } from "../../../services/Auth";

export class UsersRoutes extends Component {
  constructor() {
    super();
    this.state = {
      routes: [],
     
      isOpenCard: false,
    };
  }

  toggleIsLoading() {
    this.setState((state) => {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    });
  }

 getUid=()=>{
    console.log('sdds');
 }
  getRoutes = () => {
    routesService
      .getRoutes()
      .then((data) => {
        this.setState((state) => {
          return {
            ...state,
            routes: data.filter((item) => item.uid === this.props.uid),
          };
        });
        
      })
      .finally(() => {
        this.toggleIsLoading();
      });
  };

  componentDidMount() {
    this.addEventListener('uid', this.getUid)
    this.getRoutes();
  }

  render() {
    console.log(this.state.routes);
    return `
        
        
        <tl-nav></tl-nav>
        
       
        ${this.state.routes
          .map((item) => {
            return `
            <tl-li
            classname="route"
            title="${item.title}"
            map="${item.map}"
            description="${item.description}"
            photo = '${item.photo}'
            info="${item.time}"
            reating='${JSON.stringify(item.reating)}'
            username="${item.travelname}"
            avatar="${item.avatar}",
            id="${item.id}"
            >
            </tl-li>`;
          })
          .join("")}
           
        `;
  }
}
customElements.define("tl-users-routes", UsersRoutes);
