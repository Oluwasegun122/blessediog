"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full rounded-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-3 px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          BlessedIOG
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link href="/projects" className="text-gray-700 hover:text-blue-500">Projects</Link>
          <Link href="/about_me" className="text-gray-700 hover:text-blue-500">About Me</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md text-center">
          <Link href="/" className="block py-2 text-gray-700 hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/projects" className="block py-2 text-gray-700 hover:text-blue-500" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/about_me" className="block py-2 text-gray-700 hover:text-blue-500" onClick={() => setIsOpen(false)}>About Me</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
