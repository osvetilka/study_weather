
import './App.css';
import React, {Component} from 'react';
import Header from './Contents/Header'
import SubMenuCont from './Contents/SubMenuCont'
import WeatherCont from './Contents/Weather/WeatherCont'
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">  
      <Header/>
      <SubMenuCont/>

      <BrowserRouter>        
          <WeatherCont/>                        
      </BrowserRouter>


        
        
    </div> 
  
  );
}



export default App;
