import { appEvents } from "../../../constants/appEvents";
import { Component } from "../../../core";
import '../../malecules'

export class Slider extends Component{
    constructor() {
        super();
        this.state = {
          offset: 0,
        };
      }
    
      componentDidMount() {
        window.addEventListener(appEvents.next, (this.onNext));
      }
    
      onNext = () => {
        const screen = window.screen.width
        console.log('fggfg');
        this.setState((state)=>{
            return{
                ...state,
                    offset : state.offset + screen,
                   }
            })
            document.querySelector('.descriptionpage').style.left = -this.state.offset + 'px';      
        }
      
    

    render(){
        return `
        <div class="description-box">
            <div class="descriptionpage" >
                <tl-firstdescription></tl-firstdescription>
                <tl-seconddescription></tl-seconddescription>
                <tl-thirddescription></tl-thirddescription>
            </div>
        </div>    
        `
    }
}

customElements.define('tl-slider', Slider)