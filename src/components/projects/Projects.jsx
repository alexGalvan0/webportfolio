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
                <hr />
                <div className="project-headers">
                    <h2 className="api-work">APPLICATIONS:</h2>
                </div>
                <div className="applications-container">
                    <div className="merchtool">
                        <h3 className="example1">Merch Tool-</h3>
                        <p>Created a quoting application using HTML5 CSS3 JAVASCRIPT 
                            for the front end, and PYTHON Flask for the backend. 
                        </p>
                    </div>   
                    <hr/>   
                    <div className="asana">
                        <h3 className="example2">Asana Automations-</h3>
                        <p>Scripted multiple pluggins for a project management software called Asana. Automations have been in production for over a year and are now part of evreyday process.</p>
                            <ul>
                                <h6>Automations include:</h6>
                                <li>Ticket approval notification.</li>
                                <li>Item orderd notification with Estiamted time of arrival</li>
                                <li>Recurring task cleanups</li>
                            </ul>
                        
                    </div>                
                </div>
                <hr/> 
                <div className="appscript">
                    <h3 className="example3">Google Appscript Applications-</h3>
                    <p>Created a Volunteer Tracking Application using JAVASCRIPT inside 
                        Google applicaions that facilitated day to day operations in multiple
                        teams across an organization. 
                    </p>
                </div> 
        </div>
    )}
export default Projects;