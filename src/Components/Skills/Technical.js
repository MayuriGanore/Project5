import React from 'react'
import "./Technical.css"
import Clogo from "../Images/Clogo.png";
import java from "../Images/Javalogo.png";
import javas from "../Images/Javascriptlogo.png";
import html from "../Images/Htmllogo.png";
import python from "../Images/Pythonlogo.png";
import sql from "../Images/sql.png";
import plsql from "../Images/plsql.png";
import mongo from "../Images/mongodb.png";
import react from "../Images/react.png";
import bootstrap from "../Images/bootstrap.png";
import figma from "../Images/figma.png";
import firebase from "../Images/firebase.png";
import git from "../Images/github.png";

function Technical() {
  return (
    <div className='container22'>
      <div className='container23'>
        <h4><b>Programming Languages</b></h4>
        <ul className='listitems4'>
          <li><img className="image6" src={Clogo}></img>C/Cpp</li>
          <li><img className="image6" src={java}></img>Java</li>
          <li><img className="image6" src={html}></img>HTML/CSS</li>
          <li><img className="image6" src={javas}></img>Javascript</li>
          <li><img className="image6" src={python}></img>Python</li>
        </ul>
      </div>
     <div className='container25'>
      <h4><b>Database Languages</b></h4>
      <ul className='listitems4'>
        <li><img className="image6" src={sql}></img>MySQL</li>
        <li><img className="image6" src={mongo}></img>MongoDB</li>
        <li><img className="image6" src={plsql}></img>PL/SQL</li>
      </ul>
      </div> 
      <div className='container24'>
        <h4><b>Frameworks</b></h4>
        <ul className='listitems4'>
          <li><img className="image6" src={bootstrap}></img>BootStrap</li>
          <li><img className="image6" src={react}></img>React</li>
          <li><img className="image6" src={firebase}></img>Firebase</li>
          <li><img className="image6" src={git}></img>Git/GitHub</li>
          <li><img className="image6" src={figma}></img>Figma</li>
        </ul>
      </div>
    </div>
  )
}

export default Technical
