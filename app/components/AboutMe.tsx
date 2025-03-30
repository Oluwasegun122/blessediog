import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div className="md:hidden flex flex-col md:flex-row justify-center items-center bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl mx-auto">
      {/* Image Section */}
      <div className="relative flex flex-col items-center mb-6 md:mb-0 md:mr-6">
        <div className="w-40 h-40 ring-4 ring-blue-500 rounded-full overflow-hidden">
          <Image
            src="/images/img.jpg"
            alt="Profile Picture"
            width={160}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-blue-500 text-white px-4 py-2 -mt-3 rounded-b-lg shadow-md">
          <h2 className="text-lg font-bold text-center">
            Faith Dasola Obajafa
          </h2>
        </div>
      </div>

      {/* Text Section */}
      <div className="text-center md:text-left max-w-lg">
        <p className="text-gray-700 text-lg mb-4">
          Hi, I&apos;m Faith Obajafa, a detail-driven data analyst with a strong
          passion for uncovering hidden trends and insights. With 5 years of
          experience in data analysis, I excel at transforming complex data into
          actionable recommendations that drive business growth.
        </p>
        <Link
          href="/about_me"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all"
        >
          Read More
        </Link>
      </div>
      {/* for pc */}
      <div className="sm:hidden relative flex flex-col items-center mb-6 md:mb-0 md:mr-6">
        <div className="ring-4 ring-blue-500 rounded-t-full overflow-hidden">
          <img
            src="./images/img.jpg"
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-t-full object-cover"
          />
        </div>
        <div className="bg-blue-500 text-white px-4 py-2 -mt-2 rounded-b-lg shadow-md">
          <h2 className="text-lg font-bold">Faith Dasola Obajafa</h2>
        </div>
      </div>
    </div>
  );
}
