"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Loading from "@/app/components/Loading";

interface Project {
  id: string;
  image: string;
  title: string;
  contents: string;
}

const ProjectPage = () => {
  const { id } = useParams(); // Get ID from dynamic route
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/projects/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Project not found");
        }
        return res.json();
      })
      .then((data: Project) => {
        setProject(data);
      })
      .catch((error) => {
        console.error(error);
        router.push("/404"); // Redirect if project is not found
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, router]);

  if (loading) return <Loading />;
  if (!project) return <p>Project not found Thank you</p>;

  return (
    <div className="pt-20 px-5">
      <h1 className="text-4xl">Project {id}</h1>
      <img src={project.image} alt={project.title} className="w-full h-auto" />
      <h1 className="text-2xl font-bold">{project.title}</h1>
      <p className="text-lg">{project.contents}</p>
    </div>
  );
};

export default ProjectPage;
