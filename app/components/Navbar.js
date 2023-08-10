"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState("hidden");
  const handleMenu = () => {
    setMobileMenu(mobileMenu === "hidden" ? "" : "hidden");
  };

  return (
    <header>
      <nav className="bg-[#23232B] text-[#DEDEDE] flex justify-between items-center px-7 xl:justify-evenly py-7">
        <div className="text-4xl w-32 h-14 font-black">
          <Image src="/logo.png" alt="Logo" width={123} height={54} />
        </div>
        <div className="hidden xl:flex gap-7 text-2xl">
            <Link href="./" className="cursor-pointer">Home</Link>
            <Link href="./" className="cursor-pointer">Services</Link>
            <Link href="./" className="cursor-pointer">About Us</Link>
            <Link href="./" className="cursor-pointer">Contact</Link>
            <Link href="./" className="cursor-pointer">Projects</Link>
        </div>
        <div className="hidden xl:flex">
          <button className="bg-[#AAFF30] w-48 h-11 rounded-3xl text-[#23232B] text-2xl font-black">
            Get Started
          </button>
        </div>
        <div className="xl:hidden flex" id="menu">
          <Image
            src="/menu.svg"
            alt="Menu"
            width={50}
            height={50}
            onClick={handleMenu}
          />
        </div>
      </nav>
      <div
        className={`w-full flex flex-col text-2xl text-[#DEDEDE] bg-gray-800 ${mobileMenu}`}
      >
        <Link href="./Home" className="p-3 text-center hover:bg-gray-900">
          Home
        </Link>
        <Link href="./Services" className="p-3 text-center hover:bg-gray-900">
          Services
        </Link>
        <Link href="./About" className="p-3 text-center hover:bg-gray-900">
          About Us
        </Link>
        <Link href="./Contact" className="p-3 text-center hover:bg-gray-900">
          Contact
        </Link>
        <Link href="./Projects" className="p-3 text-center hover:bg-gray-900">
          Projects
        </Link>
        <Link
          href="./"
          className="text-center bg-[#AAFF30] p-3 text-[#23232B] text-2xl font-black"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
