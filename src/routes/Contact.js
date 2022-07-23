import React from "react";
import Footer from "../components/Footer";
import Navbi from "../components/Navbi";
import HeroImg2 from "../components/HeroImg2";
import Form from "../components/Form"
const Contact = () => {
  return <div>
     <Navbi/>
    <HeroImg2 heading="CONTACT." text="Let's have a chat" />
    <Form />
   <Footer />
  </div>;
};

export default Contact;
