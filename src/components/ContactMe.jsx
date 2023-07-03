/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { fadein } from "../hooks/fadein";
import { BsTelegram } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const ContactMe = () => {
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const forms = e.target;
    const name = forms.name.value;
    emailjs
      .sendForm(
        "service_1g9uwu9",
        "template_x3evx4l", 
        form.current, 
        "AkC6mNX1-79ab7Oxz"
      )
      .then(
        (result) => {
          if (result) {
            toast.success(`Thank you for your message ${name}`);
          }
        },
        (error) => {
          toast.error("Sorry, The email was not sent!");
        }
      );
    forms.reset();
  };
  return (
    <section id="contact" className="my-16 md:mt-32 mt-[600px] section">
      <div className="container mx-auto">
        <div className="flex flex-col md:px-16 lg:flex-row">
          <motion.div
            variants={fadein("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="w-[480px] flex-1 justify-start items-center"
          >
             
            <h2 className="text-[45px] lg:text-[85px] leading-none mb-12 font-medium">
              You can contact me <br />
              <span className="text-color">If you want!</span>
            </h2>
          </motion.div>
          <motion.form
            ref={form}
            onSubmit={handleSubmit}
            variants={fadein("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              type="text"
              placeholder="Your Name"
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
              <BsTelegram className="hover:animate-bounce"/>
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
