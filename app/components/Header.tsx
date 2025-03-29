// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] bg-white shadow-md rounded-full z-50">
//       <div className="flex justify-between items-center px-6 py-3">
//         {/* Left Logo */}
//         <Link href="/" className="text-2xl font-bold text-gray-800">
//           BlessedIOG
//         </Link>

//         {/* Centered Navigation */}
//         <div className="hidden md:flex bg-gray-100 px-6 py-2 rounded-full space-x-6">
//           <Link href="/" className="text-gray-700 hover:text-blue-500">
//             Home
//           </Link>
//           <Link href="/projects" className="text-gray-700 hover:text-blue-500">
//             Projects
//           </Link>
//           <Link href="/about" className="text-gray-700 hover:text-blue-500">
//             About Me
//           </Link>
//         </div>

//         {/* Right Edge Text */}
//         <div className="hidden md:block text-gray-700 text-lg font-semibold">
//           Core
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-700 focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white py-4 shadow-md text-center rounded-b-lg">
//           <Link
//             href="/"
//             className="block py-2 text-gray-700 hover:text-blue-500"
//             onClick={() => setIsOpen(false)}
//           >
//             Home
//           </Link>
//           <Link
//             href="/projects"
//             className="block py-2 text-gray-700 hover:text-blue-500"
//             onClick={() => setIsOpen(false)}
//           >
//             Projects
//           </Link>
//           <Link
//             href="/about"
//             className="block py-2 text-gray-700 hover:text-blue-500"
//             onClick={() => setIsOpen(false)}
//           >
//             About Me
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Header;

import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed w-full z-10 px-5 pt-2">
      <div className="hidden md:block ">
        <div className="navbar bg-base-100 rounded-3xl">
          <div className="navbar-start">
            <div className="dropdown">
              <div className="flex-1">
                <a className="btn btn-ghost text-xl">BlessedIOG</a>
              </div>
            </div>
          </div>
          <div className="navbar-center">
            <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
              <li>
                <Link href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Projects
                  {/* <span className="badge badge-sm badge-warning">NEW</span> */}
                  <span className="badge badge-sm">99+</span>
                </Link>
              </li>
              <li>
                <Link href="/about_me">
                  About Me
                  <span className="badge badge-xs badge-info"></span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* mobile nav */}
      <div className="navbar bg-base-100 md:hidden rounded-3xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">BlessedIOG</a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
