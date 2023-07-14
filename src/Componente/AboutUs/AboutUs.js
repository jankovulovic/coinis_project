import React from "react";
import Contact from "../Contact/Contact";

import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div className="container">
        <div className="imageContainer">
          <div className="imageWrapper">
            <img
              src="https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="About Us"
              className="image"
            />
          </div>
          <h2 className="overlayText">About Us</h2>
        </div>
        <div className="content">
          <p className="description">
            Welcome to <span className="bold">Gitarista</span>, a unique
            platform designed for musicians, singers, and music lovers alike. We
            offer a vast collection of lyrics and chords for a wide range of
            songs across various genres.
          </p>
          <p className="description">
            At <span className="bold">Gitarista</span>, we strive:
          </p>
          <ul className="bulletList">
            <li>
              To stay at the forefront of technological advancements in the
              music industry
            </li>
            <li>
              To evolve our platform to incorporate innovative features, such as
              interactive chord visualizations and integration with music
              streaming services
            </li>
          </ul>
          <p className="description">
            What stand out by providing top-notch content and embracing modern
            design. Our intuitive and user-friendly interface ensures a seamless
            and enjoyable experience.
          </p>
          <p className="description">
            Thank you for joining us on your musical journey.
          </p>

          <h2 className="guideHeading">Guide for Adding New Songs:</h2>
          <ol className="guideList">
            <li>Make a new account or login to your existing account</li>
            <li>Go to the "Add Your Music" section</li>
            <li>Fill out the form with the required song details</li>
            <li>
              Provide the chords for the song following the specified format
            </li>
          </ol>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default AboutUs;
