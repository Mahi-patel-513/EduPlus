import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './ToDoList.css'
import TodoComponent from '../components/ToDoComponent'


const ToDoList = () => {
  return (
    <div>
        <Navbar/>

        <div className="todo-header">
        <div className="overlay">
            <h1> Plan Your Path to Success!  </h1>
            <p> Prioritize your tasks and tackle the most important ones first!</p>
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
            <h2> Organize Your Tasks, Achieve Your Goals! </h2>
            <p> EduPlus: Your Personal Study Planner 📚✨ With smart task management, EduPlus ensures that your tasks are always in check. No more missing deadlines—let EduPlus handle the reminders so you can stay focused on your studies and success. </p>
            <h3> Here, you can create, manage, and track your study tasks. Set deadlines, prioritize your goals, and stay productive every day with EduPlus' intuitive to-do list feature. </h3>
          </div>

          <div>
            <TodoComponent/>
          </div>
          

        <Footer/>
        </div>

    </div>
  )
}

export default ToDoList