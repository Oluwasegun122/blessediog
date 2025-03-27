import ProjectDetail from "@/app/components/ProjectDetail";

// Bypass the strict PageProps typing by using "any"
export default function ProjectPage(props: any) {
  const { id } = props.params;
  return <ProjectDetail projectId={id} />;
}

export async function generateStaticParams() {
  const res = await fetch("https://api/projects"); // Replace with your actual API URL
  const projects = await res.json();

  return projects.map((project: { id: string }) => ({
    id: project.id.toString(), // Ensure ID is a string
  }));
}
