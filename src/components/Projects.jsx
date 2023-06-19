/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import React from "react";
import { motion } from "framer-motion";
import { fadein } from "../hooks/fadein";

import img1 from "../assets/portfolio-img1.png";
import img2 from "../assets/portfolio-img2.png";
import img3 from "../assets/portfolio-img3.png";
import img4 from "../assets/portfolio-img1.png";
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

const projects = [
  {
    image: `${img1}`,
    title: "Golden Peaks",
    technologies: [
      { tech1: `${logo1}` },
      { tech2: `${logo4}` },
      { tech3: `${logo6}` },
      { tech4: `${logo5}` },
    ],
    liveLink: "https://assignment-12-1c977.web.app/",
    clientCode: "https://github.com/Astro177/Golden-Peaks-Client",
    serverCode: "https://github.com/Astro177/Golden-Peaks-Server",
  },
  {
    image: `${img2}`,
    title: "Playful Delights",
    technologies: [
      { tech1: `${logo1}` },
      { tech2: `${logo4}` },
      { tech3: `${logo6}` },
      { tech4: `${logo5}` },
    ],
    liveLink: "https://assignment-11-a4819.web.app/",
    clientCode: "https://github.com/Astro177/Playful-Delights",
    serverCode: "https://github.com/Astro177/Playful-Delights-server",
  },
  {
    image: `${img3}`,
    title: "Kitchen Diaries",
    technologies: [
      { tech1: `${logo1}` },
      { tech3: `${logo6}` },
      { tech4: `${logo5}` },
    ],
    liveLink: "https://assignment-12-1c977.web.app/",
    clientCode: "https://github.com/Astro177/Golden-Peaks-Client",
    serverCode: "https://github.com/Astro177/Golden-Peaks-Server",
  },
  {
    image: `${img4}`,
    title: "Opportunities Point",
    technologies: [
      { tech1: `${logo1}` },
      { tech3: `${logo6}` },
      { tech4: `${logo5}` },
    ],
    liveLink: "https://exquisite-baklava-16bf3e.netlify.app/",
    clientCode: "https://github.com/Astro177/Opprtunity-Point",
  },
  //   {
  //     image: `${img1}`,
  //     title: "Golden Peaks",
  //     technologies: [
  //         {tech1: `${logo1}`},
  //         {tech3: `${logo6}`},
  //         {tech4: `${logo5}`},
  //     ],
  //     liveLink: "https://assignment-12-1c977.web.app/",
  //     clientCode: "https://github.com/Astro177/Golden-Peaks-Client",
  //     serverCode: "https://github.com/Astro177/Golden-Peaks-Server",
  //   },
  //   {
  //     image: `${img1}`,
  //     title: "Golden Peaks",
  //     technologies: [
  //         {tech1: `${logo1}`},
  //         {tech3: `${logo6}`},
  //         {tech4: `${logo5}`},
  //     ],
  //     liveLink: "https://assignment-12-1c977.web.app/",
  //     clientCode: "https://github.com/Astro177/Golden-Peaks-Client",
  //     serverCode: "https://github.com/Astro177/Golden-Peaks-Server",
  //   },
];
const Projects = () => {
  //   console.log(projects[0].technologies[0].tech1);
  return (
    <section id="projects" className="">
      <div className="container mx-auto">
        <SectionTitle heading={"PROJECTS"} />
        <div className="flex-1 gap-y-12 mt-32 mb-10">
          <div>
            <h2 className="h2 leading-tight text-color font-semibold">
              My Latest <br /> Work
            </h2>
            <p className="max-w-sm mb-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates omnis eaque maxime quo qui enim deleniti aliquid modi.
              Quidem, placeat!
            </p>
            <button className="btn-main">View All Project</button>
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center justify-center gap-10">
          {projects.slice(0, 4).map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
            >
              <div className="group-hover:bg-black/70 w-1/2 absolute z-40 transition-all duration-300"></div>
              <img
                src={project.image}
                alt=""
                className="group-hover:scale-125 transition-all duration-500"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-44 transition-all duration-500 z-50 text-color text-5xl font-bold mb-6">
                {project.title}
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 text-color text-5xl font-bold mb-6 flex gap-6">
                {project.technologies.map((item, i) => (
                  <img
                    src={item}
                    key={i}
                    className="h-12 w-12 rounded-full"
                  />
                ))}
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 flex gap-4">
                <a href={project.liveLink}>
                  <button className="btn">Live</button>
                </a>
                <a href={project.clientCode}>
                  <button className="btn">Client</button>
                </a>
                {project.serverCode ? (
                  <a href={project.serverCode}>
                    <button className="btn btn-outline">Server</button>
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
