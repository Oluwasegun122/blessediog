"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-2 left-0 right-0 h-14 lg:h-16 bg-white rounded-full mx-5 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-8 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Left Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-gray-800 hover:text-purple-600 transition-colors"
          >
            BlessedIOG
          </Link>

          {/* Centered Navigation for Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/projects"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/about_me"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group"
            >
              About Me
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
            </Link>
          </div>

          {/* Right Edge CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-medium hover:shadow-lg transition-all hover:from-purple-700 hover:to-pink-600"
            >
              Contact Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FaTimes size={24} className="text-purple-600" />
            ) : (
              <FaBars size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg absolute top-16 left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-4 px-6 py-4">
          <Link
            href="/"
            className="text-gray-700 hover:text-purple-600 font-medium py-2 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-gray-700 hover:text-purple-600 font-medium py-2 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/about_me"
            className="text-gray-700 hover:text-purple-600 font-medium py-2 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </Link>
          <Link
            href="/contact"
            className="mt-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-medium text-center"
            onClick={() => setIsOpen(false)}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
