import React from "react";
// import Rater from "react-rater";
// import "react-rater/lib/react-rater.css";

function Skill({ name, image, slug, status }) {
  return (
    <figure className="image-container">
      <img className="tech-icon" src={image} alt={slug} />
      <figcaption className="image-txt">{name}</figcaption>
      {/* <Rater rating={status} total={5} interactive={false} className="star" /> */}
    </figure>
  );
}

export default Skill;
