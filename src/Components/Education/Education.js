import React from 'react'
import "./Education.css"
import SSC from "../Images/SSC.jpeg";
import HSC from "../Images/HSC.jpeg";
import College from "../Images/College.png";
import M1 from "../../Documents/M1.pdf";
import M2 from "../../Documents/M2.pdf";
function Education() {
  return (
    <div className='container14'>
      <div className='container11'>
        <a href="https://www.justdial.com/Nashik/Bal-Vidya-Mandir-Panchavati/0253PX253-X253-190313001255-L4V7_BZDET" target="_blank" rel="noopener noreferrer">
        <img className="image3" src={SSC}></img>
        </a>
      <h3>Adarsh Madhyamik <br></br>Vidyalaya</h3>
      <ul className='listcomponents1'>
        <li><b>Degere</b>-SSC(X)</li>
        <li><b>Duration</b>-Apr 2015 - Apr 2019</li>
        <li><b>Grade</b>-88.4%</li>
      </ul>
      <p>I completed my class 10 education at Adarsh Madhyamik Vidyalaya,Nashik, where I not only acquired foundational knowledge but also honed a myriad of essential skills that form the bedrock of my academic prowess.</p>
      <a href={M1} id="btn1" target="_blank" rel="noopener noreferrer" className='btn'>View Report</a>
      </div>
      <div className='container12'>
      <a href="https://upadhyegurukul.com/" target="_blank" rel="noopener noreferrer">
        <img className="image3" src={HSC}></img>
        </a>
        <h3>Upadhya College Of <br></br>Science</h3>
        <ul className='listcomponents1'>
        <li><b>Degere</b>-HSC(XII)</li>
        <li><b>Duration</b>-Apr 2019 - Apr 2021</li>
        <li><b>Grade</b>-84.84%</li>
      </ul>
      <p>I completed my class 12 high school education at Upadhya College Of Science,Nashik, where I immersed myself in the realm of Science, unlocking the wonders of the natural world and cultivating a deep appreciation for inquiry and discovery</p>
      <a href={M2} id="btn1" target="_blank" rel="noopener noreferrer" className='btn'>View Report</a>
      </div>
      <div className='container13'>
      <a href="https://www.isquareit.edu.in/" target="_blank" rel="noopener noreferrer">
        <img className="image3" src={College}></img>
        </a>
        <h3>International Institute Of <br></br>Information Technology</h3>
        <ul className='listcomponents1'>
        <li><b>Degere</b>-BE</li>
        <li><b>Duration</b>-Apr 2021 - Apr 2025</li>
        <li><b>Grade</b>-8.41 CGPA</li>
      </ul>
      <p>I am currently pursuing a Bachelor's degree in I^2IT,Pune. I have completed 5 semesters and have a CGPA of 8.41. I have taken courses in DSA,OOP,DBMS,OS,and web Developement, among others.</p>
      <a href={M2} id="btn1" target="_blank" rel="noopener noreferrer" className='btn'>View Report</a>
      </div>
    </div>
  )
}

export default Education
