import React from "react";
import './contact.css'

function Contact(){
    return(
        <div className="cotact-container">
            <br/>
            <br/>
            
            <div className="email">
                <h6>email:</h6>
                <h7 className="email"><a href="mailto:galvan.alex121@gmail.com" target="_blank" >galvan.alex121@gmail.com</a></h7>
            </div>
            <div className="phoneNumber">
                <h6>Phone Number:</h6>
                <h7 className="phone"><a href="tel:8597979311" target="_blank" >8597-797-9311</a></h7>
            </div>
        </div>
    )
};
export default Contact;