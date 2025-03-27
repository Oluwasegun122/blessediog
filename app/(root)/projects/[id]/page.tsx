import ProjectDetail from "@/app/components/ProjectDetail";

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  // Now the component is async so that Next.js can handle props that might be promises
  return <ProjectDetail projectId={params.id} />;
}

// This function pre-generates static paths for each project.
export async function generateStaticParams() {
  const res = await fetch("https://api/projects"); // Replace with your actual API URL
  const projects = await res.json();

  return projects.map((project: { id: string }) => ({
    id: project.id.toString(),
  }));
}
