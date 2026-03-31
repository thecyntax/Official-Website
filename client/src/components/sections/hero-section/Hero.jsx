import React from "react";
import HeroDesktop from "./HeroDesktop";
import HeroMobile from "./HeroMobile";

const Hero = () => {
  return (
    <div id="home">
      <HeroDesktop />
      <HeroMobile />
    </div>
  );
};

export default Hero;
