import React from "react";
import { Link } from "react-scroll";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

const socials = [
  { href: "https://github.com/abusayedwd", label: "GitHub", Icon: FiGithub },
  {
    href: "https://www.linkedin.com/in/abu-sayed-6619b127b/",
    label: "LinkedIn",
    Icon: FiLinkedin,
  },
  { href: "mailto:abusayednalita1234@gmail.com", label: "Email", Icon: FiMail },
];

const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Abu Sayed. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-zinc-500 transition-colors hover:text-accent dark:text-zinc-400 dark:hover:text-white"
            >
              <Icon size={18} />
            </a>
          ))}
          <Link
            to="home"
            smooth
            duration={500}
            aria-label="Back to top"
            className="cursor-pointer text-zinc-500 transition-colors hover:text-accent dark:text-zinc-400 dark:hover:text-white"
          >
            <FiArrowUp size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
