import { Component } from "../../../core";
import '../../atoms'
import '../../malecules'

export class Li extends Component{
    constructor(){
        super(),
        this.state={
            isOpen:false
        }
    };

    openLi = () => {
        this.setState((state) => {
            return{
                ...state,
                isOpen:true
            }
        })
    }

    closeLi= () =>{
        this.setState((state)=>{
            return{
                ...state,
                isOpen:false
            }
        })
    }

    componentDidMount(){
        this.addEventListener('open-li', this.openLi)
        this.addEventListener('back', this.closeLi)
    }

    static get observedAttributes(){
        return ['content','classname', 'type', 'poster', 'description', 'photo', 'info', 'reating'];
    };

    render(){

        const {content, classname, type, poster, description, photo,info,reating } = this.props
        return `
            ${this.state.isOpen ? `
            <tl-card title="${content}" type="${type}" poster="${poster}" description="${description}" photo='${JSON.stringify(photo)}' reating='${JSON.stringify(reating)}' info="${info}"></tl-card>
            
            `:`<tl-button classname="${classname}" content="${title}" eventtype="open-li"></tl-button>`}
        
        `
    }
}

customElements.define('tl-li', Li)