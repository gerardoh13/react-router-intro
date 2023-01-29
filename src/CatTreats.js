import React, { useState, useEffect, useRef } from "react";
import "./Cat.css";
import Cat from "./Cat";
import { NavLink } from "react-router-dom";


const CatTreats = () => {
    const [cats, setCats] = useState([])
    const timerRef = useRef(null);

    useEffect(() => {
        if (!timerRef.current) {
          timerRef.current = setInterval(() => {
            setCats(prev => [...prev, {x: getRandom(), y: getRandom()}])
          }, 2000);
          if (cats.length === 20){
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
          return () => {
            clearInterval(timerRef.current);
            timerRef.current = null;
          };
        }
      }, [cats]);

      const getRandom = () => {
        return Math.random() * 80;
      };

    const catComponents = cats.map(cat => {
        return (
            <Cat x={cat.x} y={cat.y}/>
        )
    })
  return (
    <>
          {catComponents}
          <div className="front">
      <img
      className="mt-5 CatFood"
        src="https://cdn-icons-png.flaticon.com/512/2809/2809799.png"
        alt="cat treats"
      />
      <h2>Oh no! Here they come...</h2>
      <NavLink className="btn btn-warning tacoBtn" to="/">
          Go Back
        </NavLink>
    </div>
    </>

  );
};

export default CatTreats;
