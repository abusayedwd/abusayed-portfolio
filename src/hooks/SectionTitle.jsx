import React from "react";
import { motion } from "framer-motion";
import { fadein } from "../hooks/fadein";

const SectionTitle = ({ heading }) => {
  return (
    <div className="text-center flex flex-col items-center justify-center mx-auto mt-20">
      <motion.p
        variants={fadein("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="font-semibold font-secondary text-4xl"
      >
        {heading}
      </motion.p>
      <motion.hr
        variants={fadein("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="border-2 border-cyan-600 mx-auto w-[220px] mt-2"
      />
    </div>
  );
};

export default SectionTitle;
