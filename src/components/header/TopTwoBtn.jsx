import React from 'react'
import CV from '../../assets/Mohak_Singh-CV.pdf'

const Top_two_btn = () => {
  return (
    <div className='TopTwoBtn'>
        <a href={CV} download className='btn' title='Download CV'>Download CV</a>
        <a href="#contact" className='btn btn-primary' title='Click here to Contact me!'>Let's Talk</a>
    </div>
  )
}

export default Top_two_btn