"use client";
import Image from "next/image";
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
  if (!project) return <p>Project not found</p>;

  return (
    <div className="pt-20 px-5">
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <Image src={project.image} alt={project.title} width={600} height={400} className="w-full h-auto" />
      <p className="text-lg">{project.contents}</p>
    </div>
  );
};

export default ProjectPage;

// ✅ Generate Static Params for SSG (Fixes Missing `generateStaticParams()` Error)
export async function generateStaticParams() {
  const res = await fetch("https://api/projects"); // Replace with your API
  const projects: Project[] = await res.json();

  return projects.map((project) => ({
    id: project.id.toString(), // Ensure it's a string
  }));
}
