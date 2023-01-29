import React from "react";
import { NavLink } from "react-router-dom";

const VendingMachine = () => {
  return (
    <>
      <div className="vMachine row px-4">
        <div className="col-9">
          <div className="items">
            <img
              className="col itemPic"
              src="https://images.freshop.com/00050000292899/4d71d0185a0833e74fc7b586f1e2e646_large.png"
              alt="cat treats"
            />
            <img
              className="col itemPic"
              src="https://www.maricruzavalos.com/wp-content/uploads/2021/10/chorizo_tacos_recipe.jpg"
              alt="tacos"
            />
            <img
              className="col itemPic"
              src="https://cdn.shopify.com/s/files/1/1709/6425/products/Milk_4ee3c4c5-5fd5-4a11-9989-7e32439b17dc_480x480.jpg?v=1670439472"
              alt="chocolate"
            />
          </div>
        </div>
        <div className="col-3 btns">
          <NavLink className="nav-link vMBtn mt-2" to="/cat-treats">
            Cat Treats
          </NavLink>
          <NavLink className="nav-link vMBtn mt-2" to="/tacos">
            Tacos
          </NavLink>
          <NavLink className="nav-link vMBtn mt-2" to="/chocolate">
            Chocolate
          </NavLink>
        </div>
        <div className="dispense col-12" />
      </div>
    </>
  );
};

export default VendingMachine;
