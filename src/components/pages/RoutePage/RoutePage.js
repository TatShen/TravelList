import { Component } from "../../../core";
import {routesService} from '../../../services/RouteService'

export class RoutePage extends Component{
    constructor(){
        super();
        this.state={
            routes : []
        }
    }

    getRoutes(){
        routesService.getAllRoutes().then(({data}) => {
          this.setState((state) => {
            return {
              ...state,
              routes: data,
            };
          });
        });
      };

      componentDidMount(){
        this.getRoutes()
      }


    render(){
        return `
        <div class="alert">
        ${this.state.routes
        .map((item)=>{
            return`
            <tl-li
            content="${item.title}"
            classname="${item.classname}"
            type="${item.type}"
            poster='${JSON.stringify(item.poster)}'
            description="${item.description}"
            photo = "${item.photo}"
            info="${item.info}"
            reating="${item.reating}"
            >
            </tl-li>`
        })}
        
        
        </div>
        
        `
    }
}
customElements.define('tl-route-page', RoutePage)