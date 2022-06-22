import React from 'react'
import './About.css'

const About = () => {
  return (
    <div id='about'>
      <img src="profilphoto.jpg"    alt="" className="profil"/>
        <h2 className='introduction'>Hi,I Am Kürşat Bobaç </h2>
        <p className='aboutme'>I am continuous and a quick learner. I have a great passion for programming. I've 
 taken Object Oriented Programming class with Java,Data Structure and Algorithms class 
with C++,Database Systems with Oracle SQL. I have always been reinforcing my university knowledge with personal 
projects. In my free time, I have also been participating in University Student group 
projects actively to experience teamwork and project building.
</p>
<a href="#contact"><button className="bn29">HIRE ME</button></a>

    </div>
  )
}

export default About