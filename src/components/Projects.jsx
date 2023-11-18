/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import React from "react";
import { motion } from "framer-motion";
import { fadein } from "../hooks/fadein";
import img1 from "../assets/projects/sports camp.png";
import img2 from "../assets/projects/toyMarket.png";
import img3 from "../assets/projects/bdrecipe hub.png";
import trade from "../assets/projects/trade.png";
import collegeB from '../assets/projects/collegeB.png';
import electronic from '../assets/projects/electronic.png';
import nextjs from '../assets/next js.jpg';
 

import logo1 from "../assets/reeact.png";
import logo4 from "../assets/mongodb.png";
import logo5 from "../assets/tailwind (1).png";
import logo6 from "../assets/express.png";
import SectionTitle from "../hooks/SectionTitle";

import { TbWorld, TbCode, TbCodeCircle } from "react-icons/tb";


const projects = [
  {
    image: img1,
    title: "Sport Summer Camp",
    details: "Summer camp MERN stack web application.",
    technologies: [
      { image: logo1 },
      { image: logo4 },
      { image: logo6 },
      { image: logo5 },
    ],
    liveLink: "https://sports-school-camp.web.app/",
    clientCode: "https://github.com/abusayedwd/sports-summerCamp-client",
    serverCode: "https://github.com/abusayedwd/sports-summerCamp-server",
  },
  {
    image: img2,
    title: "KIDOLL TOY",
    details: "Toy market MERN web application.",
    technologies: [
      { image: logo1 },
      { image: logo4 },
      { image: logo6 },
      { image: logo5 },
    ],
    liveLink: "https://doll-toy-a11.web.app/",
    clientCode: "https://github.com/abusayedwd/doll-toyMarket-client-side",
    serverCode: "https://github.com/abusayedwd/doll-toyMarket-server-side",
  },
  {
    image: img3,
    title: "BD RECIPE HUB",
    details: "Chef and food Recipe details full React web application.",
    technologies: [
      { image: logo1 },
      { image: logo6 },
      { image: logo5 },
    ],
    liveLink: "https://food-recipe-a10.web.app/",
    clientCode: "https://github.com/abusayedwd/food-recipe-clientSide",
    serverCode: "https://github.com/abusayedwd/food-recipe-serverSide",
  }, 
  {
    image: collegeB,
    title: "COLLEGE BOOKING",
    details: "This is online college booking site.",
    technologies: [
      { image: logo1 },
      { image: logo6 },
      { image: logo5 },
      { image: logo4 },
    ],
    liveLink: "https://college-booking-1ae20.web.app/",
    clientCode: "https://github.com/abusayedwd/college-booking-client",
    serverCode: "https://github.com/abusayedwd/college-booking-server",
  }, 
  {
    image: trade,
    title: "ONLINE TRADING BUSINESS",
    details: "This is our team project: I Worked as a front-end developer on this project.",
    technologies: [
      { image: logo1 },
      { image: logo6 },
      { image: logo5 },
      { image: nextjs },
    ],
    liveLink: "https://online-trading-and-business-five.vercel.app/",
    clientCode: "https://github.com/fensami/online_trading_and_business",
    
  }, 
  {
    image: electronic,
    title: "ELECTRONICS HUB",
    details: " Online shoping and full React web application.",
    technologies: [
      { image: logo1 },
      { image: logo6 },
      { image: logo5 },
    ],
    liveLink: "https://electronics-shop-client.vercel.app/",
    clientCode: "https://github.com/abusayedwd/electronics-shop-client",
     
  }, 
      
];
const Projects = () => {
 
  return (
    <section id="projects" className="">
        <div className="container mx-auto">
          
          <motion.div
            variants={fadein("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 gap-y-12 mt-32 mb-10"
          >
            <SectionTitle heading={"PROJECTS"} />
            <div className="text-center mt-6">
              <h2 className="h2 leading-tight text-color font-semibold">
                My Work
              </h2>
              <p >
                Here are the projects that i have finished <br /> working on these are my best projects so far  you <br /> can see the details when you hover over the image.
              </p>
               
            </div>
          </motion.div>
          <motion.div
            variants={fadein("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="grid sm:grid-cols-1 lg:grid-cols-3 items-center justify-center gap-10"
          >
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
              >
                <img
                  src={project.image}
                  alt=""
                  className="group-hover:scale-125 transition-all duration-500 w-screen h-[400px]"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-44 transition-all duration-700 z-50 text-color text-5xl font-bold mb-6">
                  {project.title}
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-36 transition-all duration-700 z-50 text-cyan-600 text-lg font-bold mb-6">
                  {project.details}
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 text-color text-5xl font-bold mb-6 flex gap-6">
                  {project.technologies.map((item, i) => (
                    <img
                      src={item.image}
                      key={i}
                      className="h-12 w-12 rounded-full nav-hover"
                    />
                  ))}
                </div>
                <div className="absolute -bottom-full w-[90%] mx-auto group-hover:bottom-10 transition-all duration-700 z-50 grid  grid-cols-3 sm:gap-0 md:gap-4">
                  <a href={project.liveLink} target="_blank">
                    <button className="project-btn flex items-center gap-2">
                      <TbWorld className="hover:animate-spin" />
                      Live
                    </button>
                  </a>
                  <a href={project.clientCode} target="_blank">
                    <button className="project-btn flex items-center gap-2">
                      <TbCode className="hover:animate-spin" />
                      Client
                    </button>
                  </a>
                  {project.serverCode ? (
                    <a className="" href={project.serverCode} target="_blank">
                      <button className="project-btn flex items-center gap-2">
                        <TbCodeCircle className="hover:animate-spin" />
                        Server
                      </button>
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
    </section>
  );
};

export default Projects;
