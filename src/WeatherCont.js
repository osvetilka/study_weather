import React from "react";
import './WeatherCont.css';

// доступ к API сервиса погоды
const api = {
    key: 'c7616da4b68205c2f3ae73df2c31d177',
    base: 'http://api.openweathermap.org/data/2.5/'
  }

const WeatherCont = () => (
    <div className="weather-cont" >
        <Weather/>                        
     </div>     
)

const Weather = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
    return (
    <div className="weather" >
        <div>
        Сегодня {date}
        </div>
        Тут должен быть прогноз                      
     </div>     
    )
}

// форматирование даты
/*const format_date = (d) => {
    let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }*/

export default WeatherCont;