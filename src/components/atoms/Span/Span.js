import { Component } from "../../../core";

export class Span extends Component{
    constructor(){
        super();
    };

    componentDidMount(){
        this.addEventListener('click',() => {
            this.dispatch(this.props.eventtype, { target: this.props.to })
           
        })
    };

    static get observedAttributes(){
        return ['classname', 'content', 'eventtype','to']
    }

    render(){
        const {classname, content} = this.props
        return`
        <span class = "${classname}-span">${content}</span>
        `
    }
}

customElements. define('tl-span',Span)