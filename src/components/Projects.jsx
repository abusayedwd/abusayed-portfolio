/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import React from "react";
import { motion } from "framer-motion";
import { fadein } from "../hooks/fadein";
import img1 from "../assets/projects/sports camp.png";
import img2 from "../assets/projects/toyMarket.png";
import img3 from "../assets/projects/bdrecipe hub.png";
 
// import img5 from "../assets/portfolio-img2.png";
// import img6 from "../assets/portfolio-img3.png";

import logo1 from "../assets/reeact.png";
// import logo2 from "../assets/css-logo.png";
// import logo3 from "../assets/html-logo.png";
import logo4 from "../assets/mongodb.png";
import logo5 from "../assets/tailwind (1).png";
import logo6 from "../assets/express.png";
// import logo7 from "../assets/js_logo.png";
import SectionTitle from "../hooks/SectionTitle";

import { TbWorld, TbCode, TbCodeCircle } from "react-icons/tb";


const projects = [
  {
    image: img1,
    title: "Golden Peaks",
    details: "Summer camp full MERN web application.",
    technologies: [
      { image: logo1 },
      { image: logo4 },
      { image: logo6 },
      { image: logo5 },
    ],
    liveLink: "https://assignment-12-1c977.web.app/",
    clientCode: "https://github.com/Astro177/Golden-Peaks-Client",
    serverCode: "https://github.com/Astro177/Golden-Peaks-Server",
  },
  {
    image: img2,
    title: "Playful Delights",
    details: "Toy store full MERN web application.",
    technologies: [
      { image: logo1 },
      { image: logo4 },
      { image: logo6 },
      { image: logo5 },
    ],
    liveLink: "https://assignment-11-a4819.web.app/",
    clientCode: "https://github.com/Astro177/Playful-Delights",
    serverCode: "https://github.com/Astro177/Playful-Delights-server",
  },
  {
    image: img3,
    title: "Kitchen Diaries",
    details: "Chef and food details full React web application.",
    technologies: [
      { image: logo1 },
      { image: logo6 },
      { image: logo5 },
    ],
    liveLink: "https://assignment-12-1c977.web.app/",
    clientCode: "https://github.com/Astro177/Golden-Peaks-Client",
    serverCode: "https://github.com/Astro177/Golden-Peaks-Server",
  },
  // {
  //   image: img4,
  //   title: "Opportunities Point",
  //   details: "Job hunting full React web application.",
  //   technologies: [
  //     { image: logo1 },
  //     { image: logo6 },
  //     { image: logo5 },
  //   ],
  //   liveLink: "https://exquisite-baklava-16bf3e.netlify.app/",
  //   clientCode: "https://github.com/Astro177/Opprtunity-Point",
  // },
      
];
const Projects = () => {

  const handleShow = () => {};
  return (
    <section id="projects" className="">
        <div className="container mx-auto">
          <SectionTitle heading={"PROJECTS"} />
          <motion.div
            variants={fadein("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 gap-y-12 mt-32 mb-10"
          >
            <div>
              <h2 className="h2 leading-tight text-color font-semibold">
                My Latest <br /> Work
              </h2>
              <p className="max-w-sm mb-6">
                Here are the projects that i have finished working on, these are my best projects so far, you can see the details when you hover over the image.
              </p>
              <button className="btn-main" onClick={handleShow}>
                View All Project
              </button>
            </div>
          </motion.div>
          <motion.div
            variants={fadein("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="grid sm:grid-cols-1 lg:grid-cols-2 items-center justify-center gap-10"
          >
            {projects.slice(0, 4).map((project) => (
              <div
                key={project.title}
                className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
              >
                <div className="group-hover:bg-black/70 w-1/2 absolute z-40 transition-all duration-300"></div>
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
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 flex sm:gap-0 md:gap-4">
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
                    <a href={project.serverCode} target="_blank">
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
