import React from 'react'
import {AiOutlineMenu} from "react-icons/ai"


const Header = ({menuOpen,setMenuOpen}) => {
  return (
    <>
    <nav>
        <NavContent setMenuOpen={setMenuOpen}/>
    </nav>
    <button className='navBtn' onClick={()=>setMenuOpen(!menuOpen)}>
          <AiOutlineMenu />
        </button>
    </>
    
  )
}

 const NavContent = ({setMenuOpen})=>(
    <>
    <h1>Ajay.</h1>
    <div>
        <a href="#home"onClick={()=>setMenuOpen(false)}>Home</a>
        <a href="#work"onClick={()=>setMenuOpen(false)}>Work</a>
        <a href="#timeline"onClick={()=>setMenuOpen(false)}>Experiences</a>
        <a href="#services"onClick={()=>setMenuOpen(false)}>Services</a>
        <a href="#testimonial"onClick={()=>setMenuOpen(false)}>Testimonial</a>
        <a href="#contact"onClick={()=>setMenuOpen(false)}>Contact</a>
    </div>
    <a href="mailto:ajaysinghkunwar1999@gmail.com">
        <button>Email</button>
    </a>
    </>
)


export const HeaderPhone = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={`navPhone ${menuOpen? "navPhoneComes" : ""}`}>
        <NavContent setMenuOpen={setMenuOpen}/>
    </div>
  ) 
}



export default Header