import React from "react";
import "./Navbar.css";

function Navbar() {
  const handleClick = () => {
    alert("This site is a WIP");
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <b>Grace Huang</b>
        </a>
        <button onClick={handleClick} className="navbar-disclaimer">
          <b>Disclaimer</b>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
