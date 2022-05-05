import React from "react";
import './about.css'

function About(){
    return(
        <div className="info-container">
            <div className="about">
                <h4 className="about-header">ABOUT ME</h4>
                <p className="about-msg-content">My name is Alex Galvan. I have been develpoing applications 
                                                for about over 2 years now. I started out building tools to make
                                                coworker's life easier. I am starting the Awesome Inc bootcamp in
                                                the fall of 2022 and am eager to get learning new tech! 
                                                ps: I am the one on the right! The left is my partner 
                                                in crime & my wife Celine.
                </p>
            </div>
            <img src={require('./assets/profile-pic.jpg')} alt="no Pics"/>
        </div>
    )
}
export default About;