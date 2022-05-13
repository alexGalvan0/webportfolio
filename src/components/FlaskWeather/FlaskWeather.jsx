
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
                    <input className="getWeatherBtn" type='button' value='Get Weather' onClick={getWeathers} /> <br/>
                </form>
                    <input type='text'
                            value={zip}
                            name ='zipCode'
                            onChange={(e)=> getZip(e.target.value)}/>
                <div className="weatherinfo">
                    <p><span>City: </span> {city}</p>
                    <p><span>Temperature: </span> {weather}</p>
                    <p><span>Description: </span> {weatherDescription}</p>
                </div>
            </div>
        </React.Fragment>
    ) 
}
export default FlaskWeather;