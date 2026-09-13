/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi";
import { reveal } from "../hooks/fadein";
import portrait from "../assets/port.png";

const socials = [
  { href: "https://github.com/abusayedwd", label: "GitHub", Icon: FiGithub },
  {
    href: "https://www.linkedin.com/in/abu-sayed-6619b127b/",
    label: "LinkedIn",
    Icon: FiLinkedin,
  },
  { href: "mailto:abusayednalita1234@gmail.com", label: "Email", Icon: FiMail },
];

const Banner = () => {
  return (
    <section id="home" className="section pt-16 md:pt-24">
      <div className="container-page grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.div {...reveal(0)} className="mb-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available for work
            </span>
          </motion.div>
          <motion.h1
            {...reveal(0.05)}
            className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Abu Sayed
            <br />
            <span className="text-zinc-500 dark:text-zinc-400">
              I build full-stack web apps.
            </span>
          </motion.h1>
          <motion.p
            {...reveal(0.1)}
            className="mt-6 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400"
          >
            I build full-stack web apps with React and Node.js — from booking
            platforms and marketplaces to dashboards — with a focus on clean,
            maintainable code and a fast, accessible UI.
          </motion.p>

          <motion.div {...reveal(0.15)} className="mt-8 flex flex-wrap gap-3">
            <Link to="projects" smooth duration={500} offset={-64}>
              <button className="btn-primary">
                View projects
                <FiArrowRight size={16} />
              </button>
            </Link>
            <Link to="contact" smooth duration={500} offset={-64}>
              <button className="btn-ghost">Get in touch</button>
            </Link>
          </motion.div>

          <motion.div {...reveal(0.2)} className="mt-8 flex items-center gap-5">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-zinc-500 transition-colors hover:text-accent dark:text-zinc-400 dark:hover:text-white"
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          {...reveal(0.1)}
          className="mx-auto w-full max-w-[280px] md:max-w-none"
        >
          <div className="aspect-[5/5] overflow-hidden rounded-2xl  ">
            <img
              src={portrait}
              alt="Abu Sayed"
              className="h-full w-full object-cover object-top"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
