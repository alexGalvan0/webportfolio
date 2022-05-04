
import axios from 'axios';
import React,{ useState } from "react";
import './openWeather.css'


function FlaskWeather(){
    const [weather, getWeather] = useState("");
    const [zip, getZip] = useState(40517)
    const [city, getCity] = useState("");
    const [weatherDescription, getWeatherDescription] = useState(null)


    const getWeathers = async () => {
        let url = `https://weathera-api.herokuapp.com/${zip}`
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
                        <input className="getWeatherBtn" type='button' value='Get Weather' onClick={getWeathers} /> <br/>
                    </label>
                </form>
                    <input type='text'
                            value={zip}
                            name ='zipCode'
                            onChange={(e)=> getZip(e.target.value)}/>
                <div className="weatherinfo">
                    <h3>City: {city}</h3>
                    <h3>Temperature: {weather}</h3>
                    <h3>Weather Description: {weatherDescription}</h3>
                </div>
            </div>
        </React.Fragment>
    ) 
}
export default FlaskWeather;