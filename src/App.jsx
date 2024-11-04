import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Work from "./components/Work";
import Footer from "./components/Footer";
import { useState,useEffect } from "react";


function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  const [ratio,setRatio] = useState(window.innerWidth / window.innerHeight);

  
  useEffect(()=>{
    const resizeRatio=()=>{
      setRatio(window.innerWidth/window.innerHeight)
    };
    window.addEventListener("resize",resizeRatio);
    return()=>{
      window.removeEventListener("resize",resizeRatio);
      
    };
  },[ratio]) ; 
  return (
    // ratio <2 ?  put it before return if you want to use ratio
   <>
   <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
   <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
   <Home ratio={ratio} />
   <Work />
   <Experience />
   <Services />
   <Testimonial />
   <Contact />
   <Footer />
   <Toaster />
   
   </>
  )
  //  :
  //  (<em id="customMessage">Please Change the ratio to View !</em>)
}

export default App;
