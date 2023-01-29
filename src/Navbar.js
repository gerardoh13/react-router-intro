import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink
          className="navbar-brand"
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              className="nav-link"
              to="/chocolate"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Chocolate
            </NavLink>
            <NavLink
              className="nav-link"
              to="/cat-treats"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Cat Treats
            </NavLink>
            <NavLink
              className="nav-link"
              to="/tacos"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Tacos
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
