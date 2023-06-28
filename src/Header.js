import React from "react";
import './Header.css';
import logo from './logo.png';
import MainMenu from './MainMenu'


// заголовок
/*class Header extends React.Component {
  render() {
    <div className={"header"} >
        <Logo/>                
         Здесь должно быть меню
     </div>
     <div className="header">
          <Logo className="App-logo"/>
          <MainMenu className="header-menu"/>
        </div>
  }
}*/

const Header = () => (
    <div className="header" >
        <Logo className="App-logo"/>                
        <MainMenu/>
     </div>     
)


// логотип сайта
const Logo = () => (
  <a href="index.js"><img src={logo} alt="Прогноз погоды"/></a>
)

  /*class Logo extends React.Component {
    render() {
      return (
        <a href="index.js"><img src={logo} alt="Прогноз погоды"/></a>
      )   
    }
  }*/


export default Header;
