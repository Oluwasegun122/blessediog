import ProjectDetail from "@/app/components/ProjectDetail";

export default function ProjectPage({ params }: { params: { id: string } }) {
  return <ProjectDetail projectId={params.id} />;
}

// ✅ Ensure correct static params function
export async function generateStaticParams() {
  const res = await fetch("https://your-api.com/api/projects"); // Replace with actual API
  const projects = await res.json();

  return projects.map((project: { id: string }) => ({
    id: project.id.toString(), // Ensure it's a string
  }));
}
