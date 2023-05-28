import React from "react";
import "../styles/layout.css"

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
                    src={require("../assets/restauranfood.jpg")}
                    alt="Little lemon restaurant food"
                    width={530}
                    height={627}
                />
            </div>
            <div className="homepage-specials-container">
                Specials
            </div>
            <div className="homepage-reviews-container">
                Reviews
            </div>
            <div className="homepage-story-container">
                Our story
            </div>
        </main>
    );
};

export default Homepage;