import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Tacos = () => {
  const [tacos, setTacos] = useState([]);
  const getRandom = () => {
    return Math.random() * 90;
  };

  const addTaco = () => {
    setTacos((prev) => [...prev, { x: getRandom(), y: getRandom() }]);
  };

  const tacoComponents = tacos.map((t, i) => {
    return (
      <img
        className="taco"
        src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/76506/taco-clipart-xl.png"
        alt="taco"
        style={{
          position: "absolute",
          top: `${t.y}vh`,
          left: `${t.x}vw`,
        }}
      />
    );
  });
  return (
    <>
      <div className="Item">
        <h2>Tacos!</h2>
        {tacoComponents}
        <img
          className="taco mt-3"
          src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/76506/taco-clipart-xl.png"
          alt="taco"
        />
        <br />
        <button className="btn btn-primary my-4 tacoBtn" onClick={addTaco}>
          More Tacos
        </button>
        <br />
        <NavLink className="btn btn-warning tacoBtn" to="/">
          Go Back
        </NavLink>
      </div>
    </>
  );
};

export default Tacos;
