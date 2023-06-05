import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdClose } from 'react-icons/md';

const Nav = () => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    const ref = useRef();
    useEffect(() => {
        const handler = (event) => {
            if (
                hamburgerOpen &&
                ref.current &&
                !ref.current.contains(event.target)
            ) {
                setHamburgerOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener('mousedown', handler);
        };
    }, [hamburgerOpen]);

    return (
        <nav>
            <div className="nav-links">
                <Link to="/" style={{ height: "84px" }}>
                    <img
                        src={require("../assets/Logo.svg").default}
                        alt="Little lemon logo"
                        width={292}
                        height={79.12}
                    />
                </Link>
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
            </div>

            <div className="nav-links-reduced">
                <Link to="/" style={{ height: "84px" }}>
                    <img
                        src={require("../assets/Logo.svg").default}
                        alt="Little lemon logo"
                        width={292}
                        height={79.12}
                    />
                </Link>
                {hamburgerOpen ?
                    <MdClose onClick={toggleHamburger} /> :
                    <RxHamburgerMenu onClick={toggleHamburger} />
                }
                <div ref={ref} className={`hamburger${hamburgerOpen ? ' open' : ''}`}>
                    <ul>
                        <li>
                            <Link to="/" onClick={toggleHamburger}>Home</Link>
                        </li>
                        <li>
                            <Link to="/About" onClick={toggleHamburger}>About</Link>
                        </li>
                        <li>
                            <Link to="/Menu" onClick={toggleHamburger}>Menu</Link>
                        </li>
                        <li>
                            <Link to="/Reservation" onClick={toggleHamburger}>Reservation</Link>
                        </li>
                        <li>
                            <Link to="/Order" onClick={toggleHamburger}>Order online</Link>
                        </li>
                        <li>
                            <Link to="/Login" onClick={toggleHamburger}>Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;