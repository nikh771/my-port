import React from "react";
import "./skill.css";
function Skills() {
  return (
    <div className="sk">
      <div className="skills_section">
        <div className="skills_head">
          <h2>
            My <span>Skills</span>
          </h2>

          <p>Here is my skills to represent The Domain that I'm exploring</p>
        </div>

        <div className="skills_main">
          <div className="skill_bar">
            <div className="info">
              <p>C++</p>
            </div>

            <div className="bar">
              <span className="html"></span>
            </div>
          </div>
          <div className="skill_bar">
            <div className="info">
              <p>Data Structure and Algo</p>
            </div>

            <div className="bar">
              <span className="html"></span>
            </div>
          </div>

          <div className="skill_bar">
            <div cclassName="info">
              <p>CSS</p>
            </div>

            <div className="bar">
              <span className="css"></span>
            </div>
          </div>

          <div className="skill_bar">
            <div className="info">
              <p>Java Script</p>
            </div>

            <div className="bar">
              <span className="sass"></span>
            </div>
          </div>

          <div className="skill_bar">
            <div className="info">
              <p>Html</p>
            </div>

            <div className="bar">
              <span className="js"></span>
            </div>
          </div>

          <div className="skill_bar">
            <div className="info">
              <p>React js</p>
            </div>

            <div className="bar">
              <span className="react"></span>
            </div>
          </div>

          {/* <div className="skill_bar">
            <div className="info">
              <p>Node js</p>
            </div>

            <div className="bar">
              <span className="node"></span>
            </div>
          </div> */}

          <div className="skill_bar">
            <div className="info">
              <p>Familiar With Express js</p>
            </div>

            <div className="bar">
              <span className="express"></span>
            </div>
          </div>

          {/* <div className="skill_bar">
            <div className="info">
              <p>Mongo DB</p>
            </div>

            <div className="bar">
              <span className="mongo"></span>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
}

export default Skills;
