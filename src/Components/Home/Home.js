import React from 'react';
import "./Home.css";
import photo from "../Images/Photo.jpg";
import Resume from "../../Documents/MayuriGanore.pdf";

function Home() {
  return (
    <div className='container3'>
      <div className='container4'>
        <span className='text8'>
          <h1>Hi, I am <br /><span className='name'>Mayuri Ganore</span></h1>
          <h4>I am a <span className='name'>Web Developer</span> and an<br /><span className='name'> AIML Enthusiast</span></h4>
        </span>
        <p className='paragraph1'>Driven by curiosity and a quest for excellence, I tackle challenges with unwavering commitment. Passionate about continuous learning, I bring a positive attitude and resilient growth mindset to every task. Poised to make a significant impact, I channel enthusiasm and dedication into surpassing expectations. With adaptability as my foundation, I'm ready to excel in any endeavor, aiming for remarkable milestones.</p>
        <a href={Resume} target="_blank" rel="noopener noreferrer" className='btn'>Check Resume</a>
      </div>
      <div className='container5'>
        <img className="image1" alt="/" src={photo}/>
      </div>
    </div>
  );
}

export default Home;
