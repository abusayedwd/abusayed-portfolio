import React from "react";
import html from "../assets/html-logo.png";
import css from "../assets/css-logo.png";
import javascript from "../assets/js_logo.png";
import bootstrap from "../assets/bs.png";
import tailwind from "../assets/tailwind (1).png";
import react from "../assets/reeact.png";
import node from "../assets/Noode.png";
import mongo from "../assets/mongodb.png";

import { motion } from "framer-motion";
import { fadein } from "../hooks/fadein";
import SectionTitle from "../hooks/SectionTitle";

const Skills = () => {
  return (
    <>
      <SectionTitle heading="MY SKILLS" />
      <div className="md:flex mt-12 w-full">
        <motion.div
          variants={fadein("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-4 h-20 flex-grow card rounded-box place-items-center"
        >
          <div className="flex flex-col justify-center items-center">
            <img src={html} alt="" className="w-16 rounded-full nav-hover" />
            <p className="font-secondary font-semibold">HTML</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={css} alt="" className="w-16 rounded-full nav-hover" />
            <p className="font-secondary font-semibold">CSS</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={javascript}
              alt=""
              className="w-16 rounded-full nav-hover"
            />
            <p className="font-secondary font-semibold">JAVASCRIPT</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={bootstrap}
              alt=""
              className="w-16 rounded-full nav-hover"
            />
            <p className="font-secondary font-semibold">BOOTSTRAP</p>
          </div>
        </motion.div>
        <div className="divider divider-horizontal border-cyan-700 border-x-2"></div>
        <motion.div
          variants={fadein("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-4 h-20 flex-grow card rounded-box place-items-center mt-12 md:mt-0"
        >
          <div className="flex flex-col justify-center items-center">
            <img
              src={tailwind}
              alt=""
              className="w-16 rounded-full nav-hover"
            />
            <p className="font-secondary font-semibold">TAILWIND</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={react} alt="" className="w-16 rounded-full nav-hover" />
            <p className="font-secondary font-semibold">REACT</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={node} alt="" className="w-16 rounded-full nav-hover" />
            <p className="font-secondary font-semibold">NODE</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={mongo} alt="" className="w-16 rounded-full nav-hover" />
            <p className="font-secondary font-semibold">MongoDB</p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
