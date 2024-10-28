
import React from 'react'

const Testimonial = () => {
  return (
    <div id='testimonial'>
        <h2>Testimonial</h2>
        <section>
            <TestimonialCard name={"Abhishek"}
            feedback={"Your Teaching skills are soo good"} /> 
            <TestimonialCard name={"Ramzi"}
            feedback={"Your Teaching skills are soo good"} /> 
            <TestimonialCard name={"Somya"}
            feedback={"Your Teaching skills are soo good"} /> 
        </section>
    </div>
  )
}
const TestimonialCard=({name,feedback})=>{
    return<article>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
}

export default Testimonial