import React, { useState, useEffect } from 'react';
import target from "../assets/target.png"
import reminders from "../assets/reminders.png"
import productivity from "../assets/productivity.png"
import "./Landingpage.css";
import { FaCalendar, FaChartBar, FaTasks, FaCheckCircle, FaBell, FaChartLine, FaArrowRight } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LandingPage = () => {

    return (
        <div>
          
            <Navbar/>

            <section className="hero-container" id='home'>
                <div className='hero-section'>
                    <h1 className='h1class'> "Ace your studies effortlessly – Plan, track, and succeed with EduPlus!"  </h1>
                    <p className='para1'> Your study goals, our smart planner! Start your journey with EduPlus today. Manage your study schedule effortlessly</p>
                    <button className='btn'> Get Started</button>
                </div>
            </section>

            <div className='container'>
                <section className='about-section' id='aboutus'>
                <div className='aboutus'>
                <h1 className='h1about'> About <span>EduPlus</span> </h1>
                <p className='abpara'> EduPlus is a smart study planner and tracker designed to improve students' studies. We are building a platform that helps students set daily study goals, track progress and stay disciplined in their studies through smart reminders. </p>
                </div>
            
                <div className='about-container'>
                    <div className='aboutcontent1'>
                        <img src={target} className='target' />
                        <h3> Smarter studying. </h3>
                        <p className='aboutpara'>Work smarter, not harder. Our innovative productivity tools help you do just that, ensuring that you are working at maximum efficiency for maximum result.</p>
                    </div>
                    <div className='aboutcontent1'>
                        <img src={reminders} className='target' />
                        <h3>Better organization.</h3>
                        <p className='aboutpara'>EduPlus seamlessly manages your classes, exams, term dates, and extra-curricular activities – because school schedules need more than just a calendar.</p>
                    </div>  
                    <div className='aboutcontent1'>
                        <img src={productivity} className='target' />
                        <h3>Enhanced productivity.</h3>
                        <p className='aboutpara'>EduPlus: Your personal academic assistant. Let us handle the hard work, keeping you on track for success.</p>
                    </div>
                </div>
                </section>

        
                <section id="features" className="features-section">
                <h2 className='heading'>Key Features</h2>
                    <div className="features">
                        <div className="feature">
                            <FaCalendar className='feature-icon'/>
                            <h3>Smart Study Planner</h3>
                            <p className='para'>Organize your study sessions with ease using our calendar.</p>
                        </div>
                        <div className="feature">
                            <FaTasks className='feature-icon'/>
                            <h3>To-Do List & Tasks</h3>
                            <p className='para'>Manage your study workload efficiently with task lists.</p>
                        </div>
                        <div className="feature">
                            <FaChartLine className='feature-icon'/>
                            <h3>Progress Tracker</h3>
                            <p className='para'>Keep track of your study goals and completed tasks.</p>
                        </div>
                        <div className="feature">
                            <FaBell className='feature-icon'/>
                            <h3>Reminders & Alerts</h3>
                            <p className='para'>Stay on track with important deadlines and study notifications.</p>
                        </div>
                    </div>
                </section>

                <section className="whychoose">
                  <h2 className='header'> Meet the Creator </h2>
                  <p><span> Mahi Patel</span>, a passionate Computer Engineering Student, developed EduPlus to help students manage their studies effectively. </p>
                  <div className="about-cta">
                    <button className="cta-button">Start Your Journey <FaArrowRight /> </button>
                  </div>
                </section>

                <Footer/>

            </div>
        </div>
    );
};

export default LandingPage;
