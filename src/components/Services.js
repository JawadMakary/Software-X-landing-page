import React from "react";
import "./styles/Services.css";
const Services = ({ icon, title, text, videoBg }) => {
  return (
    <div className="services" id="services_cont">
      <div className="service_item">
        <div className="service_item_content">
          <div className="service_videos ">
            <video className="service_video" autoPlay loop muted>
              <source src={videoBg} type="video/mp4" />
            </video>
          </div>
          <div className="service_title">
            <div className="service_icon">{icon}</div>
            <h3 className="service_title_header">{title}</h3>
          </div>
          <div className="service_text">
            <span className="service_text_span">{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
