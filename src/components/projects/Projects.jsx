import React from "react";
import KANYE_QUOTE from "../kanyeApi/Kanye";
import FlaskWeather from "../FlaskWeather/FlaskWeather";
import'./projects.css'

function Projects(){
    return(
        <div className="projects">
            <div className="project-headers">
                <h2 className="api-work">API USAGE EXAMPLES:</h2>
            </div>
                <div className="project-container">
                    <KANYE_QUOTE />
                    <FlaskWeather/> 
                </div>
                <hr/>
                <div className="project-headers">
                    <h2 className="api-work">APPLICATIONS:</h2>
                </div>
                <div className="applications-container">
                    <div className="merchtool">
                        <h3 className="example1">Merch Tool-</h3>
                        <p>Creatined a quoting application using HTML5 CSS3 JAVASCRIPT 
                            for the front end, and PYTHON Flask for the backend. 
                        </p>
                    </div>   
                    <hr/>   
                    <div className="asana">
                        <h3 className="example2">Asana Automations-</h3>
                        <p>Creatined a quoting application using HTML5 CSS3 JAVASCRIPT 
                            for the front end, and PYTHON Flask for the backend. 
                        </p>
                    </div>                
                </div>
        </div>
    )}
export default Projects;