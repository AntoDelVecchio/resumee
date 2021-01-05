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
      showActiveTooltip={false}
      slidesNavPosition={"bottom"}
      sectionsColor={["#f3f3e9", "rgb(220,236,116)", "#f3f3e9", "rgb(220,236,116)", "#f3f3e9"]}
      // sectionsColor={[ "#ebfbbc", "rgb(222,252,98)", "#ebfbbc", "rgb(222,252,98)", "#ebfbbc"]}
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
