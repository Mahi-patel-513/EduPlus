import './App.css'
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import StudyPlane from './pages/StudyPlane';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ToDoList from './pages/ToDoList';
import Tasks from './components/Tasks';

const router = createBrowserRouter(


  [

    {
      path:"/",
      element:<LandingPage/>
    },

    {
      path:"/login",
      element:<Login/>
    },

    {
      path:"/studyplane",
      element:<StudyPlane/>
    },

    {
      path:"/todolist",
      element:<ToDoList/>
    },

    {
      path:"/tasks",
      element:<Tasks/>
    }

  ],

)

function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
