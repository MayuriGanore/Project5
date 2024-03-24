import React from 'react';
import './Projects.css';
import P1 from '../Images/P1.jpeg';
import P2 from '../Images/p2.png';
import P3 from '../Images/P3.png';
import P4 from '../Images/P4.png';
import P5 from '../Images/P5.png';
import P6 from '../Images/P6.png';

function Projects() {
  return (
    <div className='container36'>
      <div className='container37'>
        <div className='container38'>
          <h3>Project 1</h3>
          <a href='https://github.com/MayuriGanore/BHAI' target='_blank' rel='noopener noreferrer'><img className='image9' src={P1} alt='Project 1' /></a>
          <ul className='projectlist'>
            <li><b>Project Title :</b> BHAI Website</li>
            <li><b>Domain :</b> Web Development</li>
            <li><b>Link :</b> <a href='https://github.com/MayuriGanore/BHAI' target='_blank' rel='noopener noreferrer'>GitHub</a></li>
          </ul>
        </div>
        <div className='container38'>
          <h3>Project 2</h3>
          <a href='https://github.com/MayuriGanore/Authentication' target='_blank' rel='noopener noreferrer'><img className='image9' src={P2} alt='Project 2' /></a>
          <ul className='projectlist'>
            <li><b>Project Title :</b>LogIn/SignUp</li>
            <li><b>Domain :</b>Firebase Authentication</li>
            <li><b>Link :</b> <a href='https://github.com/MayuriGanore/Authentication' target='_blank' rel='noopener noreferrer'>GitHub</a></li>
          </ul>
        </div>
        <div className='container38'>
          <h3>Project 3</h3>
          <a href='https://github.com/MayuriGanore/EventSpectrum' target='_blank' rel='noopener noreferrer'><img className='image9' src={P3} alt='Project 3' /></a>
          <ul className='projectlist'>
            <li><b>Project Title :</b> Event Website</li>
            <li><b>Domain :</b> Web Development</li>
            <li><b>Link :</b> <a href='https://github.com/MayuriGanore/EventSpectrum' target='_blank' rel='noopener noreferrer'>GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className='container40'>
        <div className='container39'>
          <h3>Project 4</h3>
          <a href='https://github.com/MayuriGanore24/Hotel_Resevation' target='_blank' rel='noopener noreferrer'><img className='image9' src={P4} alt='Project 4' /></a>
          <ul className='projectlist'>
            <li><b>Project Title :</b> Online Hotel Reservation</li>
            <li><b>Domain :</b> Java + MySQL</li>
            <li><b>Link :</b> <a href='https://github.com/MayuriGanore24/Hotel_Resevation' target='_blank' rel='noopener noreferrer'>GitHub</a></li>
          </ul>
        </div>
        <div className='container39'>
          <h3>Project 5</h3>
          <a href='https://github.com/MayuriGanore/Tic-Tac-Toe' target='_blank' rel='noopener noreferrer'><img className='image9' src={P5} alt='Project 5' /></a>
          <ul className='projectlist'>
            <li><b>Project Title :</b> Tic-Tac-Toe Game</li>
            <li><b>Domain :</b> C++ Development</li>
            <li><b>Link :</b> <a href='https://github.com/MayuriGanore/Tic-Tac-Toe' target='_blank' rel='noopener noreferrer'>GitHub</a></li>
          </ul>
        </div>
        <div className='container39'>
          <h3>Project 6</h3>
          <a href='https://github.com/MayuriGanore/SnakeGame' target='_blank' rel='noopener noreferrer'><img className='image9' src={P6} alt='Project 6' /></a>
          <ul className='projectlist'>
            <li><b>Project Title :</b> Snake Game</li>
            <li><b>Domain :</b> Java Development</li>
            <li><b>Link :</b> <a href='https://github.com/MayuriGanore/SnakeGame' target='_blank' rel='noopener noreferrer'>GitHub</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
