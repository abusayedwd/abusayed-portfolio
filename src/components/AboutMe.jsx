/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { fadein } from "../hooks/fadein";
import { Link } from "react-scroll";
import { MdEmail, MdFacebook, MdWhatsapp } from "react-icons/md";

const AboutMe = () => {
  return (
    <div id="about" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-12 lg:flex-row-reverse lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadein("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[550px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadein("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="font-semibold text-color text-5xl">About Me</h2>
            <h3 className="h3 mb-4 mt-4">
              I'm <span className="text-color">Mahabub Ahmed</span> a MERN Stack
              web developer, loves to create attractive websites with
              user-friendly experiences.
            </h3>
            <p className="mb-4">
              I'm experienced in developing websites that are fully responsive
              to all kinds of devices. I have the ability to write semantic,
              cross-browser compatible, clean code by hand that is re-useable,
              maintainable, and easy to understand. The main areas of my
              expertise are HTML, CSS, Bootstrap, JavaScript , React & Redux. I
              also have intermediate knowledge of Next.js Node.js, Express.js &
              MongoDB. So if you are looking for a front-end developer for your
              company, I can be the solution you're looking for. I am very much
              enthusiastic to show you how my experience and skills meet your
              needs. You can send email directly from here or contact with me
              via
            </p>
            <div className="font-semibold">
              <div className="flex gap-2 items-center">
                <MdFacebook /> Mahabub Ahmed
              </div>
              <div className="flex gap-2 items-center">
                <MdWhatsapp /> +8801704031181
              </div>
              <div className="flex gap-2 items-center">
                <MdEmail /> mahabub.ahmed175@gmail.com
              </div>
            </div>

            <Link to="home">
              <button className="btn-main mt-2">Connect With Me</button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
