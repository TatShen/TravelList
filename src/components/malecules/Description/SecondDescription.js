import { Component } from "../../../core";


export class SecondDescription extends Component{
    
    
    render(){
            return `
            <div class ="seconddescription">
            <tl-ellipse-buttom> </tl-ellipse-buttom>
            
            <tl-span content="Планируйте собственные маршруты" classname ="description">
            </tl-span>

            <tl-span content="Посещайте заветные места, наслаждайтесь лучшими моментами жизни" classname ="description-small">
            </tl-span>
            <tl-button classname="description" content="Продолжить" eventtype="next"></tl-button>
            </div>

            
            
            `
        }
    };

    customElements.define('tl-seconddescription',SecondDescription)