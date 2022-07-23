import React from "react";
import Navbi from "../components/Navbi";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import Work from "../components/Work"
import Skills from "../components/Skills";
const Home = () => {
  return <div>
    <Navbi/>
    <HeroImg />
    <Work />
    <Skills />
    <Footer />
  </div>;
};

export default Home;
