import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import { PropagateLoader } from "react-spinners";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center mt-[500px]">
        <PropagateLoader
         size={25}
          color="#07a8D1"          
        />
      </div>
      ) : (
        <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
          <Header />
          <Banner />
          <Navbar />
          <Services />
          <Projects />
          <AboutMe />
          <ContactMe />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
