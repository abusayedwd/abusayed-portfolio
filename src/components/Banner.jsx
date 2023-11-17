/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import me from '../assets/sayed-blck1.png'
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsDownload,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadein } from "../hooks/fadein";
import TextTransition, { presets } from "react-text-transition";

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2500);
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <section id="home" className="mt-24 flex items-center">
      <div className="container mx-auto mt-24 lg:mt-0">
        <div className="flex md:px-12 flex-col gap-y-10 lg:flex-row lg:items-center">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h2
              variants={fadein("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-xl"
            >
               Hi, This is
            </motion.h2>
            <motion.h2
              variants={fadein("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[45px] font-bold leading-[1] lg:text-[110px] text-color uppercase"
            >
              abu sayed
            </motion.h2>
            <motion.div
              variants={fadein("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <div className="lg:flex">
                <span className="mr-4">I'm a</span>
                <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  2000,
                  "React.JS Developer",
                  2000,
                  "Front End Developer",
                  2000,
                ]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
                className="text-color"
              />
                 
              </div>
              <motion.div
                variants={fadein("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex gap-x-8 max-w-max mx-auto lg:mx-0 mt-8 text-4xl"
              >
                <a
                  target="_blank"
                  href="https://web.facebook.com/profile.php?id=100007603728596"
                >
                  <BsFacebook className="nav-hover" />
                </a>
                <a target="_blank" href="https://github.com/abusayedwd">
                  <BsGithub className="nav-hover" />
                </a>
                 
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/abu-sayed-6619b127b/"
                >
                  <BsLinkedin className="nav-hover" />
                </a>
                 
              </motion.div>
              <motion.div
                variants={fadein("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="max-w-max mx-auto mt-6 lg:mx-0"
              >
                <a
                  href="https://drive.google.com/file/d/1Y5PFS1QcgfyYUwfJJ1kWojqFYtAToGys/view"
                  target="_blank"
                >
                  <button className="flex items-center justify-center gap-2 btn-main">
                    Resume
                    <BsDownload className="hover:animate-bounce transition-all" />
                  </button>
                </a>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            variants={fadein("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" lg:flex flex-1 mx-auto max-w-max"
          >
            <img
              src={me}
              alt="me"
              className="rounded-full h-full mix-blend-lighten"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
