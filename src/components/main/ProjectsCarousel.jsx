import React from "react";
import Portfolio from "./Portfolio";
import { portfolioData } from "../../portfolioData";

function ProjectsCarousel() {
  return (
    <div id="portfolio">
      <h2 className="title-section porftolio-title">portfolio</h2>
      {portfolioData.map((projectData) => (
        <Portfolio key={projectData.title} {...projectData} />
      ))}
    </div>
  );
}

export default ProjectsCarousel;
