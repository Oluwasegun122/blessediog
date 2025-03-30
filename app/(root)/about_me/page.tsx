"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface AboutData {
  name: string;
  bio: string;
  skills: string[];
  projects: { title: string; description: string }[];
  testimonials: { name: string; feedback: string }[];
  contact: { email: string; phone: string };
}

const AboutPage = () => {
  const [data, setData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/about")
      .then((res) => res.json())
      .then((data: AboutData) => {
        setData(data);
      })
      .catch((error) => console.error("Error fetching about data:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>Failed to load data.</p>;

  return (
    <div className="px-5">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        About: {data.name}
      </h1>
      <p className="text-lg mb-6">{data.bio}</p>

      <h2 className="text-2xl font-semibold mb-2">Skills</h2>
      <ul className="list-disc pl-6 mb-6">
        {data.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {data.projects.map((project, index) => (
          <div key={index} className="border p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-2">Testimonials</h2>
      <div className="mb-6">
        {data.testimonials.map((testimonial, index) => (
          <div key={index} className="border p-4 rounded-lg shadow mb-4">
            <p className="italic">"{testimonial.feedback}"</p>
            <p className="font-bold">- {testimonial.name}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-2">Contact</h2>
      <p>Email: {data.contact.email}</p>
      <p>Phone: {data.contact.phone}</p>
    </div>
  );
};

export default AboutPage;
