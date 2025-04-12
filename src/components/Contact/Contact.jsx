import React from 'react'
import './Contact.css'
import msgIcon from '../../assets/msg-icon.png'
import mailIcon from '../../assets/mail-icon.png'
import phoneIcon from '../../assets/phone-icon.png'
import locationIcon from '../../assets/location-icon.png'
import whiteArrow from '../../assets/white-arrow.png'



const Contact = () => {


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "bddabe5a-0b1a-4b07-9326-d5f34b884a1b");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msgIcon} alt="" /></h3>
            <p>Feel free to reach out through a contact form or through the links below. Your feedback, questions and suggestions are important to us as we strive to provide exceptional service to our community</p>
            <ul>
                <li><img src={mailIcon} alt="" />contact@myuni.ac.ke</li>
                <li><img src={phoneIcon} alt="" />+2547002001930</li>
                <li><img src={locationIcon} alt="" />80 Mbagathi Road, Kiambu <br /> Nairobi, Kenya</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit} >
                <label > Name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label > Phone</label>
                <input type="tel" name="phone" placeholder='Enter your mobile number' required />
                <label >Write your message here</label>
                <textarea name="message"  rows="6" placeholder='enter your message' required>
                </textarea>
                <button type='submit' className='btn dark-btn'> Submit Now <img src={whiteArrow} alt="" /></button>

            </form>
            <span>{result}</span>
        </div>

    </div>
  )
}

export default Contact