import React, { useRef } from 'react'
import './Testimonials.css'
import nextIcon from '../../assets/next-icon.png'
import backIcon from '../../assets/back-icon.png'
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.png'
import user3 from '../../assets/user3.jpg'
import user4 from '../../assets/user4.png'




const Testimonials = () => {

    const slider = useRef();
    let translateX = 0;


    const slideForward = ()=>{
        if(translateX > -50){
            translateX -=25;
        }
        slider.current.style.transform = `translateX(${translateX}%)`;
    }


    const slideBackward = ()=>{
        if(translateX < 0){
            translateX += 25;
        }
        slider.current.style.transform = `translateX(${translateX}%)`;

    }




  return (
    <div className='testimonials'>
        <img src={nextIcon} className='next-btn' onClick={slideForward}/>
        <img src={backIcon} className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user1} alt="" />
                            <div>
                                <h3>Lavender Miano</h3>
                                <span>Nairobi, Kenya</span>
                            </div>
                        </div>
                        <p>Deciding to pursue my Degree at MYUNI was one of the best decisions I ever made. The supportive community, state-of-the-art facilities and commitment to academic excellence have truly exceeded my expectations</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user2} alt="" />
                            <div>
                                <h3>Victor Muriithi</h3>
                                <span>Kiambu, Kenya</span>
                            </div>
                        </div>
                        <p>"MyUni has made it so much easier to stay on top of my courses, deadlines, and campus updates—all in one place!"</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user3} alt="" />
                            <div>
                                <h3>Benson Kamau</h3>
                                <span>Nyeri, Kenya</span>
                            </div>
                        </div>
                        <p>"Thanks to MyUni, I can access everything I need for university life—quickly and easily. It’s a game changer!"</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user4} alt="" />
                            <div>
                                <h3>Bridgit Auma</h3>
                                <span>Ugenya, Kenya</span>
                            </div>
                        </div>
                        <p>MyUni University has been an incredible place to grow both academically and personally. The supportive community, inspiring faculty, and vibrant campus life have truly made it feel like home</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials