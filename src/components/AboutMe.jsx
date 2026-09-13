/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { reveal } from "../hooks/fadein";
import SectionTitle from "../hooks/SectionTitle";

const facts = [
  { label: "Focus", value: "Full-stack web apps" },
  { label: "Stack", value: "React · Node · Express · MongoDB" },
  { label: "Location", value: "Bangladesh · Remote" },
  { label: "Availability", value: "Open to work" },
];

const AboutMe = () => {
  return (
    <section id="about" className="section border-t border-zinc-200 dark:border-zinc-800">
      <div className="container-page">
        <SectionTitle eyebrow="About" heading="A bit about me" />

        <div className="mt-10 grid gap-10 md:grid-cols-[1.5fr_1fr]">
          <motion.div
            {...reveal(0.1)}
            className="space-y-4 text-base leading-7 text-zinc-600 dark:text-zinc-400"
          >
            <p>
              I'm a MERN-stack developer who enjoys turning ideas into clean,
              responsive interfaces backed by well-structured APIs. I care about
              readable code, accessibility and shipping things that hold up over
              time.
            </p>
            <p>
              My day-to-day tools are React and Tailwind on the front end, with
              Node.js, Express and MongoDB on the back end. I've built booking
              platforms, e-commerce sites and dashboards, and I've worked as the
              front-end developer on team projects.
            </p>
            <p>
              If you're looking for someone to build or maintain a web
              application, I'd be glad to help.
            </p>
          </motion.div>

          <motion.dl
            {...reveal(0.15)}
            className="divide-y divide-zinc-200 rounded-xl border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800"
          >
            {facts.map((f) => (
              <div key={f.label} className="flex flex-col gap-1 px-4 py-3">
                <dt className="eyebrow">{f.label}</dt>
                <dd className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  {f.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
