"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "./Loading";

interface Project {
  id: string;
  image: string;
  title: string;
  contents: string;
}

export default function ProjectDetail({ projectId }: { projectId: string }) {
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!projectId) return;

    fetch(`/api/projects/${projectId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Project not found");
        return res.json();
      })
      .then((data: Project) => setProject(data))
      .catch((error) => {
        console.error(error);
        router.push("/404");
      })
      .finally(() => setLoading(false));
  }, [projectId, router]);

  if (loading) return <Loading />;
  if (!project) return <p>Project not found</p>;

  return (
    <div className="pt-20 px-5">
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <Image src={project.image} alt={project.title} width={600} height={400} className="w-full h-auto" />
      <p className="text-lg">{project.contents}</p>
    </div>
  );
}
