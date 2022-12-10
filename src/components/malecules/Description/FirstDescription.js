import { Component } from "../../../core";


export class FirstDescription extends Component{
    
    
    render(){
            return `
            <div class ="firstdescription">
                <tl-ellipse-buttom> </tl-ellipse-buttom>
                <tl-span content="Ищите вдохновение для путешествий!" classname ="description">
                </tl-span>

                <tl-span content="С помощью подборок интересных мест, созданных самомтоятельными путешественниками" classname ="description-small">
                </tl-span>
                <tl-button classname="description" content="Продолжить" eventtype="next"></tl-button>
            </div>
          
            `
        }
    };

    customElements.define('tl-firstdescription',FirstDescription)
