import React from "react";
import "./Header.css";


const Header = props => (
    <nav className="navbar navbar-default">
        <ul>
        <li className = "brand">Clicky Game</li>
        <li>Click on an image to start!</li>
        <li>Current Score: {props.score} | Highest Score: {props.highScore} </li>
        </ul>
    </nav>
);

export default Header;
