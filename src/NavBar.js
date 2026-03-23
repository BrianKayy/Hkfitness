import {useState} from "react";
import {NavLink} from "react-router-dom";
import logo from "./images/logo.jpeg";
import "./index.css";

  
function NavBar() {
    const [open, setOpen] = useState(false);
  return (

    <div className="nav">
    <img src={logo} alt="Logo" className="logo" />


    <button 
        className="menu-btn"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>
       <div className= {`nav-links ${open ? "open" : ""}`}>
        <NavLink  to="/"  >Home</NavLink >
       <NavLink to="/Features"   >Features</NavLink > 
       <NavLink to="/Pricing"  >Programs</NavLink >
     <NavLink  to="/Reviews"   > Reviews </NavLink > 
       <NavLink to="/Gallery"   >Gallery</NavLink >
      <NavLink to="/Contact"   >Contact</NavLink >
       <NavLink to="/About"  >About</NavLink >
    </div>
    </div>
    
  );
}

 export default NavBar;
