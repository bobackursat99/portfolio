import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css'


const Education = () => {
  return (

   <div id='education'>

<h2 className='inf'>My Education</h2> 
    <VerticalTimeline>
    
    
   
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="Present"
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      
    >
      <h3 className="vertical-timeline-element-title">Youdo-AI Powered SurveIllance Solutions</h3>
     
      <p>
       Internship Program
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="2019-2024"
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      
    >
      <h3 className="vertical-timeline-element-title">Karabuk University</h3>
      
      <p>
      Bachelor of Science, Computer Engineering
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="2014-2018"
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  
    >
      <h3 className="vertical-timeline-element-title"> Ibrahim Onal Science High School - Bursa</h3>
     
      <p>
      High School Diploma
      </p>
    </VerticalTimelineElement>
   
      
    
  </VerticalTimeline>
  </div>
  )
}

export default Education