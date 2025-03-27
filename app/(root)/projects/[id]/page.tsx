import ProjectDetail from "@/app/components/ProjectDetail"; 
import { PageProps } from "next";

interface Project {
  id: string;
  image: string;
  title: string;
  contents: string;
}

// ✅ Fetch project data at build time
export async function generateStaticParams() {
  const res = await fetch("https://api/projects"); // Replace with actual API
  const projects: Project[] = await res.json();

  return projects.map((project) => ({
    id: project.id.toString(), // Ensure ID is a string
  }));
}

// ✅ Fix: Use `PageProps`
export default function ProjectPage({ params }: PageProps<{ id: string }>) {
  return <ProjectDetail projectId={params.id} />;
}
