import Project from "./sections/project-section/Project";
import Hero from "./sections/hero-section/Hero";
import Service from "./sections/service-section/Service";
import WhyChooseUs from "./sections/why-choose-us/WhyChooseUs";
import OurClients from "./sections/our-client/OurClients";

const Home = () => {
  return (
    <div>
      <div id="home" className="scroll-mt-24">
        <Hero />
      </div>
      <OurClients />
      <div id="why-choose-us" className="scroll-mt-13 lg:scroll-mt-16">
        <WhyChooseUs />
      </div>
      <div id="projects" className="scroll-mt-13 lg:scroll-mt-16">
        <Project />
      </div>
      <div id="services" className="scroll-mt-13 lg:scroll-mt-16">
        <Service />
      </div>
    </div>
  );
};

export default Home;
