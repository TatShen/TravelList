import { Component } from "../../../core";
import '../../atoms'

export class Card extends Component{
    constructor(){
        super()
    }

    onClick=(evt)=>{
       if(evt.target.closest('.back')){
        this.dispatch('back')
       }
    }

    componentDidMount(){
        this.addEventListener('click', this.onClick)
    }

    static get observedAttributes(){
        return ['title','classname', 'type','poster', 'description', 'photo', 'info', 'reating'];
    };
    
    render(){
        const {title, classname, type, poster, description, info,reating } = this.props
        const photo = JSON.parse(this.props.photo)
        console.log(photo);
        return `
        <div class="open-card">
            <img src="/src/assets/icons/icon _arrow back outline_.png" type="button" class="back">
            <h2>${title}</h2>
            <div class="route">
                <img src="${poster}">
            </div>
            <div class="description">
                <tl-span classname="description" content="${description}"></tl-span>
            </div>
            <div class="info">
                <tl-span classname="info" content="${info}"></tl-span>
            </div>
            <div class="photo">
                ${JSON.parse(photo)
                    .map((item)=>{
                        return `
                        <img src="${item.src}"class="card-img">
                        `
                    })
                    .join('')
                }
            </div>
            <div class="reating"></div>
        </div>
        `
    }
}

customElements.define('tl-card', Card)