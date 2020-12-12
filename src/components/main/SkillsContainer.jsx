import React from "react";
import Skill from "./Skill";
import { skillsData } from "../../data";

function SkillsContainer() {
  return (
    <div id="skills">
      <h2 className="title-section">skills</h2>
      <p className="p about-text">
        Throughout my training I have learned to use different tools such as:
      </p>
      <div className="skills-container">
        {skillsData.map((skillData) => (
          <Skill key={skillData.name} {...skillData} />
        ))}
      </div>
    </div>
  );
}

export default SkillsContainer;
