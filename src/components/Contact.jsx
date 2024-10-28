import React, { useState } from "react";
import vg from "../assets/vg.png";
import toast from "react-hot-toast";
import { motion} from "framer-motion";

import {addDoc,collection} from "firebase/firestore";
import { db } from "../firebase";



const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);
  const submitHandler = async(e) => {
      e.preventDefault();
      setDisableBtn(true);
      try {
        await addDoc(collection(db,"contacts"),{
          name,email,message,
        });
        toast.success("Message Sent");
        setDisableBtn(false);
        setName("");
        setEmail("");
        setMessage("");
      } catch (error) {
        toast.error("Error");
        console.log(error);
        setDisableBtn(false)
        
      }
    
  };
  const animations={
    form :{
      initial:{
        opacity : 0,
        x:"-100%"
      },
      whileInView:{
        opacity : 1,
        x:0
      }
    },
    button :{
      initial:{
        opacity : 0,
        y:"-100%",
      },
      whileInView:{
        opacity : 1,
        y:0,
      },
      transition  :
      {
        delay:0.5,
      }
    }
  }

  return (
    <div id="contact">
      <section>
        <motion.form onSubmit={submitHandler} {...animations.form}>
          <h2>Contact Me</h2>
          <input 
          type="text" 
          placeholder="Your Name" 
          required
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
          <input type="email" placeholder="Your Email" required 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}/>
          <input type="text" placeholder="Your Message" required 
          value={message}
          onChange={(e)=>setMessage(e.target.value)}/>
          <motion.button {...animations.button} 
          className={disableBtn? "disableBtn":""}
          type="submit" disabled={disableBtn}>Send</motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={vg} alt="Graphic" />
      </aside>
    </div>
  );
};

export default Contact;
