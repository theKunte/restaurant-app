import React from "react";
import menuItmes from "../menuItems";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This weeks specials</h2>
        <button>Order Menu</button>
      </div>

      {/* menu items */}
      <div>
        {menuItmes.map((recipe) => (
          <div key={recipe.id}>
            <img src={recipe.image} alt=""></img>
            <div>
              <h5>{recipe.title}</h5>
              <p>{recipe.price}</p>
            </div>
            <p>{recipe.description}</p>
            <button className="orderBtn">Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
