import React from "react";
import { Link } from "react-router-dom";
import "../Components/About/About.js";
import "../Components/Experience/Experience.js";
import "../Components/Projects/Projects.js";
import "../Components/Skills/Skills.js";
import "../Components/Education/Education.js";
import "../Components/Profiles/Profiles.js"
import "../Components/Home/Home.js"
import "./Navbar.css"
function Navbar() {
  return (
    <div className="container1">
      <nav className="navbar navbar-expand-lg " >
        <div className="container-fluid">
          <Link to="/Home" className="logo-text">
            Portfolio...
          </Link>
          <div className="container2">
          <li className="listcomponents">
            <Link className="linkcomponents" to="/About">About</Link>
          </li>
          <li className="listcomponents">
          <Link className="linkcomponents" to="/Education">Education</Link>
          </li>
          <li className="listcomponents">
            <Link className="linkcomponents" to="/Experience">Experience</Link>
          </li>
          <li className="listcomponents">
            <Link className="linkcomponents" to="/Skills">Skills</Link>
          </li>
          <li className="listcomponents">
          <Link className="linkcomponents" to="/Projects">Projects</Link>
         </li>
          <li className="listcomponents">
            <Link className="linkcomponents" to="/Profiles">Profiles</Link>
          </li>
        </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
