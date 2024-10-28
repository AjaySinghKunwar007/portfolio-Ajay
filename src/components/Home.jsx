import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.png";
const Home = ({ratio}) => {

  const clientCount= useRef(null);
  const projectCount= useRef(null);

const animationClientCount=()=>{
  animate(0,100,{
    duration:5,
    onUpdate: (v)=>clientCount.current.textContent=v.toFixed()
  })
}
const animationProjectCount=()=>{
  animate(0,500,{
    duration:5,
    onUpdate: (v)=>projectCount.current.textContent=v.toFixed()
  })
}
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Ajay Singh Kunwar
          </motion.h1>
          <Typewriter
            options={{
              strings: ["Code Crafter", "Design Dreamer", "Creative Innovator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:ajaysinghkunwar1999@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>
          <article>
            <p>
              +{ratio < 2 && (<motion.span whileInView={animationClientCount} ref={clientCount}></motion.span>)}

            </p>
            <span>Clients Worldwide</span>
          </article>
          <aside>
            <article>
              <p>
                +{ratio <2 && (<motion.span whileInView={animationProjectCount} ref={projectCount}></motion.span>)}
              </p>
              <span>Projects Done</span>
            </article>
            <article data-special>
            <p>
                Contact
            </p>
            <span>ajaysinghkunwar1999@gmail.com</span>
          </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Ajay" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
