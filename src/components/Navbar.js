import React, { useState } from "react";
import "../styles/navbar.css";
import {useNavigate} from "react-router-dom"
export default function Navbar() {
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const navigate = useNavigate();

    // Function to handle button click
    const handleButtonClick = (routeurl) => {

     navigate(routeurl)
      // You can add your action here when the button is clicked
    };
    return(
        <nav className="nav">
            <div className="nav--container">
                <h1 className="nav--name">Caffè Whisk</h1>
                <div className="btn-class">
                <button className="nav--btn" onClick={() => navigate('/')}>About us</button>
                <button className="nav--btn" onClick={() => navigate('/menu')}>Menu</button>
                <button className="nav--btn" onClick={() => navigate('/reservation')}>Reservation</button>
                </div>
                <input className="nav--search" type="text" placeholder="Search for cafes..."/>
                <img className="nav--clogo" src={process.env.PUBLIC_URL +"/images/svg.png"}></img>
            </div>
        </nav>
    )
}