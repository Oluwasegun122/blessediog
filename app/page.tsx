import Image from "next/image";
<<<<<<< HEAD
import AboutMe from "./components/AboutMe";
=======
>>>>>>> 01ae528b09dc9ea5701947b5e5d442c0c838d035

export default function Home() {
  return (
    <div className="">
<<<<<<< HEAD
      <div className="relative min-h-screen flex items-center justify-center bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/pro_img2.jpeg"
            alt="Project Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
            className="opacity-80"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-white text-center px-4 md:px-10">
          <h1 className="text-5xl font-bold mb-5">Hello there</h1>
          <p className="text-lg mb-5">
            I use cutting-edge tools and techniques to turn complex data sets
            into actionable insights.
          </p>
          <button className="btn btn-primary px-6 py-3 text-lg">
            Get Started
          </button>
=======
      {/* slide section */}
      <div
        className="hero min-h-screen"

        // style={{
        //   backgroundImage:
        //     {"url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)"},
        // }}
      >
        <Image
          className="hero min-h-screen"
          src="./images/pro_img2.jpeg"
          alt=""
        />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              I use cutting-edge tools and techniques to turn complex data sets
              into actionable insights.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
>>>>>>> 01ae528b09dc9ea5701947b5e5d442c0c838d035
        </div>
      </div>
      {/* about me section */}
      <div>
        <div className="my-10 flex flex-col items-center">
          <h2 className="text-4xl font-extrabold tracking-wider uppercase text-gray-800 relative inline-block">
            About Me
            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-1 w-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></span>
          </h2>
        </div>

<<<<<<< HEAD
        <AboutMe />
=======
        <h1>aboute</h1>
>>>>>>> 01ae528b09dc9ea5701947b5e5d442c0c838d035
      </div>
      {/* cards */}

      <div className="my-10 flex flex-col items-center px-5">
        <h2 className="text-4xl font-extrabold tracking-wider uppercase text-gray-800 relative inline-block">
          Projects
          <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-1 w-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></span>
        </h2>
      </div>

      <h1>project</h1>

      <div>
        <div className="my-10 flex flex-col items-center">
          <h2 className="text-4xl font-extrabold tracking-wider uppercase text-gray-800 relative inline-block">
            Certificate
            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-1 w-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></span>
          </h2>
        </div>
        Certificate
      </div>
      {/* footer */}
      <h1>footer</h1>
    </div>
  );
}
