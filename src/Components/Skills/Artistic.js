import React from 'react'
import "./Artistic.css"
import dancing from "../Images/dancing.jpeg";
import painting from "../Images/painting.jpeg";
import drawing from "../Images/drawing.jpeg";
import riding from "../Images/riding.jpeg";
function Artistic() {
  return (
    <div className='container26'>
    <div className='container27'>
      <img src={dancing} className='image7'></img>
      <h3>Dancing</h3>
    </div>
    <div className='container28'>
      <img src={painting} className='image7'></img>
      <h3>Painting</h3>
    </div>
    <div className='container29'>
      <img src={riding} className='image7'></img>
      <h3>Riding a Bicycle</h3>
    </div>
    <div className='container30'>
      <img src={drawing} className='image7'></img>
      <h3>Drawing</h3>
    </div>
    </div>
  )
}

export default Artistic
