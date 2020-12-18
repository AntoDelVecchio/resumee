import React from "react";
import Portfolio from "./Portfolio";
import { portfolioData } from "../../portfolioData";
import Lottie from "react-lottie";
import animationData from "./../../lotties/arrow.json";

function ProjectsCarousel() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const arrowImage = {
    width: "50%",
    maxWidth: "5rem",
    height: "5rem"
  };

  return (
    <div className="slide" id="portfolio">
      <h2 className="title-section porftolio-title">portfolio</h2>
      <p className="p about-text">I worked in such projects as:</p>
      <Lottie options={defaultOptions} style={arrowImage} />
      {portfolioData.map((projectData) => (
        <Portfolio key={projectData.title} {...projectData} />
      ))}
    </div>
  );
}

export default ProjectsCarousel;
