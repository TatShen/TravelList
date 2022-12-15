import { Component } from "../../../core";
import '../../atoms'

export class Card extends Component{
    constructor(){
        super()
    }

    onClick=(evt)=>{
        console.log('click');
       if(evt.target.closest('.card-back')){
        console.log('back');
        this.dispatch('back')
       }
    }

    componentDidMount(){
        this.addEventListener('click', this.onClick)
    }

    static get observedAttributes(){
        return ['title', 'description', 'photo', 'info', 'reating', 'username', 'avatar', 'map'];
    };
    
    render(){
        const {title,   description,  info, reating, map, username, avatar } = this.props
        const photo = JSON.parse(this.props.photo) 
        return `
      
        <div class="open-card">
            <img src="/src/assets/icons/icon _arrow back outline_.png" type="button" class="card-back">
            <h2 class="card-h">${title}</h2>
            <div class="card-map">  

            </div>
            <div class="card-description">
                <tl-span  content="${description}"></tl-span>
            </div>
            <div class="card-info">
                <tl-span classname="info" content="${info}"></tl-span>
            </div>
            <div class="card-photo">
                ${JSON.parse(photo)
                    .map((item)=>{
                        return `
                        <img src="${item.src}"class="card-img">
                        `
                    })
                    .join('')
                }
            </div>
            <img class="card-avatar" src="${avatar}">
            <tl-span class="card-username" content="${username}"></tl-span>
            <div class="card-reating"></div>
        </div>
        `
    }
}

customElements.define('tl-card', Card)