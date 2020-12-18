import React from "react";
import Lottie from "react-lottie";
import animationData from "./../../lotties/welcome.json";

function Home() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const welcomeImage = {
    width: "50%",
    minWidth: "20rem"
  };

  return (
    <section id="home">
      <article className="dates">
        <h1 className="name">
          antonella <br></br> del vecchio
        </h1>
        <article className="line-between"></article>
        <div className="other-dates">
          <span>Web developer in progress</span>
          <span>27 years old</span>
          <span>Mendoza, Argentina</span>
        </div>
      </article>
      <Lottie options={defaultOptions} style={welcomeImage} />
    </section>
  );
}

export default Home;
