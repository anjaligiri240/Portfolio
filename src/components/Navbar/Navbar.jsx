import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Anjali </div>
            <span className="toggle">Toggle</span>
        </div>
        
        <div className="n-right"></div>
        <div className="n-list">
            <ul style={{listStyleType: 'none'}}>
                <li>HOME</li>
                <li>EXPERIENCE</li>
                <li>PORTFOLIO</li>
                <li>TESTIMONIAL</li>
                <li>TESTIMONIAL</li>
            </ul>
        </div>
        <button className="button n-button">
            Contact
        </button>
    </div>
  )
}

export default Navbar