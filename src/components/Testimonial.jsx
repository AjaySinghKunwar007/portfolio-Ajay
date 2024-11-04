
import React from 'react'

const Testimonial = () => {
  return (
    <div id='testimonial'>
        <h2>Testimonial</h2>
        <section>
            <TestimonialCard name={"Abhishek"}
            feedback={
              "Working with Ajay was a transformative experience for our team. His attention to detail and creative problem-solving approach helped us deliver a project that exceeded our expectations. Ajay not only possesses strong technical skills but also has an exceptional ability to communicate complex ideas clearly. I highly recommend him for any web development projects!"
              } /> 
            <TestimonialCard name={"Ramzi"}
            feedback={
              "I was truly impressed by Ajay's dedication and professionalism throughout our collaboration. He brought a fresh perspective to our project and consistently delivered high-quality work on time. Ajay is not just a developer; he is a valuable asset to any team, always ready to go the extra mile to ensure client satisfaction."
              } /> 
            <TestimonialCard name={"Somya"}
            feedback={
              "The work that Ajay did for our recent web app redesign was phenomenal. His ability to blend functionality with aesthetic appeal resulted in a user-friendly interface that our clients love. Ajay is innovative, reliable, and a joy to work with. I look forward to collaborating with him on future projects!"
              } /> 
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