import React from 'react'
import data from "../assets/data.json"
const Experience = () => {
  return (
    <div id='timeline'>
        <div className="timelineBox">
            {
                data.projects.map((item,index)=>(
                    <TimelineItem 
                    heading={item.title}
                    text={item.date}
                    index={index}
                    key={item.title}
                    />

                ))
            }
        </div>
    </div>
  )
}
const TimelineItem=({heading,text,index})=>{
   return <div className={`timelineItem ${index%2===0?
        "leftTimeline":"rightTimeline"
    }`}>
        <div>
        <h2>{heading}</h2>
        <p>{text}</p>
        </div>
    </div>
}

export default Experience