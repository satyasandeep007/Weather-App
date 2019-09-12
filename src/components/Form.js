import React from 'react'
import './styles/Form.css'

 const Form = props => {
    return (
        
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="CityName:"/>
            <input type="text" name="country" placeholder="CountryName:"/>
            <button>Get Weather Info</button>
        </form>
        
    )
 }
 
export default Form;
