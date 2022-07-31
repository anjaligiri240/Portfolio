import React from 'react';
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './resume.pdf'

const Services = () => {
  return (
     <div className="services">
        {/* Lesft side */}
        <div className="awesome">
            <span> My Awesome</span>
            <span>Services</span>
            <span>
            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
            <br />
            since the 1500s, when an unknown printer took a galley of type and scram
            </span>
            <a href={Resume} download> 
              <button className='button s-button'> Download CV</button></a>
             <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>
             <div className="blur s-blur2" style={{ background: "#ABF1FF94" }}></div>
        </div>
        {/* right side */}
        <div className="card">
            <div style={{ top: "2rem",left: '14rem'}}>

            <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
          
            </div>
            <div style={{top:"12rem", left: '14rem'}}>

            <Card
            emoji={Glasses}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
            </div>
            <div style={{ top:"19rem", left: '50rem'}}></div>

            <Card
            emoji={Humble}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
            color="rgba(252, 166, 31, 0.45)"
          />
         
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
          
        ></div>
        <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>

            
        </div>
     </div>
  )
}

export default Services