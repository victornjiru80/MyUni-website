import React from 'react'
import './About.css'
import aboutImg from '../../assets/about.jpg'
import playIcon from '../../assets/play-icon.png'



const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={aboutImg} className='about-img' />
            <img src={playIcon} className='play-icon' />
        </div>
        <div className="about-right">
            <h3>ABOUT US</h3>
            <h2>Nurturing Future Leaders Today</h2>
            <p>Embark on a transformative educational journey with our university's comprehensive educational programs. Our cutting-edge curriculum is designed to empower students with the relevant knowledge and skills needed to excel and thrive in Kenya's diverse ecosystem  </p>
            <p>With a keen focus on innovation, hands-on learning and personalized mentorship, our programs prepare those aspiring to make a meaningful impact in our communities</p>
            <p>Whether you aspire to be an engineer, teacher, doctor, or an economist, our diverse range of programs offer thr best pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
        </div>

    </div>
  )
}

export default About