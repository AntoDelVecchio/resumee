import React from "react";
import Footer from "../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <section id="contact">
      <h2 className="title-section">contact</h2>
      <p className="p introduction width" style={{ fontWeight: 600 }}>
        If you want to know more <br /> you are welcome!
      </p>
      <button className="contact-btn">
        <a className="email" href="mailto:antodelvecchio9@gmail.com">
          Send email
        </a>
      </button>
      <div className="social-networks">
        <button className="btn">
          <a
            className="network-link"
            href="https://www.linkedin.com/in/antonella-del-vecchio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </button>
        <button className="btn">
          <a
            className="network-link"
            href="https://github.com/AntoDelVecchio"
            target="_blank"
            rel="noopener noreferrer"
          >
             <FontAwesomeIcon icon={faGithub} />
          </a>
        </button>
      </div>
      <p className="p introduction width color-txt">
        Follow me on <br /> Linkedin and Github.
      </p>
      <Footer />
    </section>
  );
}

export default Contact;
