import React from 'react'
import "./Profiles.css"
import hackerrank from "../Images/hackerranck.png";
import github from "../Images/github.png";
import instagram from "../Images/instagram.png";
import linkedin from "../Images/linkedin.png";
function Profiles() {
  return (
    <div className='container31'>
    <div className='container32'>
      <a className="linktags" href="https://www.linkedin.com/in/mayuri-ganore-18aba0248" target="_blank" rel="noopener noreferrer">
      <img src={linkedin} className='image8'></img>
      </a>
      <h3>LinkedIn</h3>
    </div>
    <div className='container33'>
      <a className="linktags" href="https://github.com/MayuriGanore" target="_blank" rel="noopener noreferrer">
      <img src={github} className='image8'></img>
      </a>
      <h3>Github</h3>  
    </div>
    <div className='container34'>
      <a className="linktags" href="https://instagram.com/ganoremayuri?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
      <img src={instagram} className='image8'></img>
      </a>
      <h3>Instagram</h3>
    </div>
    <div className='container35'>
      <a className="linktags" href="https://www.hackerrank.com/profile/mayurig_t21018" target="_blank" rel="noopener noreferrer">
      <img src={hackerrank} className='image8'></img>
      </a>
      <h3>Hackerranck</h3>
    </div>
    </div>
  )
}

export default Profiles
