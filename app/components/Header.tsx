"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-4 md:py-5">
        {/* Left Logo */}
        <Link href="/" className="text-2xl font-bold">
          BlessedIOG
        </Link>

        {/* Centered Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link href="/projects" className="hover:text-blue-400">
            Projects
          </Link>
          <Link href="/about_me" className="hover:text-blue-400">
            About Me
          </Link>
        </div>

        {/* Right Edge Text */}
        <div className="hidden md:block text-lg font-semibold">Call</div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-800 text-white text-center transition-all duration-300 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <Link href="/" className="block py-3 hover:text-blue-400">
          <button onClick={() => setIsOpen(false)}>Home</button>
        </Link>
        <Link href="/projects" className="block py-3 hover:text-blue-400">
          <button onClick={() => setIsOpen(false)}>Projects</button>
        </Link>
        <Link href="/about_me" className="block py-3 hover:text-blue-400">
          <button onClick={() => setIsOpen(false)}>About Me</button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
