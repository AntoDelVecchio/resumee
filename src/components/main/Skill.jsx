import React, { useEffect, useRef, useState } from "react";
// import Rater from "react-rater";
// import "react-rater/lib/react-rater.css";
import { motion } from "framer-motion";

function Skill({ name, image, slug, status }) {

  const outerRef = useRef(null);
  const [inViewport, setInViewport] = useState(true);

  useEffect(() => {
    const onChange = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === outerRef.current) {
          if (entry.isIntersecting) {
            setInViewport(true);
          } else {
            setInViewport(false);
          }
        }
      });
    };
    const observer = new IntersectionObserver(onChange, { threshold: 0.5 });
    observer.observe(outerRef.current);
  }, [outerRef]);

  // Framer motion animations
  const fadeInContainerWithStagger = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.25,
        type: "tween",
        ease: "easeIn",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring"
      }
    }
  };

  return (
    <div className="image-container" ref={outerRef} id="outer-box">
      {inViewport && (
        <motion.div
          variants={fadeInContainerWithStagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp}>
            <img className="tech-icon" src={image} alt={slug} />
            <figcaption className="image-txt">{name}</figcaption>
            {/* <Rater rating={status} total={5} interactive={false} className="star" /> */}
          </motion.div>
        </motion.div>
        )}
    </div>
  );
}

export default Skill;
