"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
<<<<<<< HEAD
import Image from "next/image";
=======
>>>>>>> 01ae528b09dc9ea5701947b5e5d442c0c838d035
import Loading from "@/app/components/Loading";

interface Project {
  id: string;
  image: string;
  title: string;
  contents: string;
}

const ProjectPage = () => {
<<<<<<< HEAD
  const { id } = useParams(); // Get project ID from dynamic route
=======
  const { id } = useParams(); // Get ID from dynamic route
>>>>>>> 01ae528b09dc9ea5701947b5e5d442c0c838d035
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

<<<<<<< HEAD
    const fetchProject = async () => {
      try {
        const res = await fetch(`/api/projects/${id}`);
        if (!res.ok) throw new Error("Project not found");

        const data: Project = await res.json();
        setProject(data);
      } catch (error) {
        console.error(error);
        router.push("/404"); // Redirect if project is not found
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id, router]);

  if (loading) return <Loading />;
  if (!project)
    return <p className="text-center text-red-500">Project not found</p>;

  return (
    <div className="pt-20 px-5 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">{project.title}</h1>

      <div className="relative w-full h-64 md:h-96 mb-6">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-md"
        />
      </div>

      <p className="text-lg text-gray-700 leading-relaxed">
        {project.contents}
      </p>
=======
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
  if (!project) return <p>Project not found</p>;

  return (
    <div className="pt-20 px-5">
      <h1 className="text-4xl">Project</h1>
      <img src={project.image} alt={project.title} className="w-full h-auto" />
      <h1 className="text-2xl font-bold">{project.title}</h1>
      <p className="text-lg">{project.contents}</p>
>>>>>>> 01ae528b09dc9ea5701947b5e5d442c0c838d035
    </div>
  );
};

export default ProjectPage;
