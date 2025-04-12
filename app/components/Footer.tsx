import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import DocumentModal from "./DocumentModal";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto text-center md:text-left grid md:grid-cols-4 gap-6">
        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-bold">Contact Me</h2>
          <p className="text-sm">Email: faithobajafa@email.com</p>
          <p className="text-sm">Phone: +123 706 5316</p>
          <p className="text-sm">Location: Lagos, Nigeria</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-bold">Quick Links</h2>
          <ul className="space-y-2 text-sm">
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
              <Link href="/about_me" className="hover:text-gray-300">
                About Me
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-bold">Follow Me</h2>
          <div className="flex justify-center md:justify-start space-x-4 text-xl">
            <Link href="#" className="hover:text-gray-300">
              <FaFacebook />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <FaTwitter />
            </Link>
            <Link
              href="https://www.linkedin.com/in/faith-obajafa"
              className="hover:text-gray-300"
            >
              <FaLinkedin />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <FaGithub />
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold">Documents</h2>
          <div className="flex justify-center md:justify-start space-x-4 text-xl">
            <DocumentModal
              triggerType="link"
              placement="footer"
              buttonText="View"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 text-center text-xs opacity-75">
        &copy; {new Date().getFullYear()} BlessedIOG. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
