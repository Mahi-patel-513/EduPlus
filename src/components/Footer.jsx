import React, { useState, useEffect } from 'react';
import mail_icon from "../assets/mail_icon.png"
import phone_icon from "../assets/phone_icon.png"
import location_icon from "../assets/location_icon.png"
import msg_icon from "../assets/msg_icon.png"
import { FaArrowRight } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "930e0486-61df-4b39-acc0-7d7894040eca");

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
    <div>
        
        <section className='contact-section' id='contactus'>
            <div className='contact-div'>
                <p className='cpara'> CONTACT US </p>
                <h1 className='ch1'> Get in Touch </h1>
            </div>
        
            <div className='contact'>
                <div className="contact-col">
                    <h3> Send us a message <img src={msg_icon} /> </h3>
                    <p> Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to me as i strive to provide exceptional service through my study planner, EduPlus. </p>
                    <ul>
                        <li> <img src={mail_icon} /> mahipatel.mp513@gmail.com </li>
                        <li> <img src={phone_icon} /> +91 8238268224 </li>
                        <li> <img src={location_icon} /> Nikol, Ahmedabad - 382350 </li>
                    </ul>
                </div>
        
                <div className="contact-col">
                    <form onSubmit={onSubmit}>
        
                        <label> Your Name </label>
                        <input type="text" name='name' placeholder='Enter your name' required />
        
                        <label> Phone Number </label>
                        <input type="tel" name='phone' placeholder='Enter your mobile number' required />
        
                        <label> Your Email </label>
                        <input type="email" name='email' placeholder='Enter your email id' required />
        
                        <label> Write Your Messages Here </label>
                        <textarea name="message" rows="6" placeholder='Enter your message' required ></textarea>
        
                        <button type='submit' className='submit-btn' > Submit Now <FaArrowRight/> </button>
                    </form>
        
                        <span> {result} </span>
                </div>
            </div>
        </section>

        <footer className="footer">
            <p>&copy; 2025 EduPlus. All rights reserved.</p>
            <ul>
                <li> Terms of Services </li>
                <li> Privacy Policy </li>
            </ul>
        </footer>
    </div>
  )
}

export default Footer