import React from 'react'
import { AiFillGithub, AiFillLinkedin,    AiOutlineArrowUp } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa'

import logo2 from "../assets/logo_old.png"

const Footer = () => {
  return (
   <footer>
    <div>
        <img src={logo2} alt="Founder" />
        <h2>Ajay Singh Kunwar</h2>
        <p>{`"Motivation sparks the start, but discipline fuels the journey."`}</p>
    </div>
    <aside>
    <h2>Social Media</h2>
    <article>
        <a href="https://linkedin.com" target='blank'>
            <AiFillLinkedin />
        </a>
        <a href="https://x.com" target='blank'>
            <FaTimes />
        </a>
        <a href="https://github.com" target='blank'>
            <AiFillGithub />
        </a>
    </article>
    </aside>
    <a href="#home">
        <AiOutlineArrowUp/>
    </a>
   </footer>
  )
}

export default Footer