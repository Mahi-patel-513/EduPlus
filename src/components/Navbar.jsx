import React, { useEffect, useState } from 'react'
import "./Navbar.css";
import edulogo from "../assets/edulogo.png";
import logoname from "../assets/logoname.png";
import menu_icon from "../assets/menu_icon.png";
import { Link } from 'react-router-dom';

const Navbar = () => {



  // section scroll karva mate
  const scrollToSection = (id) => {
    const targetPath = location.pathname; // Current path
  
    // Handle scrolling for the current page and others
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 50, // Adjust for navbar height
          behavior: "smooth", // Smooth scroll behavior
        });
      }
    }, 100);
  
    // If on a different page, append the section ID to the URL
    if (targetPath !== "/" && targetPath !== "/studyplanner" && targetPath !== "/todolist") {
      window.location.href = `${targetPath}#${id}`;
    }
  };

  
  // navbar top ma transperant re and scroll kariye to background change thay teni mate
    const [sticky, setSticky] = useState(false)
  
    useEffect(() => {
      window.addEventListener('scroll', () => {
          window.scrollY > 100 ? setSticky(true) : setSticky(false);
      })
    }, [])


    const [mobileMenu, setMobileMenu] = useState(false);
      const toogleMenu = () => {
        mobileMenu? setMobileMenu(false) : setMobileMenu(true);
      }

      //feature par hover karne se dropdown menu open hoga uske liye
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      <nav className={`navbar ${sticky ? 'dark-nav' : ''}`} >
            <div className='edulogo'>
                <img className="logo" src={edulogo} alt="logo" />
                <img className="logoname" src={logoname} alt="logoname" />
            </div>
            <ul className={mobileMenu ? ' ' : 'hide-mobile-menu'}>
                <li><Link to="../../">Home</Link></li>
                <li><Link onClick={() => scrollToSection("aboutus")}> About Us </Link></li>
                <li className="dropdown" 
                    onMouseEnter={() => setIsDropdownOpen(true)} 
                    onMouseLeave={() => setIsDropdownOpen(false)}  >
                      <Link onClick={() => scrollToSection("features")}> Features </Link> 
                  {isDropdownOpen && (
                    <div className='dropdown-div'>
                      <ul className="dropdown-menu">
                      <li> <Link to="../../StudyPlane"> Smart study Planner </Link></li>
                      <li> <Link to="../../ToDoList"> To-Do List </Link></li>
                      <li>Progress Tracker</li>
                      <li>Reminders & alerts</li>
                    </ul>
                    </div>
                    
                  )}
                </li>
                <li><Link onClick={() => scrollToSection("contactus")}> Contact Us </Link></li>
                <li><button className='nav-btn'> <Link to="../../Login">Sign Up</Link> </button></li>
                
            </ul>
            <img src={menu_icon} className='menu-icon' onClick={toogleMenu}/>
            </nav>
    </div>
  )
}

export default Navbar
