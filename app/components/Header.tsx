"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed h-14 top-3 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] bg-white via-purple-600 to-pink-500 text-black shadow-lg rounded-full z-50">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Left Logo */}
        <Link href="/" className="text-2xl font-bold">
          BlessedIOG
        </Link>

        {/* Centered Navigation for Desktop */}
        <div className="hidden md:flex bg-white bg-opacity-20 px-6 py-2 rounded-full space-x-6">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/projects" className="hover:text-gray-300">
            Projects
          </Link>
          <Link href="/about_me" className="hover:text-gray-300">
            About Me
          </Link>
        </div>

        {/* Right Edge Text */}
        <div className="hidden md:block text-lg font-semibold">
          Call
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-center rounded-b-lg overflow-hidden transition-transform transform origin-top ${
          isOpen ? "scale-y-100" : "scale-y-0"
        }`}
      >
        <div className="flex flex-col py-4 space-y-3">
          <Link href="/" className="hover:text-gray-300">
            <button onClick={() => setIsOpen(false)}>Home</button>
          </Link>
          <Link href="/projects" className="hover:text-gray-300">
            <button onClick={() => setIsOpen(false)}>Projects</button>
          </Link>
          <Link href="/about_me" className="hover:text-gray-300">
            <button onClick={() => setIsOpen(false)}>About Me</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
