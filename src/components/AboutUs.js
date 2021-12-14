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
                hello world hello world hello world hello world hello world
                hello world hello world hello world hello world hello world
                hello world hello world hello worldv hello world hello world
                hello world hello world hello world hello world hello world
                hello world
                <br /> Sincerely,
                <br /> name
              </span>
            </div>
          </div>
        </Fade>
        <Zoom>
          <div className="aboutUs_right">
            <div className="aboutUs_img_container">
              <img
                className="aboutUs_img"
                src="assets/images/about.png"
                alt="expatservicesAboutUs"
              />
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default AboutUs;
