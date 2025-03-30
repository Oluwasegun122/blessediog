"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  slug: string;
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data: Project[]) => {
        // Only take the first three projects
        setProjects(data.slice(0, 3));
      })
      .catch((err) => console.error("Error fetching projects:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center">Loading Projects...</p>;

  return (
    <section className="my-10 px-5">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-4xl font-extrabold tracking-wider uppercase text-gray-800 relative inline-block">
          Projects
          <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-1 w-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></span>
        </h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-600 line-clamp-2">
                {project.description}
              </p>
              <Link href={`/projects/${project.slug}`}>
                <a className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600">
                  Read More
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/projects">
          <a className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-all">
            View All Projects
          </a>
        </Link>
      </div>
    </section>
  );
}
