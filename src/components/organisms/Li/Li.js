import { appEvents } from "../../../constants/appEvents";
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
        console.log('back');
        this.setState((state)=>{
            return{
                ...state,
                isOpen:false
            }
        })
    }

    componentDidMount(){
        this.addEventListener(appEvents.openLi, this.openLi)
        this.addEventListener(appEvents.back, this.closeLi)
    }

    static get observedAttributes(){
        return ['title','classname',  'description', 'photo', 'info', 'reating', 'username', 'avatar', 'map'];
    };

    render(){

        const {title, classname,  description, photo, info, reating, map, username, avatar } = this.props
        return `
            ${this.state.isOpen ? `
            <tl-card title="${title}" 
             map="${map}"
             description="${description}" 
             photo='${JSON.stringify(photo)}' 
             reating='${JSON.stringify(reating)}' 
             info="${info}"
             username="${username}">
             avatar="${avatar}"
             </tl-card>
            
            `:`<tl-button classname="${classname}" content="${title}" eventtype="open-li"></tl-button>`}
        
        `
    }
}

customElements.define('tl-li', Li)