/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { reveal } from "../hooks/fadein";
import SectionTitle from "../hooks/SectionTitle";

import img1 from "../assets/projects/sports-camp.webp";
import img2 from "../assets/projects/toy-market.webp";
import img3 from "../assets/projects/recipe-hub.webp";
import trade from "../assets/projects/trading-business.webp";
import collegeB from "../assets/projects/college-booking.webp";
import electronic from "../assets/projects/electronics-hub.webp";

// NOTE: year / role / details are a best guess — update them with the real
// timeline and the specific features you want to highlight.
const projects = [
  {
    image: img1,
    title: "Sports Summer Camp",
    year: "2023",
    role: "Solo · Full-stack",
    details:
      "A class-enrolment platform with role-based dashboards for students, instructors and admins. Instructors submit classes for admin approval; students enrol and pay for approved classes via Stripe. JWT-protected API.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Firebase Auth"],
    liveLink: "https://sports-school-camp.web.app/",
    clientCode: "https://github.com/abusayedwd/sports-summerCamp-client",
    serverCode: "https://github.com/abusayedwd/sports-summerCamp-server",
  },
  {
    image: img2,
    title: "KidDoll Toy Market",
    year: "2023",
    role: "Solo · Full-stack",
    details:
      "A toy marketplace with search by name, category tabs and price sorting. Authenticated users can add, update and delete their own listings, with product details behind protected routes.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "https://doll-toy-a11.web.app/",
    clientCode: "https://github.com/abusayedwd/doll-toyMarket-client-side",
    serverCode: "https://github.com/abusayedwd/doll-toyMarket-server-side",
  },
  {
    image: img3,
    title: "BD Recipe Hub",
    year: "2023",
    role: "Solo · Frontend + Firebase",
    details:
      "A recipe directory with email and Google sign-in, lazy-loaded chef cards, per-chef recipe pages and a client-side favourites feature behind private routes.",
    tech: ["React", "Firebase", "Express", "Tailwind"],
    liveLink: "https://food-recipe-a10.web.app/",
    clientCode: "https://github.com/abusayedwd/food-recipe-clientSide",
    serverCode: "https://github.com/abusayedwd/food-recipe-serverSide",
  },
  {
    image: collegeB,
    title: "College Booking",
    year: "2024",
    role: "Solo · Full-stack",
    details:
      "A college-admission site with search, detail pages, an admission form stored per user and a rating-based review system.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "https://college-booking-1ae20.web.app/",
    clientCode: "https://github.com/abusayedwd/college-booking-client",
    serverCode: "https://github.com/abusayedwd/college-booking-server",
  },
  {
    image: trade,
    title: "Online Trading & Business",
    year: "2024",
    role: "Team · Frontend",
    details:
      "A team project where I built the marketing site and dashboard UI in Next.js — responsive layouts, reusable components and the data-heavy trading views.",
    tech: ["Next.js", "React", "Tailwind"],
    liveLink: "https://online-trading-and-business-five.vercel.app/",
    clientCode: "https://github.com/fensami/online_trading_and_business",
  },
  {
    image: electronic,
    title: "Electronics Hub",
    year: "2024",
    role: "Solo · Frontend",
    details:
      "An e-commerce front end for electronics with category browsing, product detail pages, a cart and a checkout flow.",
    tech: ["React", "Express", "Tailwind"],
    liveLink: "https://electronics-shop-client.vercel.app/",
    clientCode: "https://github.com/abusayedwd/electronics-shop-client",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section border-t border-zinc-200 dark:border-zinc-800">
      <div className="container-page">
        <SectionTitle
          eyebrow="Projects"
          heading="Selected work"
          description="A few things I've built. Each one is deployed and open source — links below every card."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              {...reveal(0.05 + (i % 3) * 0.05)}
              className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="aspect-[16/10] overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <span className="shrink-0 text-xs text-zinc-400 dark:text-zinc-500">
                    {project.year}
                  </span>
                </div>
                <p className="mt-0.5 text-xs font-medium text-accent">
                  {project.role}
                </p>

                <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {project.details}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-4 border-t border-zinc-100 pt-4 text-sm dark:border-zinc-800">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline"
                  >
                    <FiExternalLink size={15} />
                    Live
                  </a>
                  <a
                    href={project.clientCode}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  >
                    <FiGithub size={15} />
                    Client
                  </a>
                  {project.serverCode && (
                    <a
                      href={project.serverCode}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                    >
                      <FiGithub size={15} />
                      Server
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
