import React from "react";
import "./styles/AboutUs.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
const AboutUs = () => {
  return (
    <div id="about">
      <div className="aboutUs_container">
        <Fade top>
          <div className="aboutUs_left">
            <div className="aboutUs_title">
              <h2 className="aboutUs_header">About Us</h2>
            </div>
            <div className="aboutUs_text_container">
              <span className="aboutUs_text">
                Welcome to software X, your number one source for all digital
                assistant. We're dedicated to providing you the best service,
                with a focus on web & app development. We're working to turn our
                passion for coding into a booming company. We hope you enjoy our
                services as much as we enjoy offering them to you.
              </span>
            </div>
          </div>
        </Fade>
        <Zoom>
          <div className="aboutUs_right">
            <div className="aboutUs_img_container">
              <img
                className="aboutUs_img"
                src="about.png"
                alt="Software X about "
              />
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default AboutUs;
