import React from "react";
import{ useNavigate } from 'react-router-dom'
import './nav.css';

function Nav (){
    let navigate = useNavigate();
    return(
        <div>
            <nav className="nav-container">
                <ul>
                    <li className="nav-option option-one" onClick={() => {navigate('/')}}>Home</li>
                    <li className="nav-option option-two" onClick={() => {navigate('/projects')}}>Projects</li>
                    <li className="nav-option option-three" onClick={() => {navigate('/contact')}}>Contact</li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav;