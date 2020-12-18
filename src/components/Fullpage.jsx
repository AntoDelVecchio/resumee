import React from "react";
import ReactDOM from "react-dom";
import Home from "../components/main/Home";
import About from "../components/main/About";
import SkillsContainer from "../components/main/SkillsContainer";
import ProjectsCarousel from "../components/main/ProjectsCarousel";
import Contact from "../components/main/Contact";
import ReactFullpage from "@fullpage/react-fullpage";

function Fullpage() {
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={950} /* Options here */
      navigation
      slidesNavigation={true}
      controlArrows={false}
      navigationTooltips={[
        "Home",
        "About me",
        "Skills",
        "Portfolio",
        "Contact"
      ]}
      showActiveTooltip={true}
      slidesNavPosition={"bottom"}
      sectionsColor={["#FFEFEF", "#FF7F7F", "#FFEFEF", "#FF7F7F", "#FFEFEF"]}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Home />
            </div>
            <div className="section">
              <About />
            </div>
            <div className="section">
              <SkillsContainer />
            </div>
            <div className="section">
              <ProjectsCarousel />
            </div>
            <div className="section">
              <Contact />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

ReactDOM.render(<Fullpage />, document.getElementById("root"));

export default Fullpage;
