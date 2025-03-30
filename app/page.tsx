import Image from "next/image";
import AboutMe from "./components/AboutMe";
import ProjectsSection from "./components/ProjectsSection";
import CertificationsSection from "./components/CertificationsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center bg-gray-100">
        <Image
          src="/images/hero.jpg" // Check this path
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-white text-4xl font-bold">
            Welcome to My Portfolio
          </h1>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white text-center px-4 md:px-10">
          <h1 className="text-5xl font-bold mb-5">Hello there</h1>
          <p className="text-lg mb-5">
            I use cutting-edge tools and techniques to turn complex data sets
            into actionable insights.
          </p>
          <button className="btn btn-primary px-6 py-3 text-lg">
            Get Started
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="my-10 flex flex-col items-center">
        <h2 className="text-4xl font-extrabold tracking-wider uppercase text-gray-800 relative inline-block">
          About Me
          <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-1 w-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></span>
        </h2>
      </div>
      <AboutMe />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Certifications Section */}
      <CertificationsSection />

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-100">
        <Footer />
      </footer>
    </div>
  );
}
