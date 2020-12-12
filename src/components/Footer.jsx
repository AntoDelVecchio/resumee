import React from "react";
import workIcon from "../images/work.svg";
import loveIcon from "../images/hearth.svg";

function Footer({ moveToTop }) {
  return (
    <footer className="footer">
      <span className="p">
        {" "}
        &copy; My Portfolio 2020 made with{" "}
        <img className="icon" src={workIcon} alt="work" /> &{" "}
        <img className="icon" src={loveIcon} alt="love" />.
      </span>
    </footer>
  );
}

export default Footer;
