import React from 'react'
import "./StudyPlane.css";
import Navbar from '../components/Navbar';
import CalendarComponent from '../components/CalendarComponent';
import Footer from '../components/Footer';

const StudyPlane = () => {
  return (
    <div>
      
      <Navbar/>

        <div className="header-container">
          <div className="overlay">
            <h1>Smart Study Planner</h1>
            <p> Organize your study sessions with ease using our calendar.</p>
          </div>

          
          <svg className="wave" viewBox="0 0 1200 418">

              <path fill="rgba(255,255,255,0.3)" d="M0,330 C70,300 160,275 230,270 C400,264 540,330 680,277 C789,240 1100,80 1800,350 L1200,419 L0,418 Z">
              </path>

              <path fill="rgba(255,255,255,0.6)" d="M0,340 C90,305 165,280 240,280 C380,280 540,340 700,285 C789,250 1200,80 1800,390 L1200,419 L0,418 Z">
              </path>

              <path fill="#f6f6f7" d="M0,350 C110,310 170,290 250,292 C400,300 540,350 720,288 C789,260 1300,80 1800,430 L1200,419 L0,418 Z">
              </path>

              <path fill="#f6f6f7" d="M0,350 C110,310 170,290 250,292 C400,300 540,350 720,288 C789,260 1300,80 1800,430 L1200,419 L0,418 Z">
              </path>
              

            </svg>
        </div>

        <div className='container'>

          <div className='content' id='aboutus'>
            <h2> How to use our daily study planner and schedule maker </h2>
            <p> EduPlus: Your Personal Academic Assistant 🤓 With notifications and reminders, EduPlus worries about this for you. By keeping track of your study life and reminding you of all of your commitments, you can focus on what really matters. </p>
            <h3> Here you can manage your study's schedule, tasks, and goals with the help of an EduPluse calendar. </h3>
          </div>

          <div>
            <CalendarComponent/>
          </div>

          <Footer/>
        </div>


    </div>
    
  )
}

export default StudyPlane
