import Project from "./sections/project-section/Project";
import Hero from "./sections/hero-section/Hero";
import Service from "./sections/service-section/Service";
import WhyChooseUs from "./sections/why-choose-us/WhyChooseUs";
import OurClients from "./sections/our-client/OurClients";

const Home = () => {
  return (
    <div>
      <Hero />
      <OurClients />
      <WhyChooseUs />
      <Project />
      <Service />
    </div>
  );
};

export default Home;
