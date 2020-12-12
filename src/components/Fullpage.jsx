import React from "react";
import ReactDOM from "react-dom";
import Home from "../components/main/Home";
import About from "../components/main/About";
import SkillsContainer from "../components/main/SkillsContainer";
import ProjectsCarousel from "../components/main/ProjectsCarousel";
import Contact from "../components/main/Contact";
import ReactFullpage from "@fullpage/react-fullpage";

// function GeneralContainer() {
//   <ReactFullpage
//     //fullpage options
//     licenseKey = {'YOUR_KEY_HERE'}
//     scrollingSpeed = {1000} /* Options here */

//     render={({ state, fullpageApi }) => {
//       return (
//         <div>
//           <Header />
//           <Home />
//           <About />
//           <SkillsContainer />
//           <ProjectsCarousel />
//           <Contact />
//         </div>
//       );
//     }}
//    />
// }
// );

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
      navigationTooltipsColor={["black"]}
      showActiveTooltip={true}
      slidesNavPosition={"bottom"}
      sectionsColor={["#f9f9f9", "#d9d9d9", "#f9f9f9", "#d9d9d9", "#f9f9f9"]}
      // anchors={["home", "about", "skills", "portfolio", "contact"]}
      // sectionSelector={SECTION_SEL}
      // onLeave={this.onLeave.bind(this)}
      // sectionsColor={this.state.sectionsColor}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            {/* <div className="section">
              <p>Section 1 (welcome to fullpage.js)</p>
              <button onClick={() => fullpageApi.moveSectionUp()}>
                Click me to move down
              </button>
            </div> */}
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
