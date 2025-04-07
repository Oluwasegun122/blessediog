import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-xl w-full max-w-4xl mx-auto border border-gray-100">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Image Section */}
        <div className="relative group">
          <div className="w-48 h-48 md:w-56 md:h-56 relative overflow-hidden rounded-full border-4 border-white shadow-lg">
            <Image
              src="/images/img.jpg"
              alt="Faith Dasola Obajafa"
              width={224}
              height={224}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              priority
            />
          </div>
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full shadow-md">
            <h2 className="text-lg font-bold whitespace-nowrap">
              Faith Dasola Obajafa
            </h2>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <h3 className="text-2xl font-bold text-gray-800">
            Data Analyst & Business Intelligence Specialist
          </h3>

          <div className="space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              With 5+ years of experience transforming complex datasets into
              strategic insights, I specialize in predictive analytics, data
              visualization, and machine learning applications for business
              growth.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {["SQL", "Python", "Tableau", "Power BI", "R", "Excel"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white text-blue-600 text-sm font-medium rounded-full shadow-sm border border-blue-100"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
            <Link
              href="/about_me"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-md hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2"
            >
              <span>My Full Story</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-blue-600 border border-blue-200 rounded-lg shadow-md hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
            >
              <span>Contact Me</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
