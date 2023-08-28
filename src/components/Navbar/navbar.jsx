import React, {useState} from "react";
import { Link } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";
import {FaTimes} from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)
  return (
<nav className="navbar">
<h3 className="logo">Andrea Rivera</h3>
<ul className={isMobile ? "nav-links-mobile":"nav-links"}
onClick = {()=>  setIsMobile(false)}>
    <Link to="/" className="home">
    <li>Home</li>
    </Link>
    <Link to="/about" className="about">
    <li>About</li>
    </Link>
    <Link to="/projects" className="projects">
      <li>Projects</li>
      </Link>

    </ul>
    <button className="mobile-menu-icon"
    onClick={()=>setIsMobile(!isMobile)}>
      {isMobile?(<i><FaTimes/></i>):(<i ><GiHamburgerMenu/></i>)}
    </button>

  </nav>);
};

export default Navbar;