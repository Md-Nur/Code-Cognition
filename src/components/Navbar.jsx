import React from "react";

const Navbar = () => {
  return (
    <nav className="flex bg-primary text-white justify-around h-20 items-center">
      <div>
        <a href="./">
          <img src="./src/assets/cncLogo.png" alt="logo" className="h-14" />
        </a>
      </div>
      <div className="text-lg ">
        <ul className="flex justify-between items-center md:w-[600px]">
          <li>Home</li>
          <li>Services</li>
          <li>About Us</li>
          <li>Projects</li>
          <li>
            <button className="p-1 mx-1 md:px-5 md:mx-2 rounded-3xl bg-secondary text-primary font-bold text-xl">
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
