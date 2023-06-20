/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import banner from "../assets/Banner-img.png";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsDownload,
} from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadein } from "../hooks/fadein";
const Banner = () => {
  return (
    <section id="home" className="mt-24 flex items-center">
      <div className="container mx-auto mt-24 lg:mt-0">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h3
              variants={fadein("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-xl"
            >
              Hey There, I'm
            </motion.h3>
            <motion.h1
              variants={fadein("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[1] lg:text-[110px] text-color uppercase"
            >
              Mahabub Ahmed
            </motion.h1>
            <motion.div
              variants={fadein("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
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
              <motion.div
                variants={fadein("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex gap-x-8 max-w-max mx-auto lg:mx-0 mt-8 text-4xl"
              >
                <a
                  target="_blank"
                  href="https://www.facebook.com/mahabub.ahmmed.52/"
                >
                  <BsFacebook className="nav-hover" />
                </a>
                <a target="_blank" href="https://github.com/Astro177">
                  <BsGithub className="nav-hover" />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/mahabub_tro/"
                >
                  <BsInstagram className="nav-hover" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/mahabub-ahmed-683490278/"
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
                  href="https://drive.google.com/file/d/1mPTgLk00YEfKOAqL5xaw368dhHroO-_9/view"
                  target="_blank"
                >
                  <button className="flex items-center justify-center gap-2 btn-main">
                    Resume
                    <BsDownload className="hover:animate-bounce transition-all"/>
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
            className="hidden lg:flex flex-1 mx-auto max-w-max"
          >
            <img src={banner} alt="banner" className="rounded-full h-full mix-blend-lighten" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
