import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import TechnicalStack from "../components/TechnicalStack";
//import Expeirence from "../components/Expeirence";
import Contact from "../components/Contact";
import SocialLinks from "../components/SocialLinks";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Portfolio />
      <TechnicalStack />
      <Contact />


      <SocialLinks />

    </div>
  );
};

export default Home;
