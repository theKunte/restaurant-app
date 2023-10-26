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
          <p>We are a family restaurant....</p>
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
