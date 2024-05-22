import React from "react";
import Description from "../components/Description";
import Hero from "../components/Hero";
import FloorPlan from "./FloorPlan";
import PriceList from "./PriceList";
import Master from "./Master";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Description />
      <FloorPlan />
      <PriceList />
      <Master />
      <About />
      <Contact />
    </>
  );
};

export default Home;
