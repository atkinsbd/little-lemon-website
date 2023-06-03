import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <img
                    src={require("../assets/lemon.png")}
                    alt="Little lemon logo"
                />
                <nav className="footer-links">
                    <h2>
                        Navigation
                    </h2>
                    <ul>
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

                <nav className="footer-links">
                    <h2>
                        Contact
                    </h2>
                    <ul>
                        <li>
                            <Link to="/">Address</Link>
                        </li>
                        <li>
                            <Link to="/About">Phone</Link>
                        </li>
                        <li>
                            <Link to="/Menu">Email</Link>
                        </li>
                        <li>
                            <Link to="/Reservation">Map</Link>
                        </li>
                    </ul>
                </nav>

                <nav className="footer-links">
                    <h2>
                        Socials
                    </h2>
                    <ul>
                        <li>
                            <Link to="/">Facebook</Link>
                        </li>
                        <li>
                            <Link to="/About">Instagram</Link>
                        </li>
                        <li>
                            <Link to="/Menu">Twitter</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;