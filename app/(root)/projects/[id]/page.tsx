import ProjectDetail from "@/app/components/ProjectDetail";

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  return <ProjectDetail projectId={params.id} />;
}

export async function generateStaticParams() {
  const res = await fetch("https://api/projects"); // Replace with your API URL
  const projects = await res.json();

  return projects.map((project: { id: string }) => ({
    id: project.id.toString(),
  }));
}
