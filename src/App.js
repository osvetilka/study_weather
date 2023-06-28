
import './App.css';
import React, {Component} from 'react';
import Header from './Header'
import SubMenuCont from './SubMenuCont'
import WeatherCont from './WeatherCont'

function App() {
  return (
    <div className="App">     
      <Header/>
      <SubMenuCont/>
      <WeatherCont/>
    </div> 
  
  );
}



export default App;
