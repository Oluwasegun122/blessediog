"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] bg-white shadow-md rounded-full z-50">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Left Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          BlessedIOG
        </Link>

        {/* Centered Navigation */}
        <div className="hidden md:flex bg-gray-100 px-6 py-2 rounded-full space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-500">
            Home
          </Link>
          <Link href="/projects" className="text-gray-700 hover:text-blue-500">
            Projects
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-500">
            About Me
          </Link>
        </div>

        {/* Right Edge Text */}
        <div className="hidden md:block text-gray-700 text-lg font-semibold">
          Call
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white py-4 shadow-md text-center rounded-b-lg transition-all duration-300 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <Link href="/" className="block py-2 text-gray-700 hover:text-blue-500">
          <button onClick={() => setIsOpen(false)}>Home</button>
        </Link>
        <Link
          href="/projects"
          className="block py-2 text-gray-700 hover:text-blue-500"
        >
          <button onClick={() => setIsOpen(false)}>Projects</button>
        </Link>
        <Link
          href="/about"
          className="block py-2 text-gray-700 hover:text-blue-500"
        >
          <button onClick={() => setIsOpen(false)}>About Me</button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
