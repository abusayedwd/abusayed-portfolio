/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";
import { reveal } from "../hooks/fadein";
import SectionTitle from "../hooks/SectionTitle";

const socials = [
  { href: "mailto:abusayednalita1234@gmail.com", label: "Email", Icon: FiMail },
  { href: "https://github.com/abusayedwd", label: "GitHub", Icon: FiGithub },
  {
    href: "https://www.linkedin.com/in/abu-sayed-6619b127b/",
    label: "LinkedIn",
    Icon: FiLinkedin,
  },
];

const inputClass =
  "w-full rounded-lg border bg-transparent px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-zinc-400 focus:ring-1 dark:placeholder:text-zinc-500";

const validate = ({ name, email, message }) => {
  const errors = {};
  if (!name.trim()) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Please enter a valid email.";
  if (message.trim().length < 10)
    errors.message = "Message should be at least 10 characters.";
  return errors;
};

const ContactMe = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    // Honeypot: bots fill hidden fields, humans don't.
    if (e.target.company.value) return;

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length) return;

    setSending(true);
    try {
      await emailjs.sendForm(
        "service_1g9uwu9",
        "template_x3evx4l",
        form.current,
        "AkC6mNX1-79ab7Oxz"
      );
      toast.success(`Thanks, ${data.name.trim()}. I'll get back to you soon.`);
      e.target.reset();
      setErrors({});
    } catch (err) {
      toast.error("Something went wrong — please email me directly.");
    } finally {
      setSending(false);
    }
  };

  const fieldClass = (key) =>
    `${inputClass} ${
      errors[key]
        ? "border-red-400 focus:border-red-400 focus:ring-red-400 dark:border-red-500"
        : "border-zinc-300 focus:border-accent focus:ring-accent dark:border-zinc-700"
    }`;

  return (
    <section id="contact" className="section border-t border-zinc-200 dark:border-zinc-800">
      <div className="container-page grid gap-10 md:grid-cols-[1fr_1.1fr]">
        <motion.div {...reveal(0)}>
          <SectionTitle
            eyebrow="Contact"
            heading="Let's work together"
            description="Have a project in mind or just want to say hi? Send a message and I'll reply as soon as I can."
          />
          <div className="mt-8 flex flex-col gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-sm text-zinc-600 transition-colors hover:text-accent dark:text-zinc-400 dark:hover:text-white"
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          noValidate
          {...reveal(0.1)}
          className="flex flex-col gap-4 rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
        >
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className={fieldClass("name")}
              />
              {errors.name && (
                <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={fieldClass("email")}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
              )}
            </div>
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your message"
              rows={5}
              className={`${fieldClass("message")} resize-none`}
            />
            {errors.message && (
              <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={sending}
            className="btn-primary self-start disabled:opacity-60"
          >
            <FiSend size={15} />
            {sending ? "Sending…" : "Send message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactMe;
