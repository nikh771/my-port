import "./AboutContentStyles.css";

import React from "react";
import {Link} from "react-router-dom";

import Skills from "../components/Skills";
const AboutContent = () => {
  return <div className="about">

     <div className="left">
      <h1>Hello...</h1>
      <p>I'm a Btech Undergrad @ IIIT Jabalpur A Web Developer </p>
      <Link to="/Contact">
   <button className="btn btn-dark">Contact</button>
  
    </Link>
 </div>
 <div>
            <Skills />
            </div>

     <div className="right">
       <div className="img-container">
        <div className="img-stacktop">
              
             
               
        </div>
           
       </div>
     </div>
    
  </div>;
};

export default AboutContent;
