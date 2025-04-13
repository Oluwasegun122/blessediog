// app/api/about/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const aboutData = {
    name: "Faith Obajafa",
    bio: "A detail-driven data analyst with a passion for uncovering trends and insights hidden in data. Over the past five years, I've honed my ability to transform complex datasets into actionable strategies that drive growth and innovation.",
    avatar: "/images/img.jpg", // Update with your image path
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
      linkedin:
        "https://www.linkedin.com/in/faith-obajafa-339925232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "github.com/BLESSEDIOG",
      twitter: "x.com/FaithObajafa",
    },
  };

  return NextResponse.json(aboutData);
}
