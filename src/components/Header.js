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
            Welcome to Little Lemin, where every meal is a burst of sunshine!
            Our restaurant brings you the freshest flavors and vibrant dishes,
            all infused with a touch of citrus magic. Whether you're here for a
            hearty breakfast, a leisurely lunch, or a delightful dinner, you'll
            find a menu crafted to brighten your day and tantalize your taste
            buds.
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
