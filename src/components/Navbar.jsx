import React from "react";
import { Link } from "react-router-dom";
import StyledNavbar from "../styles/StyledNavbar";

function Navbar() {
  return (
    <StyledNavbar>
      <div className="logo">
        <Link to={"/"}>Logo </Link>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <h3 className="nav-title">Daromad: </h3>
        </li>
        <li className="nav-item">
          <h3 className="nav-title">Band xonalar: </h3>
        </li>
      </ul>
    </StyledNavbar>
  );
}

export default Navbar;
