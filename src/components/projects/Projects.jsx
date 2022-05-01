import React from "react";
import KANYE_QUOTE from "../kanyeApi/Kanye";
import OpenWeather from '../openWeatherApi/OpenWeather'
import'./projects.css'

function Projects(){
    return(
        <div className="projects">
            <div className="project-headers">
                <h2 className="api-work">API USAGE EXAMPLES:</h2>
            </div>
                <div className="project-container">
                    <KANYE_QUOTE />
                    <OpenWeather/>
                </div>
        </div>
    )}
export default Projects;