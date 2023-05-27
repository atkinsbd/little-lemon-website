import React from "react";
import {Link} from "react-router-dom";
import "../styles/navbar.css"

const Nav = () => {
    return (
        <nav className="nav-links">
            <ul>
                <li>
                    <img 
                        src={require("../assets/Logo.svg").default} 
                        alt="Little lemon logo"
                        width={292}
                        height={79.12}
                    />
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Menu">Menu</Link>
                </li>
                <li>
                    <Link to="/Reservation">Reservation</Link>
                </li>
                <li>
                    <Link to="/Order">Order online</Link>
                </li>
                <li>
                    <Link to="/Login">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;