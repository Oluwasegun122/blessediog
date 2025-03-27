import ProjectDetail from "@/app/components/ProjectDetail";

interface ProjectPageProps {
  params: { id: string };
}

// ✅ Define the `ProjectPage` function correctly
export default function ProjectPage({ params }: ProjectPageProps) {
  return <ProjectDetail projectId={params.id} />;
}

// ✅ Ensure `generateStaticParams` is correctly defined
export async function generateStaticParams() {
  const res = await fetch("https://your-api.com/api/projects"); // Replace with actual API URL
  const projects = await res.json();

  return projects.map((project: { id: string }) => ({
    id: project.id.toString(), // Ensure ID is always a string
  }));
}
