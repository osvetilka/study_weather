import React from "react";
import './SubMenuCont.css';



const SubMenuCont = () => (
    <div className="sub-menu-cont" >
        <Searchbar cityName='Озёрск1'/>                
        <SubMenu/>
     </div>     
)

const SubMenu = () => (
    <div class="subnav">
        <div class="subnav-menu">
            <a href="" class="subnav-menu-item">Сейчас</a> 
            <a href="" class="subnav-menu-item">Сегодня</a> 
            <a href="" class="subnav-menu-item">Завтра</a>
            <a href="" class="subnav-menu-item">Завтра</a>
            <a href="" class="subnav-menu-item">10&nbsp;дней</a> 
            <a href="" class="subnav-menu-item">Месяц</a>         
        </div>
    </div>   
)

const Searchbar = ({cityName}) => (
    <div class="search">
        <input type="search" class="search-input" placeholder={cityName} autocomplete="off"/>         
    </div>    
)

 

export default SubMenuCont;

