import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I Am </span>
                <span>Anjali Giri</span>
                <span>Frontend developer with hight level of experience in web desinging and development, producing the quality work</span>
            </div>
            <button className=" button i-button">Hire me </button>
            <div className="i-icons">
                
                <img src={Github} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
            </div>

        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={Boy} alt="" />
            <img src={Glassesimoji} alt="" />
            <div style={{top:'26%', left:'85%'}}>
                <FloatingDiv image={Crown}  txt1='Web' txt2='Developer' />
            </div>
            <div style={{top:'78.6%', left:'61.1%'}}>
                <FloatingDiv image={Thumbup}  txt1='Best Desing' txt2='Aword' />
            </div>
            {/*bluredivs*/}
            <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
            <div className="blur"
            style={{
                background:'#CIF5FF',
                top: '70%',
                width:'21rem',
                hight:'11rem',
                left:'60%'
            }}
            ></div>
            
        </div>
    </div>
  )
}

export default Intro