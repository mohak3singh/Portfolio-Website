import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'
import './header.css'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a rel="noopener noreferrer" href='https://www.linkedin.com/in/mohak-singh/' target="_blank" className='lnk text-light tes' title='Connect with me on LinkedIn'><BsLinkedin size={20}/></a>
        <a rel="noopener noreferrer" href='https://leetcode.com/mohak_singh/' target="_blank" className='lnk text-light tes' title='Leetcode profile'><SiLeetcode size={27}/></a>
        <a rel="noopener noreferrer" href='https://github.com/mohak3singh' target="_blank" className='lnk text-light tes' title='GitHub Profile'><BsGithub size={22}/></a>
    </div>
  )
}

export default HeaderSocials