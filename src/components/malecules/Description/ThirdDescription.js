import { Component } from "../../../core";
import { appRoutes } from "../../../constants/appRoutes"


export class ThirdDescription extends Component{
    
    
    render(){
            return `
            <div class ="thirddescription">
            <tl-ellipse-buttom> </tl-ellipse-buttom>
            
            <tl-span content="Делитесь своими маршрутами с друзьями!" classname ="description">
            </tl-span>

            <tl-span content="Планируйте совместные путешествия, общайтесь с путешественниками со всего мира" classname ="description-small">
            </tl-span>
            <tl-button classname="description" content="Продолжить" eventtype="change-route" to="${appRoutes.form}"></tl-button> 
                 
            </div>
            
            `
        }
    };

    customElements.define('tl-thirddescription',ThirdDescription)