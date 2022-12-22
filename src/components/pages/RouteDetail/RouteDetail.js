import { Component } from "../../../core";
import '../../organisms'
import '../../malecules'
import { routesService } from "../../../services";
import './detailsRoute.scss'
export class RouteDetail extends Component{
    constructor(){
        super();
        this.state={
            route:[]
        }
    }

    getRoute() {
        
        routesService
          .getRoute(this.props.id)
          .then((data) => {
            this.setState((state) => {
              return {
                ...state,
                route: data,
              };
            });
          })
          .finally(() => {
           
          });
      }
    
  static get observedAttributes() {
    return ["id"];
  }
    
  componentDidMount(){
    this.getRoute()
  }
    render(){
        console.log(this.props.id);
        console.log(this.state.route);
        return `
        <tl-nav></tl-nav>
        <tl-card classname="card-R"
        visibility="hidden"
        title="${this.state.route.title}" 
        map="${this.state.route.map}"
        description="${this.state.route.description}" 
        photo="${this.state.route.photo}"
        id="${this.state.route.id}"
        info="${this.state.route.time}"
        username="${this.state.route.travelname}"
        avatar="${this.state.route.avatar}">
        
        </tl-card>
        `
    }
}


customElements.define('tl-routedetail', RouteDetail)