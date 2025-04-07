import Image from "next/image";
import AboutMe from "./components/AboutMe";
import ProjectsSection from "./components/ProjectsSection";
import CertificationsSection from "./components/CertificationsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/pro_img1.jpg"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
            className="opacity-70 hover:opacity-80 transition-opacity duration-500"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white opacity-0 animate-slideUp [animation-fill-mode:forwards]">
            Hello there.
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 leading-relaxed opacity-0 animate-slideUp [animation-fill-mode:forwards] [animation-delay:200ms]">
            I use cutting-edge tools and techniques
            <br className="hidden sm:block" />
            to turn complex data sets into actionable
            <br className="hidden sm:block" />
            insights.
          </p>

          <div className="opacity-20 animate-slideUp [animation-fill-mode:forwards] [animation-delay:400ms]">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/20">
              Get Started
            </button>
          </div>
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
      <footer className="py-0">
        <Footer />
      </footer>
    </div>
  );
}
