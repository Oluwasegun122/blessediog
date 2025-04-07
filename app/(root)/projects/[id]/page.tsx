"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Loading from "@/app/components/Loading";
import Footer from "@/app/components/Footer";
import ErrorBoundary from "@/app/components/ErrorBoundary";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  contents: string;
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
  const [error, setError] = useState<Error | null>(null);

  const fetchProject = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!id) {
        throw new Error("Project ID is missing");
      }

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
    } catch (err) {
      console.error("Fetch error:", err);
      setError(
        err instanceof Error ? err : new Error("Failed to load project")
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProject();
  }, [id]);

  if (error) {
    return <ErrorBoundary error={error} reset={fetchProject} />;
  }

  if (loading) return <Loading />;

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Project not found
          </h1>
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
                target.onerror = null;
                target.src = "/images/placeholder-project.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent"></div>
          </div>

          {/* Project Content */}
          <div className="max-w-3xl mx-auto">
            {/* Project Tags */}
            {project.tags && (
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Description */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {project.description}
            </p>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              {project.contents.split("\n").map((paragraph, i) => (
                <p key={i} className="mb-4">
                  {paragraph || <br />}
                </p>
              ))}
            </div>

            {/* Project Links */}
            <div className="flex flex-wrap gap-4 mb-16">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  View Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
