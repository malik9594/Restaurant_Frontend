import React from 'react'
import Logo from './img/Logo.jpg'
const Footer = () => {
  return (
  <footer>
    <img src= {Logo} alt=''></img>
    <span>Made with <span style={{ color: '#A61919', fontWeight:'bolder'  }}>&#9829;</span> and React.js</span>
  </footer>
  )
}

export default Footer
