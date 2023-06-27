import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Homepage = () => {
    return (
        <main>
            <div className="homepage-hero-container-outer">
                <div className="homepage-hero-container">
                    <div className="text-section" aria-label="About Little Lemon">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <Link to={"/Reservation"}><button aria-label="Click to reserve a table">Reserve table</button></Link>
                    </div>
                    <div className="image-section">
                        <img
                            src={require("../../assets/restaurantfood.jpg")}
                            alt="Little lemon restaurant food"
                        />
                    </div>
                </div>
            </div>

            <div className="homepage-specials-container-outer">
                <div className="homepage-specials-container" aria-label="Our current specials">
                    <h1>Specials</h1>
                    <div className="scrollable-div">
                        <div className="card1">
                            <img
                                src={require("../../assets/greek salad.jpg")}
                                alt="Greek salad special"
                            // width={"100%"}
                            // height={"50%"}
                            />
                            <h2 style={{ float: "left" }}>Greek Salad</h2> <h2 style={{ float: "right" }}>$12.99</h2>
                            <div style={{ clear: "both" }}></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                            <Link to={"/Order"}><h3>Order a delivery</h3></Link>
                        </div>
                        <div className="card2">
                            <img
                                src={require("../../assets/bruschetta.jpeg")}
                                alt="Bruschetta special"
                            // width={"100%"}
                            // height={"50%"}
                            />
                            <h2 style={{ float: "left" }}>Bruschetta</h2> <h2 style={{ float: "right" }}>$10.99</h2>
                            <div style={{ clear: "both" }}></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                            <Link to={"/Order"}><h3>Order a delivery</h3></Link>
                        </div>
                        <div className="card3">
                            <img
                                src={require("../../assets/lemon dessert.jpg")}
                                alt="Lemon dessert special"
                            // width={"100%"}
                            // height={"50%"}
                            />
                            <h2 style={{ float: "left" }}>Lemon dessert</h2> <h2 style={{ float: "right" }}>$5.99</h2>
                            <div style={{ clear: "both" }}></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                            <Link to={"/Order"}><h3>Order a delivery</h3></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="homepage-reviews-container-outer">
                <div className="homepage-reviews-container" aria-label="Reviews from our customers">
                    <h1>Reviews</h1>
                    <div className="scrollable-div">
                        <div className="card1">
                            <div className="gold-stars">
                                <img src={require("../../assets/gold-star.png")} alt="Gold star" />
                                <img src={require("../../assets/gold-star.png")} alt="Gold star" />
                                <img src={require("../../assets/gold-star.png")} alt="Gold star" />
                                <img src={require("../../assets/gold-star.png")} alt="Gold star" />
                                <img src={require("../../assets/gold-star.png")} alt="Gold star" />
                            </div>
                            <h2>Andrew</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                        </div>
                        <div className="card2">
                            <div className="gold-stars">
                                <img src={require("../../assets/gold-star.png")} alt="Gold star" />
                                <img src={require("../../assets/gold-star.png")} alt="Gold star" />
                                <img src={require("../../assets/gold-star.png")} alt="Gold star" />
                                <img src={require("../../assets/gold-star.png")} alt="Gold star" />
                            </div>
                            <h2>Alice</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                        </div>
                        <div className="card3">
                            <div className="gold-stars">
                                <img src={require("../../assets/gold-star.png")} alt="Gold star" />
                                <img src={require("../../assets/gold-star.png")} alt="Gold star" />
                                <img src={require("../../assets/gold-star.png")} alt="Gold star" />
                                <img src={require("../../assets/gold-star.png")} alt="Gold star" />
                                <img src={require("../../assets/gold-star.png")} alt="Gold star" />
                            </div>
                            <h2>Jamie</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="homepage-story-container-outer">
                <div className="homepage-story-container">
                    <div className="text-section" aria-label="More about us">
                        <h1>
                            Our story
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div className="image-section">
                        <img src={require("../../assets/Mario and Adrian A.jpg")} alt="Chefs at work" width={"325px"} className="top-image" />
                        <img src={require("../../assets/Mario and Adrian B.jpg")} alt="Chefs at work" width={"325px"} className="bottom-image" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Homepage;