import { Component } from "../../../core";
import '../../organisms'
import '../../malecules'
import { routesService } from "../../../services";

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
        <tl-card></tl-card>
        `
    }
}


customElements.define('tl-routedetail', RouteDetail)