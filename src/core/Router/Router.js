import {matchRoute} from './utils'

export class Router extends HTMLElement{
    constructor(){
        super();
    };

    get outlet(){
        return this.querySelector('tl-outlet')
    };

    get routes(){
        return Array.from(this.querySelectorAll('tl-route'))
            .map((route) => {
                return {
                    path: route.getAttribute('path'),
                    title: route.getAttribute('title'),
                    component: route.getAttribute('component')
                
                }
            })
    };

    navigate(url){
       const matchedRoute = matchRoute(this.routes, url);
       if(matchedRoute){
            window.history.pushState(null, null, url);
            this.renderPage(matchedRoute)
       }
    };

    renderPage(activRoute){
        const {path, component, title, params = {} } = activRoute; 
        if (component){
            while(this.outlet.firstChild){
                this.outlet.removeChild(this.outlet.firstChild)
            }

            const updateView = () => {
                const view = document.createElement(component);
                document.title = title || document.title;
                for (let key in params){
                    if(key !== '*'){
                        view.setAttribute(key, params[key]);
                    }
                }

                this.outlet.append(view)
            }

            updateView()
        }
    };

    onPopState = () => {
        this.navigate(window.location.pathname)
    };

    onChangeRoute = (evt) => {
        this.navigate(evt.detail.target)

    }

    connectedCallback(){
        this.navigate(window.location.pathname)
        this.addEventListener('popstate', this.onPopState)
        this.addEventListener('change-route',this.onChangeRoute)
    };

    disconnectedCallback(){
        this.removeEventListener('popstate', this.onPopState)
        this.removeEventListener('change-route',this.onChangeRoute)
    };
}




customElements.define('tl-router', Router)