import React, { Component } from 'react';
import './App.css';
import './Component/form.css';
import './Component/weather.css';
import Form from './Component/form';
import Weather from './Component/weather';

// const API_KEY = "e36ed364400282e43250b6c4c0274d44";
// const API_KEY = "b0b3e3b4523d9c98bae8ee944b255a7f";
const API_KEY = "701589be6fceecbba3d81a2819da41c3";
// http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
class App extends Component {

  state = {
    temperature:"",
    city:"",
    country:"",
    humidity:"",
    description:"",
    msg:"Which City ?",
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    // const country = e.target.elements.country.value;

    const api = (await fetch(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`))
    // const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const data = await api.json();
    
    if (city){
      this.setState({
        temperature:data.current.temperature,
        city:data.location.name,
        country:data.location.country,
        humidity:data.current.humidity,
        description:data.current.weather_descriptions[0],
        msg:""
        })
    }else{
      this.setState({
        temperature:"",
        city:"",
        country:"",
        humidity:"",
        description:"",
        msg:"Please Enter City"
        })
    }
    
}
  change = ()=>{

    let app1 = document.querySelector(".App-1")
    let app2 = document.querySelector(".App-2")

    // app2.style.transform = "rotateY(0deg)"
    // app2.style.backfaceVisibility = "visible"
    // app2.style.transition = "0.5s ease-in"

    // app1.style.transform = "rotateY(180deg)"
    // app1.style.backfaceVisibility = "hidden"
    app1.style.transform = "translateY(-1000px)"
    app1.style.transition = "2s ease-in"


  }

  
  render() { 

    return (

      <div className="father">
        <div className="app1">
          <div></div>
        </div>
        <div className="App">
            <div className="App-1">
              <button onClick={this.change}>Get Weather</button>
            </div>
            <div className="App-2">
            
                <h2>Weather App</h2>
                <Form getWeather={this.getWeather}/>
                <Weather
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  msg={this.state.msg}
                /> 
            
            </div>
        </div>
        <div className="app2">
          <div></div>
        </div>
      </div>
    );
  }
}
export default App;

