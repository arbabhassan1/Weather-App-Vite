import React, { useState } from 'react'
import './App.css'
import logo from './assets/icon.png'
// import search from './assets/search.png'
import icon from './assets/react.svg'
import cloud_icon from './assets/cloud.png' 
import wind_icon from './assets/wind.png'
import humidity_icon from './assets/humidity.png'
import clear_icon from './assets/clear.png'
import drizzle_icon from './assets/drizzle.png'
import rain_icon from './assets/rain.png'
import snow_icon from './assets/snow.png'
import wind from './assets/wind.png'
import Copyright from './Copyright'


const App = () => {


  let [w_icon,setiocn]=useState(cloud_icon);

let api_key="0e61542ad00a6b121df4376045f6ef85"

const search= async ()=>{
  const element =document.getElementsByClassName("cityInput");
  if(element[0].value===""){
    return 0;
  }
  let url =`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`

  let response = await fetch(url);
  let data= await response.json();
  const humidity=document.getElementsByClassName("humidity-value");
  const wind =document.getElementsByClassName("wind-rate");
  const temperature =document.getElementsByClassName("weather-temp");
  const location =document.getElementsByClassName("weather-location");


  humidity[0].innerHTML=data.main.humidity+"%";
  wind[0].innerHTML=data.wind.speed+"km/h";
  temperature[0].innerHTML=data.main.temp+"°C";
  location[0].innerHTML=data.name;

  if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
  {
    setiocn(clear_icon);
  }
  else if(data.weather[0].data==="02d" || data.weather[0].icon==="02n"){
    setiocn(cloud_icon);
  }
  else if(data.weather[0].data==="03d" || data.weather[0].icon==="03n"){
    setiocn(drizzle_icon);
  }
  else if(data.weather[0].data==="04d" || data.weather[0].icon==="04n"){
    setiocn(drizzle_icon);
  }

  else if(data.weather[0].data==="09d" || data.weather[0].icon==="09n"){
    setiocn(rain_icon);
  }
  else if(data.weather[0].data==="10d" || data.weather[0].icon==="10n"){
    setiocn(rain_icon);
  }
  else if(data.weather[0].data==="13d" || data.weather[0].icon==="13n"){
    setiocn(snow_icon);
  }
  else{
    setiocn(clear_icon);
  }









}


  return (
    <>
      <div className="main">

        <div className="topbar">
          {/* <img src={logo} alt="Logo" id='logo' /> */}
          <div className="title"> Weather App</div>
        </div>
        <div className="bar">
          <input type="text" placeholder='Search' className='cityInput'/>
          <img src={icon} alt="" id='search-btn'  onClick={()=>{search()}}/>
        </div>
        <div className="weather-img">
          <img src={w_icon} alt="" />
        </div>
        <div className="weather-temp">
        34°C
        </div>
        <div className="weather-location">
          London
        </div>
        <div className="data-container">
          <div className="element">
            <img src={humidity_icon} alt="" className='icon'/>
            <div className="data">
              <div className="humidity-value">
                64%
              </div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={wind_icon} alt="" className='icon'/>
            <div className="data">
              <div className="wind-rate">
                18 km/h
              </div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
        <Copyright/>

      </div>
    </>
  )
}

export default App
