import React from 'react';
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import WhoWeAre from "./WhoWeAre";
import Stats from './Stats';
import MaterialsWeUse from './MaterialsWeUse';
import ServiceAreas from './ServiceAreas';   // ← New Import

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhoWeAre />
      <Stats />
      <MaterialsWeUse />
      <ServiceAreas />          {/* ← Added here */}
    </>
  );
};

export default Home;