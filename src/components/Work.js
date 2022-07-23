import "./WorkCardStyles.css";

import React from "react";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCradData";
const Work = () => {
  return (
  <div className="work-container">
    <h1 >Projects</h1>
    <h1 className="Project-heading">
      <div className="project-container">

        {WorkCardData.map((val, ind)=>{
             return(
              <WorkCard 
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              Text={val.Text}
              view={val.view}
              />
             )
        })}
      </div>
    </h1>
  </div>
  );
};

export default Work;
