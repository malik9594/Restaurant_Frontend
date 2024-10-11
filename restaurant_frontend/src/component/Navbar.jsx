import React from 'react'
import Logo from './img/Logo.jpg'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="no image" />
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          <div className="nav-links">
            <span>John</span>
            <span>Logout</span>
            <span className="write">
              <Link to="/write" className="link"  style={{textDecoration:'none'}}>Write</Link>
            </span></div>

        </div>
      </div>

    </div>
  )
}

export default Navbar
