import React from 'react'
import './Hero.css'
import darkArrow from '../../assets/dark-arrow.png'



const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Quality Education for Quality Kenyans</h1>
            <p>Our Cutting Edge curriculum is designed to Empower and equip students with the knowledge skills and experience that are needed to excel in the dynamic ever changing fields of 
                education.
            </p>
            <button className="btn">Explore more <img src={darkArrow} alt="" /></button>
        </div>

    </div>
  )
}

export default Hero