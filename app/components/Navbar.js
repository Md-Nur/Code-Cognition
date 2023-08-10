import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="bg-[#23232B] text-[#DEDEDE] flex justify-between items-center px-28 py-7">
      <div className="nav-section text-4xl text-[#AAFF30] w-32 h-14 font-black">
        <Image src="/logo.png" alt="Logo" width={123} height={54} />
      </div>
      <div className="nav-section">
        <ul className="flex gap-7 text-2xl">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Contact</li>
          <li className="cursor-pointer">Projects</li>
        </ul>
      </div>
      <div className="nav-section">
        <button className="bg-[#AAFF30] w-48 h-11 rounded-3xl text-[#23232B] text-2xl font-black">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
