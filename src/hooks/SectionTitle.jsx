/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";
import { reveal } from "./fadein";

const SectionTitle = ({ eyebrow, heading, description }) => {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <motion.p {...reveal(0)} className="eyebrow mb-3">
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        {...reveal(0.05)}
        className="text-2xl font-semibold tracking-tight sm:text-3xl"
      >
        {heading}
      </motion.h2>
      {description && (
        <motion.p
          {...reveal(0.1)}
          className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-400"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
