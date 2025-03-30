import { NextResponse } from "next/server";

export async function GET() {
  const aboutData = {
    name: "Oluwasegun Oyebamiji",
    title: "Software Developer & Data Analyst",
    bio: "I am a passionate developer with expertise in Python, web development, and data analysis. I build efficient, scalable applications with modern technologies.",
    skills: [
      "Python",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "SQL",
      "Data Analysis",
    ],
    projects: [
      {
        id: 1,
        title: "School Portal",
        description: "A dynamic student management system.",
        link: "#",
      },
      {
        id: 2,
        title: "E-commerce Platform",
        description: "A scalable online marketplace.",
        link: "#",
      },
    ],
    testimonials: [
      {
        name: "John Doe",
        feedback: "Oluwasegun is an amazing developer. His work is top-notch!",
      },
      {
        name: "Jane Smith",
        feedback: "Highly professional and delivers quality results on time.",
      },
    ],
    contact: {
      email: "oluwasegun@example.com",
      github: "https://github.com/oluwasegun122",
      linkedin: "https://linkedin.com/in/oluwasegun",
    },
  };

  return NextResponse.json(aboutData);
}
