import React from "react";
import logo from "/MLogo.png";
import { Link } from "react-scroll";
import { MdWorkHistory } from "react-icons/md";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-color font-primary font-semibold">
            <a href="">
              <img
                src={logo}
                alt="logo"
                className="w-16 rounded-full hover:scale-150 transition duration-300"
              />
            </a>
            <h1>ahabub Ahmed</h1>
          </div>
          <Link to="projects" smooth={true}>
            <button className="btn-main flex items-center gap-2">
              See My Work
              <MdWorkHistory />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
