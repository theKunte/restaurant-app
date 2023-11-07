import React from "react";
import logo from "../images/Logo.svg";

function Footer() {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={logo} alt="" />
          <p>
            We are a family-owned Mediterranean Restaurant, focused on
            traditional recipes served with a modern twist
          </p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul className="footer-ul">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Reservations</a>
            </li>
            <li>
              <a href="/">Order Online</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul className="footer-ul">
            <li>
              Address: <br /> 1st Ave Seattle, WA
            </li>
            <li>
              Phone: <br /> +206 124 4320
            </li>
            <li>
              Email:
              <br />
              littlelemon@lemon.com
            </li>
          </ul>
        </div>
        <div>
          <h3>CONNECT WITH US</h3>
          <ul className="footer-ul">
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
