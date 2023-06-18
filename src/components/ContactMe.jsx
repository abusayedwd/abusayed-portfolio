/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { fadein } from "../hooks/fadein";
import { BsTelegram } from "react-icons/bs";

const ContactMe = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const postData = { name: name, email: email, message: message };
    console.log(postData);
    form.reset()
  };
  return (
    <section id="contact" className="my-16 lg:section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadein("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="w-[480px] flex-1 justify-start items-center"
          >
            <h4 className="text-2xl uppercase font-semibold mb-2 tracking-wide">
              Get In Touch
            </h4>
            <h2 className="text-[45px] lg:text-[85px] leading-none mb-12 font-medium">
              Let's Work <br />
              <span className="text-color">Together!</span>
            </h2>
          </motion.div>
          <motion.form onSubmit={handleSubmit}
            variants={fadein("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              type="text"
              placeholder="Your Email"
              name="name"
              className="bg-transparent border-b py-3 outline-none w-full focus:border-cyan-500 transition duration-200"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="bg-transparent border-b py-3 outline-none w-full focus:border-cyan-500 transition-all"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="bg-transparent border-b py-3 outline-none w-full focus:border-cyan-500 transition-all resize-none mb-12"
            ></textarea>
            <button type="submit" className="btn-main flex items-center gap-2">
              <BsTelegram />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
