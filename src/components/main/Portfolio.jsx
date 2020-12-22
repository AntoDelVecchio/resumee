import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function Portfolio({ link, photo, slug, title, txt }) {

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
      x: 40
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring"
      }
    }
  };

  return (
    <div className="slide project-ctn">
      <div className="caption-project" ref={outerRef} id="outer-box">
      {inViewport && (
        <motion.div
          variants={fadeInContainerWithStagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp}>
            <a
            className="project-link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            title="Check it out"
          >
            <h6 className="title">
              {title} <FontAwesomeIcon icon={faExternalLinkSquareAlt} />{" "}
            </h6>
          </a>
          </motion.div>
        </motion.div>
        )}
      </div>
      <img className="project-image" src={photo} alt={slug} />
      <div className="caption-project" ref={outerRef} id="outer-box">
      {inViewport && (
        <motion.div
          variants={fadeInContainerWithStagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp}>
            <span className="parrafo">{txt}</span>
          </motion.div>
        </motion.div>
      )}
      </div>
    </div>
  );
}

export default Portfolio;
