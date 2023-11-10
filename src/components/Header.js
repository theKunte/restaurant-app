import React from "react";
import bannerImage from "../images/restauranfood.jpg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h1>Little Lemon</h1>
          <h2>Seattle</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
          <Link to="/booking">
            <button aria-label="On Click">Reserve Table</button>
          </Link>
        </div>

        <div className="banner-img">
          <img src={bannerImage} alt="restaurant food"></img>
        </div>
      </section>
    </header>
  );
}

export default Header;
