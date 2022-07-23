import "./AboutContentStyles.css";

import React from "react";
import {Link} from "react-router-dom";
import Me from "../assets/cyptopr.jpg";
const AboutContent = () => {
  return <div className="about">

     <div className="left">
      <h1>Hello...</h1>
      <p>I'm a Btech Undergread @ IIIT Jabalpur A Web Developer </p>
      <Link to="/Contact">
   <button className="btn btn-dark">Contact</button>
</Link>


      



  </div>

     <div className="right">
       <div className="img-container">
        <div className="img-stacktop">
                 <img src={Me} className="img" alt="true"/>
        </div>

       </div>
     </div>
    
  </div>;
};

export default AboutContent;
