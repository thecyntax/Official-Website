import React from "react";
import Project from "./sections/project-section/Project";
import Hero from "./sections/hero-section/Hero";
import Service from "./sections/service-section/Service";
import WhyChooseUs from "./sections/why-choose-us/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <Project />
      <WhyChooseUs />
      <Service />
    </div>
  );
};

export default Home;
