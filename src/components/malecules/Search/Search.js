import { Component } from "../../../core";
import './search.scss'

export class Search extends Component{
 constructor(){
    super();
    
 }


 render(){
    return`
    <div class="div-search">
        <img src="/src/assets/icons/icon _close outline_.png" type="button" class="clouse">
        <input type="text" class="search-input" placeholder="Введите город" name="city" >
        <tl-button classname="search" content="Поиск"></tl-button>
        
        
        <input type="text" class="search-input" placeholder="Введите имя пользователя" name="user" >
        
        <tl-button classname="search" content="Поиск"></tl-button>
        
    
    </div>
    
    `
 }
}

customElements.define('tl-search', Search)