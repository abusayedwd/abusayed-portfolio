import React from "react";
import logo from "/Logo(mahabub_ahmed).png";

const Header = () => {
  return (
    <header className="bg-pink-500 py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={logo} alt="logo" className="w-16 rounded-full"/>
          </a>
          <button className="btn btn-sm">Work With me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
