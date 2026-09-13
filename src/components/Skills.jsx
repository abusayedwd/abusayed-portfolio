import React from "react";
import { motion } from "framer-motion";
import { reveal } from "../hooks/fadein";
import SectionTitle from "../hooks/SectionTitle";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import mongo from "../assets/mongodb.png";
import express from "../assets/express.png";
import firebase from "../assets/firebase.jpg";

const groups = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "JavaScript", icon: javascript },
      { name: "React", icon: react },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "Bootstrap", icon: bootstrap },
    ],
  },
  {
    title: "Backend & tools",
    items: [
      { name: "Node.js", icon: node },
      { name: "Express", icon: express },
      { name: "MongoDB", icon: mongo },
      { name: "Firebase", icon: firebase },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section border-t border-zinc-200 dark:border-zinc-800">
      <div className="container-page">
        <SectionTitle
          eyebrow="Skills"
          heading="Technologies I work with"
          description="The tools I reach for most often when building and shipping web applications."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {groups.map((group, gi) => (
            <motion.div
              key={group.title}
              {...reveal(0.05 + gi * 0.05)}
              className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800"
            >
              <h3 className="eyebrow mb-4">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                  >
                    <img
                      src={item.icon}
                      alt=""
                      className="h-4 w-4 rounded-sm object-contain"
                      loading="lazy"
                    />
                    {item.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
