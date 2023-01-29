import React from "react";
import ChocoPiece from "./ChocoPiece";
import { NavLink } from "react-router-dom";

const Chocolate = () => {

  let chocoBar = [];
  for (let y = 0; y < 6; y++) {
    let row = [];
    for (let x = 0; x < 4; x++) {
      let coord = `${y}-${x}`;
      row.push(
        <ChocoPiece
          key={coord}
        />
      );
    }
    chocoBar.push(<tr key={y}>{row}</tr>);
  }

  return (
    <>
      <table className="Item">
        <tbody>{chocoBar}</tbody>
      </table>
      <h2 className="my-4">Yum, Chocolate!</h2>
      <NavLink className="btn btn-warning" to="/">
        Go Back
      </NavLink>
    </>
  );
};

export default Chocolate;
