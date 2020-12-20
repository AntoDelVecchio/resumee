import React from "react";
import Lottie from "react-lottie";
import animationData from "./../../lotties/welcome.json";
import { motion } from "framer-motion";

function Home() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  // const welcomeImage = {
  //   width: "50%",
  //   minWidth: "20rem"
  // };

  return (
    <section id="home">
      <article className="dates">
        <h1 className="name">
          antonella <br></br> del vecchio
        </h1>
        <article className="line-between"></article>
        <div className="other-dates">
          <span>Front-end developer</span>
          <span>27 years old</span>
          <span>Mendoza, Argentina</span>
        </div>
      </article>
      {/* <Lottie options={defaultOptions} style={welcomeImage} /> */}
      <motion.div
        className="welcome-image"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
      >
        <Lottie options={defaultOptions} />
      </motion.div>
    </section>
  );
}

export default Home;
