import React, { Component } from 'react';

import Titles from "./components/Titles";

import Form from "./components/Form";

import Weather from "./components/Weather";

const API_KEY = "6ea75ba25c003310f22559bf8029480c";

export default class App extends Component {
  state =  {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`);
    const data = await api_call.json();
    
    if (city && country) {
      console.log(data);
      this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
      });
      }
    
        else {
          this.setState({
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: "Please Enter City and Country "

          });
        };
    }

  render() {
    return (
      <div>
        
        
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather 
        temperature={this.state.temperature} 
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}
        />
      </div>      
    )
  }
}

