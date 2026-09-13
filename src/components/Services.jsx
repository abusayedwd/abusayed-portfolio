import React from "react";
import { motion } from "framer-motion";
import { FiLayout, FiCode, FiTool } from "react-icons/fi";
import { reveal } from "../hooks/fadein";
import SectionTitle from "../hooks/SectionTitle";

const services = [
  {
    Icon: FiLayout,
    name: "Web application development",
    details:
      "End-to-end builds — UI, API and database — for dashboards, marketplaces and booking platforms.",
  },
  {
    Icon: FiCode,
    name: "React front-end development",
    details:
      "Responsive, accessible interfaces with React and Tailwind, from single-page apps to component libraries.",
  },
  {
    Icon: FiTool,
    name: "Maintenance & optimisation",
    details:
      "Bug fixes, dependency upgrades, performance work and new features on existing codebases.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section border-t border-zinc-200 dark:border-zinc-800">
      <div className="container-page">
        <SectionTitle
          eyebrow="Services"
          heading="How I can help"
          description="Whether you're starting something new or improving what you have."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              {...reveal(0.05 + i * 0.05)}
              className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-accent dark:border-zinc-800">
                <service.Icon size={18} />
              </div>
              <h3 className="mt-4 text-base font-semibold tracking-tight">
                {service.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {service.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
