import React, { useCallback, useState } from "react";
import logo from "../images/Logo.svg";

function Navbar() {
  const [menuBarOpen, setMenuBarOpen] = useState(false);

  const toggleMenu = () => {
    setMenuBarOpen(!menuBarOpen);
  };

  return (
    <nav className={`navbar ${menuBarOpen ? "open" : ""}`}>
      <a href="/" className="logo">
        <img src={logo} alt="logo"></img>
      </a>

      {/* Update mobile navbar */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/*items */}
      <ul className={`nav-links ${menuBarOpen ? "visible" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/">Order</a>
        </li>
        <li>
          <a href="/">Reservation</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
