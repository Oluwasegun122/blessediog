<<<<<<< HEAD
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  slug: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  return (
    <div className="p-6 mx-auto max-w-5xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Projects</h1>
      {loading ? (
        <p className="text-center">Loading projects...</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="relative w-full h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="text-gray-600 line-clamp-2">
                  {project.description}
                </p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
=======
export default function page() {
  return (
    <div className="pt-20 px-5">
      <h1 className="text-4xl">My Projects</h1>
      Project
>>>>>>> 01ae528b09dc9ea5701947b5e5d442c0c838d035
    </div>
  );
}
