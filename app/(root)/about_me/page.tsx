"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Loading from "@/app/components/Loading";
import Footer from "@/app/components/Footer";
import DownloadButtons from "@/app/components/DownloadButtons";

interface AboutData {
  name: string;
  bio: string;
  avatar?: string;
  specializations: string[];
  technicalSkills: {
    category: string;
    items: string[];
  }[];
  analyticalSkills: string[];
  softSkills: string[];
  professionalJourney: {
    description: string;
    highlights: string[];
  };
  valueProposition: {
    description: string;
    outcomes: string[];
  };
  hobbies: {
    professional: string[];
    personal: string[];
  };
  contact: {
    email: string;
    linkedin: string;
    github: string;
    twitter: string;
  };
}

const AboutPage = () => {
  const [data, setData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API call with your provided data
    const fetchData = () => {
      const aboutData: AboutData = {
        name: "Faith Obajafa",
        bio: "A detail-driven data analyst with a passion for uncovering trends and insights hidden in data. Over the past five years, I've honed my ability to transform complex datasets into actionable strategies that drive growth and innovation.",
        specializations: [
          "Extracting actionable insights from complex data sets",
          "Creating impactful data visualizations to tell compelling stories",
          "Applying statistical analysis and process improvement techniques",
        ],
        technicalSkills: [
          {
            category: "Programming Languages",
            items: ["Python", "R", "SQL"],
          },
          {
            category: "Data Analysis Tools",
            items: ["Excel", "Tableau", "Power BI"],
          },
          {
            category: "Database Management",
            items: ["MySQL", "SQL Server"],
          },
          {
            category: "Cloud Platforms",
            items: ["Microsoft Azure"],
          },
          {
            category: "Operating Systems",
            items: ["Windows", "Linux"],
          },
        ],
        analyticalSkills: [
          "Data cleaning and preprocessing",
          "Statistical analysis and modeling",
          "Trend forecasting and predictive analytics",
          "Data visualization and storytelling",
        ],
        softSkills: [
          "Problem-solving and critical thinking",
          "Effective communication and presentation",
          "Collaboration and teamwork",
          "Time management and adaptability",
          "Strong attention to detail",
        ],
        professionalJourney: {
          description:
            "I discovered my passion for data during my Statistics studies, where I delved into mathematical concepts and real-world applications. This passion led me to explore tools for data analysis and visualization, setting the foundation for my journey as a data analyst.",
          highlights: [
            "Worked on projects in Sales, Tech, Aerospace, Gambling, and Education industries, providing data-driven recommendations that influenced strategic decisions",
            "Collaborated with cross-functional teams to create and implement dynamic data visualizations, enhancing stakeholder engagement",
            "Designed and maintained databases, ensuring data integrity and quality",
          ],
        },
        valueProposition: {
          description:
            "As a meticulous data analyst, I bring together technical expertise, business insights, and creative problem-solving skills. This unique blend allows me to uncover hidden opportunities and deliver strategies that empower teams to make informed, data-driven decisions.",
          outcomes: [
            "Improved operational efficiency",
            "Enhanced customer experiences",
            "Informed strategic planning",
            "Revenue growth through data-driven decisions",
          ],
        },
        hobbies: {
          professional: [
            "Participating in data science competitions on Kaggle and DatAfrika to refine skills and learn new techniques",
            "Exploring libraries and frameworks like pandas, matplotlib, and scikit-learn",
            "Reading about AI, machine learning, and data visualization innovations",
          ],
          personal: [
            "Camping to reconnect with nature and recharge",
            "Reading science fiction and historical non-fiction books to broaden perspectives",
            "Traveling to experience different cultures and cuisines",
            "Cooking and experimenting with new recipes",
          ],
        },
        contact: {
          email: "faithobajafa@gmail.com",
          linkedin: "linkedin.com/in/faith-obajafa",
          github: "github.com/BLESSEDIOG",
          twitter: "x.com/FaithObajafa",
        },
      };
      setData(aboutData);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <Loading />;
  if (!data)
    return (
      <p className="text-center py-10 text-red-500">Failed to load data.</p>
    );

  return (
    <>
      <div className="max-w-6xl mx-auto px-5 py-10">
        {/* Introduction Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {data.avatar && (
              <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-primary shadow-lg">
                <Image
                  src={data.avatar}
                  alt={data.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Hi, I'm {data.name}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                {data.bio}
              </p>
            </div>
          </div>
        </section>
        {/* Specialization Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-gray-700">
            Specialization
          </h2>
          <ul className="space-y-3 list-disc pl-6">
            {data.specializations.map((item, index) => (
              <li key={index} className="text-lg">
                {item}
              </li>
            ))}
          </ul>
        </section>
        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-gray-700">
            Skills and Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-200">
            {/* Technical Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Technical Skills
              </h3>
              <div className="space-y-4">
                {data.technicalSkills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="font-medium mb-2">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 text-gray-200 bg-gray-800 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Analytical Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Analytical Skills
              </h3>
              <ul className="space-y-2">
                {data.analyticalSkills.map((skill, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 mt-0.5 mr-2 text-accent flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Soft Skills
              </h3>
              <ul className="space-y-2">
                {data.softSkills.map((skill, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 mt-0.5 mr-2 text-accent flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        {/* Professional Journey */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-gray-700">
            Professional Journey
          </h2>
          <p className="text-lg mb-6">{data.professionalJourney.description}</p>

          <h3 className="text-xl font-semibold mb-4 text-primary">
            Key Highlights
          </h3>
          <ul className="space-y-4">
            {data.professionalJourney.highlights.map((highlight, index) => (
              <li key={index} className="flex">
                <div className="flex-shrink-0 mr-4 mt-1">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                </div>
                <p>{highlight}</p>
              </li>
            ))}
          </ul>
        </section>
        {/* Value Proposition */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-gray-700">
            Value Proposition
          </h2>
          <p className="text-lg mb-6">{data.valueProposition.description}</p>

          <h3 className="text-xl font-semibold mb-4 text-primary">
            Key Outcomes of My Work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.valueProposition.outcomes.map((outcome, index) => (
              <div
                key={index}
                className="border border-gray-700 p-4 rounded-lg bg-gray-800/30"
              >
                <p className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* Hobbies and Interests */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-gray-700">
            Hobbies and Interests
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Professional Interests
              </h3>
              <ul className="space-y-3">
                {data.hobbies.professional.map((hobby, index) => (
                  <li key={index} className="flex">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                    </div>
                    <p>{hobby}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Personal Interests
              </h3>
              <ul className="space-y-3">
                {data.hobbies.personal.map((hobby, index) => (
                  <li key={index} className="flex">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                    </div>
                    <p>{hobby}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-gray-700">
              Professional Documents
            </h2>
            <p className="text-lg mb-4">
              Download my complete CV or condensed resume:
            </p>
            <DownloadButtons />
          </section>
        </section>
        {/* Call to Action */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Connect!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm always excited to connect with like-minded professionals and
            collaborate on innovative data projects.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href={`mailto:${data.contact.email}`}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email Me
            </a>

            <a
              href={`https://${data.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>

            <a
              href={`https://${data.contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>

            <a
              href={`https://${data.contact.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
              Twitter
            </a>
          </div>

          <p className="text-lg">
            Whether you're interested in sharing knowledge, exploring new ideas,
            or just chatting about the latest trends in data analytics, I'd love
            to hear from you!
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
