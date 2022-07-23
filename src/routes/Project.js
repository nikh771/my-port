import React from "react";
import Footer from "../components/Footer";
import Navbi from "../components/Navbi";
import HeroImg2 from "../components/HeroImg2";
import Work from "../components/Work";

const Project = () => {
  return <div>
    <Navbi/>
     <HeroImg2 heading="Work" text="Here is some of my work " />
     <Work />
     
    <Footer />
   </div>;
};

export default Project;
