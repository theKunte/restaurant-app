import React from "react";
import logo from "../images/littlelemonlogo2.png";

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
          <h3>HOURS</h3>
          <ul className="footer-ul">
            <li>
              Hours:
              <br />
              Tuesday-Sunday: 3:00PM-10:00PM
            </li>
          </ul>
        </div>

        <div>
          <h3>CONTACT</h3>
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
          <h3>CONNECT WITH US!</h3>
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
      <div>
        <p className="footer-copyright">
          © 2023 Little Lemon Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
