import React, { useState , useEffect } from 'react'
import './Nav.css'
import {useNavigate} from 'react-router-dom'

function Nav() {
  // declare and define state 
    const [show,handleShow] = useState(false);
    const navigate = useNavigate();
    
    // function to change state from false to true 
    const transitionNavbar = ()=> {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    const handleClick = ()=>{
      navigate("/profile")
    }

    // hook to call function on scrolling down 
    useEffect(() => {
      window.addEventListener('scroll', transitionNavbar);
    
      return () => {
        window.removeEventListener('scroll', transitionNavbar);
      }
    }, [])
    
    // return nav component 
  return (
    <div className={`nav ${show && "black"}`}>
        <div className='nav_content'>
        <img className='netflix_logo' onClick={()=>{navigate("/")}} src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix-Logo"></img>
        <img className='profile_logo' onClick={handleClick} src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='Profile-Logo'></img>
        </div>
    </div>
  )
}

export default Nav