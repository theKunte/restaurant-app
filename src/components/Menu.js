import React from "react";
import menuItmes from "../menuItems";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This Weeks Specials!</h2>
        <button>Order Menu</button>
      </div>

      {/* menu items */}
      <div className="cards">
        {menuItmes.map((recipe) => (
          <div key={recipe.id} className="menu-items">
            <img src={recipe.image} alt="" />
            <div className="menu-content">
              <div className="heading">
                <h5>{recipe.title}</h5>
                <p>{recipe.price}</p>
              </div>
              <p>{recipe.description}</p>
              <button className="orderbtn">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
