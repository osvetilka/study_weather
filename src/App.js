import logo from './logo.png';
import './App.css';
import React, {Component} from 'react';

function App() {
  return (
    <div className="App">     
      <Header/>
    </div> 
   /* <div className="App">
      <header className="App-header">
        <img src="./logo" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

// заголовок
class Header extends Component {
  render () {
    return (
      <header className="menu-header" >
      <Logo/>                
        Здесь должно быть меню
      </header>
      /*<div className="header">
        <Logo className="App-logo"/>
        <Menu className="header-menu"/>
      </div>*/
      );
  }
}

// логотип сайта
class Logo extends Component {
  render() {
    return (
      <a href="index.js"><img src={logo} alt="Прогноз погоды"/></a>
    )   
  }
}

// главное меню
/*class MainMenu extends Component {
  render() {
    return (
    
  }
}*/

// пункты меню заголовка
/*class HeaderMenu extends Component {
  render () {
    return
      
  }
}

// поле поиска
class HeaderMenu extends Component {
  render () {
    return
 
  }
}

// Меню периода
class PeriodMenu extends Component {
  render () {
    return
 
  }
}

// Контейнер для оснвной части прогноза погоды
class WeatherContainer extends Component {
  render () {
    return
 
  }
}

// Контейнер для рекламы
class AdsContainer extends Component {
  render () {
    return
 
  }
}

// полный путь населённого пункта
class TownFullPath extends Component {
  render () {
    return
 
  }
}

// заголовок периода
class PeriodHeader extends Component {
  render () {
    return
 
  }
}

// заголовок периода
class PeriodHeader extends Component {
  render () {
    return
 
  }
}
// изменения
*/

export default App;
