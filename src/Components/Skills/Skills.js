import React from 'react'
import "./Skills.css"
import Tech from "../Images/Tech.jpeg";
import Art from "../Images/Art.jpeg";
import "./Technical.js";
import "./Artistic.js";
import { Link } from 'react-router-dom';
function Skills() {
  return (
    <div className='container19'>
      <div className='container20'>
      <Link className="linkitems" to="/Technical">
        <h3>Technical Skills</h3>
        <img src={Tech} className='image5'></img></Link>  
      </div>
      <div className='container21'>
      <Link className="linkitems" to="/Artistic">
        <h3>Aritistic Skills</h3>
        <img src={Art} className='image5'></img></Link>
      </div>
    </div>
  )
}

export default Skills
