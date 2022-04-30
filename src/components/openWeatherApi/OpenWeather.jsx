

import axios from 'axios';
import React,{ useState } from "react";
import './openWeather.css'


function OpenWeather(){
    const [weather, getWeather] = useState("");
    const [zip, getZip] = useState(40517)
    const [city, getCity] = useState("");
    const [weatherDescription, getWeatherDescription] = useState("")


    const getWeathers = async () => {
        let apiKey = '933f7703450958683b430c05ee91f80b';
        let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}&units=imperial`
        const response = await axios.get(url)
            getWeather(response.data.main.temp);
            getCity(response.data.name);
            getWeatherDescription(response.data.weather[0].description);
            }
        
    
    return(
        <React.Fragment>
            <div className="zipForm">
                <form>
                    <label>
                        Enter ZipCode: <br/> 
                        <input className="getWeatherBtn" type='button' value='Get Weather' onClick={getWeathers} /> <br/>
                    </label>
                    <input type='text'
                            value={zip}
                            name ='zipCode'
                            onChange={(e)=> getZip(e.target.value)}/>
                </form>
                <h1>City: {city}</h1>
                <h1>Temperature: {weather}</h1>
                <h1>Weather Description: {weatherDescription}</h1>
            </div>
        </React.Fragment>
    ) 
}
export default OpenWeather;