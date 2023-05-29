import React from "react";
import "../styles/layout.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Homepage = () => {
    return (
        <main>

            <div className="homepage-hero-container">
            </div>
            <div className="homepage-hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button>Reserve table</button>
            </div>
            <div className="homepage-hero-image">
                <img
                    src={require("../assets/restaurantfood.jpg")}
                    alt="Little lemon restaurant food"
                    width={530}
                    height={627}
                />
            </div>

            <div className="homepage-specials-container">
            </div>
            <div className="homepage-specials-title">
                <h1>Specials</h1>
            </div>
            <div className="homepage-specials-card1">
                <img
                    src={require("../assets/greek salad.jpg")}
                    alt="Greek salad special"
                    width={"100%"}
                    height={"50%"}
                />
                <h2 style={{float:"left"}}>Greek Salad</h2> <h2 style={{float:"right"}}>$12.99</h2>
                <div style={{clear: "both"}}></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                <h3>Order a delivery</h3>
            </div>
            <div className="homepage-specials-card2">
                <img
                    src={require("../assets/bruschetta.jpeg")}
                    alt="Bruschetta special"
                    width={"100%"}
                    height={"50%"}
                />
                <h2 style={{float:"left"}}>Bruschetta</h2> <h2 style={{float:"right"}}>$10.99</h2>
                <div style={{clear: "both"}}></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                <h3>Order a delivery</h3>
            </div>
            <div className="homepage-specials-card3">
                <img
                    src={require("../assets/lemon dessert.jpg")}
                    alt="Lemon dessert special"
                    width={"100%"}
                    height={"50%"}
                />
                <h2 style={{float:"left"}}>Lemon dessert</h2> <h2 style={{float:"right"}}>$5.99</h2>
                <div style={{clear: "both"}}></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                <h3>Order a delivery</h3>
            </div>

            <div className="homepage-reviews-container">
            </div>
            <h1 className="homepage-reviews-title">
                Reviews
            </h1>
            <div className="homepage-reviews-card1">
                <div className="gold-stars">
                    <FontAwesomeIcon icon={faStar} style={{color:"#F4CE14", fontSize:"64px"}} />
                </div>
                <h2>Andrew</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
            </div>
            <div className="homepage-story-container">
                Our story
            </div>
        </main>
    );
};

export default Homepage;