import React from 'react';

import './styles/Form.css'

 const Form = props => {
    return (
        
        <form onSubmit={props.getWeather}>
            <input id="city" type="text" name="city" placeholder="CityName:"/>
            <input id="country" type ="text" name="country" placeholder="CountryName:"/>
            <button id="btn-weather">Get Weather Info</button>
        </form>
        
    )
 }
 
export default Form;
