import "./HeroImgStyles.css";

import React from "react";
import IntroImg from "../assets/intro-bg.jpg"
import {Link} from "react-router-dom";
const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
          <img className="into-img" src={IntroImg} alt="IntroImg"/>

    </div>
    <div className="content">
      <p>Hello, I'm Nikhil A Btech Undergrad @IIIT JABALPUR</p>
       <h1>A Mern Stack Developer</h1>
      
      <div>
       <a href="NIKHIL_BARMAN_CV.pdf" download='NIKHIL_BARMAN_CV.pdf'> 
       <button className="btn btn-dark">Resume</button></a>

        <Link to="/Contact" className="btn btn-light">Contact</Link>
      </div>


    </div>

  </div>;
};

export default HeroImg;
