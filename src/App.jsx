import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Navbar />
      <Services />
      <Projects />
      <AboutMe />
      <ContactMe />
    </div>
  );
};

export default App;
