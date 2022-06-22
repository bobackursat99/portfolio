import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
  <div id='contact'>
    <h3 className='infom'>Contact Me</h3>
<form>      
  <input name="name" type="text" className="feedback-input" placeholder="Name" />   
  <input name="email" type="text" className="feedback-input" placeholder="Email" />
  <textarea name="text" className="feedback-input" placeholder="Comment"></textarea>
  <input type="submit" value="SUBMIT"/>
</form>
</div>  
  )
}

export default Contact