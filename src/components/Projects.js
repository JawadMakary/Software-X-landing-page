import React from "react";
import "./styles/Projects.css";
function Projects({ websiteLink, imageUrl,title }) {
  return (
    <div className="projects" id="projects">
      <a className="project_link" href={websiteLink} target="_blank" rel="noreferrer">
        <div className="single_project_container">
          <img className="project_img" src={imageUrl} alt="project_image" />
          <p className="project_title">{title}</p>
        </div>
      </a>
    </div>
  );
}

export default Projects;
