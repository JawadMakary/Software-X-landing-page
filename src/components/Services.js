import React from "react";
import "./styles/Services.css";
const Services = ({ icon, title, text }) => {
  return (
    <div id='services_cont' class="wrapper">
      <div class="single-service">
        <div class="social">
          {icon}
        </div>
        <span></span>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Services;
