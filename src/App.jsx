import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Banner />
        <AboutMe />
        <Skills />
        <Projects />
        <Services />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
};

export default App;
