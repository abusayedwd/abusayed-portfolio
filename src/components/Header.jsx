import React from "react";
import logo from "/Logo(mahabub_ahmed).png";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={logo} alt="logo" className="w-16 rounded-full nav-hover"/>
          </a>
          <button className="btn-main">Work With me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
