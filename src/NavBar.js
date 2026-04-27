import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

function NavBar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="nav">
      <h2>
        Hk<span>Fitness</span>
      </h2>

      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <div className={`nav-links ${open ? "open" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>Home</NavLink>

        <NavLink to="/Features" onClick={closeMenu}>
          Features
        </NavLink>

        <NavLink to="/Pricing" onClick={closeMenu}>
          Programs
        </NavLink>

        <NavLink to="/Gallery" onClick={closeMenu}>
          Gallery
        </NavLink>

        <NavLink to="/Contact" onClick={closeMenu}>
          Contact
        </NavLink>

        <NavLink to="/About" onClick={closeMenu}>
          About
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;