import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";

function Portfolio({ link, photo, slug, title, txt }) {
  return (
    <div className="slide project-ctn">
      <div className="caption-project">
        <a
          className="project-link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          title="visit website"
        >
          <h6 className="title">
            {title} <FontAwesomeIcon icon={faExternalLinkSquareAlt} />{" "}
          </h6>
        </a>
        <span className="parrafo">{txt}</span>
      </div>
      <img className="project-image" src={photo} alt={slug} />
    </div>
  );
}

export default Portfolio;
