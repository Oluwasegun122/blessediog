"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Loading from "@/app/components/Loading";
import Footer from "@/app/components/Footer";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  slug: string;
  tags?: string[];
  date?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectPage() {
  const { id } = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("Project ID is missing");
      setLoading(false);
      return;
    }

    const fetchProject = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/projects/${id}`);

        if (!res.ok) {
          throw new Error(
            res.status === 404
              ? "Project not found"
              : `Failed to fetch project (status: ${res.status})`
          );
        }

        const data = await res.json();
        setProject(data);
        setError(null);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err instanceof Error ? err.message : "Failed to load project");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id, router]);

  if (loading) return <Loading />;

  if (error || !project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Error Loading Project
          </h1>
          <p className="text-gray-700 mb-6">{error || "Project not found"}</p>
          <button
            onClick={() => router.push("/projects")}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Project Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              {project.title}
            </h1>
            {project.date && (
              <p className="text-lg text-gray-500 mb-6">
                Completed:{" "}
                {new Date(project.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            )}
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Project Image with error handling */}
          <div className="relative w-full h-64 md:h-[500px] rounded-xl overflow-hidden shadow-xl mb-12">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              quality={90}
              priority
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/images/placeholder-project.jpg";
                target.onerror = null; // Prevent infinite loop
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent"></div>
          </div>

          {/* Rest of your component... */}
        </div>
      </div>
      <Footer />
    </>
  );
}
