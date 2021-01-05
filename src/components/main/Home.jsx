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

  return (
    <section id="home">
      <article className="dates">
        <h1 className="name">
          antonella del vecchio
        </h1>
        <motion.div 
          className="other-dates"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 10
          }}
        >
          <span>Front-end developer</span>
          <span>27 years old</span>
          <span>Mendoza, Argentina</span>
        </motion.div>
      </article>
      <motion.div
        className="welcome-image"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 50,
          mass: 20
        }}
      >
        <Lottie options={defaultOptions} />
      </motion.div>
    </section>
  );
}

export default Home;
