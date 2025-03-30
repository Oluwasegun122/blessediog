"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full md:w-[80%] bg-white shadow-md rounded-b-lg z-50 h-16 flex items-center px-4">
      <div className="flex justify-between items-center w-full">
        {/* Left Logo */}
        <Link href="/" className="text-xl md:text-2xl font-bold text-gray-800">
          BlessedIOG
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-500">
            Home
          </Link>
          <Link href="/projects" className="text-gray-700 hover:text-blue-500">
            Projects
          </Link>
          <Link href="/about_me" className="text-gray-700 hover:text-blue-500">
            About Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-white shadow-md transition-all duration-300 ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center py-4">
          <Link
            href="/"
            className="py-2 text-gray-700 hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="py-2 text-gray-700 hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/about_me"
            className="py-2 text-gray-700 hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
