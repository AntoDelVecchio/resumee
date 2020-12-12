import React from "react";

function Header() {
  return (
    <div className="header">
      <input id="menu-btn" className="menu-btn" type="checkbox" />
      <label className="menu-icon" htmlFor="menu-btn" id="menuBtn">
        <span className="nav-icon"></span>
      </label>
      <nav className="nav-bar">
        <ul id="myMenu">
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#about">about me</a>
          </li>
          <li>
            <a href="#skills">skills</a>
          </li>
          <li>
            <a href="#portfolio">portfolio</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
