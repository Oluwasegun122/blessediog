import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white mt-10 shadow-lg">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Contact Section */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Contact Me</h2>
          <p>Email: example@email.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Location: Lagos, Nigeria</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-gray-300">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About Me
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Follow Me</h2>
          <div className="flex justify-center md:justify-start space-x-4 text-2xl">
            <Link href="#" className="hover:text-gray-300">
              <FaFacebook />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <FaTwitter />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <FaLinkedin />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 text-center text-sm opacity-75">
        <p>
          &copy; {new Date().getFullYear()} BlessedIOG. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
