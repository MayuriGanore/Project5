import React from 'react'
import "./Experience.css";
import Codsoft from "../Images/codsoft.png";
import BHAI from "../Images/BHAI.jpeg";
import Google from "../Images/Google.png";
import Codsoft1 from "../../Documents/Codsoft.pdf";
import BHAI1 from "../../Documents/BHAI.pdf";
import Google1 from "../../Documents/Google.pdf";
function Experience() {
  return (
    <div className='container18'>
      <div className='container15'>
        <a  href="https://www.codsoft.in/" 
        target="_blank" rel="noopener noreferrer">
        <img src={Codsoft} className='image4'></img></a>
        <h3>CodSoft-<br></br>Virtual Internship</h3>
        <ul className='listitems2'>
          <li><b>Domain : </b>Cpp Developement</li>
          <li><b>Duration : </b>Sept 2023-Sept 2023</li>
        </ul>
        <p className='paragraph2'><b>Description</b><br></br><p className='container'>During this internship, I delved into a comprehensive exploration of various C++ functions, significantly enhancing my proficiency in C++ development. The hands-on experience provided invaluable insights into practical applications, illuminating my understanding and skill set. This immersive learning journey not only broadened my knowledge but also sharpened my ability to apply C++ concepts.</p></p>
        <a href={Codsoft1} id="btn2" target="_blank" rel="noopener noreferrer" className='btn'>Offer Letter</a>
      </div>
      <div className='container16'>
        <img src={BHAI} className='image4'></img>
        <h5>BHAI-Bharat Highway<br></br>Assistance and Integrator</h5>
        <ul className='listitems2'>
          <li><b>Domain : </b>Frontend Using Reactjs</li>
          <li><b>Duration : </b>Oct 2023-Dec 2023</li>
        </ul>
        <p className='paragraph2'><b>Description</b><br></br><p className='container'>During this internship, I gained valuable real-world experience, providing insights into practical scenarios. Additionally, it offered exposure to authentic interview processes, honing my skills for real-world challenges.Overall, this experience has been instrumental in shaping my practical knowledge, enhancing my interview readiness, and inspiring my passion for innovative project development.</p></p>
        <a href={BHAI1} id="btn2" target="_blank" rel="noopener noreferrer" className='btn'>Offer Letter</a>
      </div>
      <div className='container17'>
      <a  href="https://www.https://internshipadmin.eduskillsfoundation.org/docs/login.in" 
        target="_blank" rel="noopener noreferrer">
        <img src={Google} className='image4'></img>
        </a>
        <h3>Google-<br></br>Virtual Internship</h3>
        <ul className='listitems2'>
          <li><b>Domain : </b>AIML Virtual Internship</li>
          <li><b>Duration : </b>Jan 2024-Feb 2024</li>
        </ul>
        <p className='paragraph2'><b>Description</b><br></br><p className='container'>This internship has provided me with the opportunity to delve into a new domain,and expanding my skills.It serves as a platform to augment both my knowledge and practical experience in AIML.Being affiliated with Google,this experience enhances my resume and credibility in the industry.It opens doors to collaborate with seasoned professionals, fostering a conducive environment for skill enrichment.</p></p>
        <a href={Google1} id="btn2" target="_blank" rel="noopener noreferrer" className='btn'>Offer Letter</a>
      </div>
    </div>
  )
}

export default Experience
