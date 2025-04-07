import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: any // Using "any" to bypass type constraint for now
) {
  const { id } = context.params as { id: string };

  // Mock project data
  const mockProjects = [
    {
      id: "1",
      title: "Sample Project",
      image: "/images/sample-project.jpg",
      description: "This is a sample project description.",
      contents: "Detailed content about the project...",
      slug: "sample-project",
      tags: ["React", "Next.js"],
      date: "2023-01-15",
      githubUrl: "https://github.com/example",
      liveUrl: "https://example.com",
    },
    {
      id: "2",
      title: "Portfolio Website",
      image: "/projects/portfolio.jpg",
      description:
        "A responsive personal portfolio showcasing skills and projects with dark mode support.",
      slug: "portfolio-website",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      date: "2023-07-22",
      githubUrl: "https://github.com/yourusername/portfolio",
      liveUrl: "https://yourportfolio.example.com",
    },
    {
      id: "3",
      title: "School Management Portal",
      image: "/projects/school-portal.jpg",
      description:
        "Comprehensive system for student records, payments, and academic tracking.",
      slug: "school-portal",
      tags: ["React", "Firebase", "Material UI"],
      date: "2023-09-10",
      githubUrl: "https://github.com/yourusername/school-portal",
      liveUrl: "https://school-portal.example.com",
    },
    {
      id: "4",
      title: "Data Analytics Portfolio",
      image: "/projects/data-portfolio.jpg",
      description:
        "Interactive portfolio showcasing data analysis projects and visualizations.",
      slug: "data-analytics-portfolio",
      tags: ["Python", "Pandas", "Tableau", "Jupyter"],
      date: "2023-11-05",
      githubUrl: "https://github.com/yourusername/data-portfolio",
      liveUrl: "https://data-portfolio.example.com",
    },
  ];

  const project = mockProjects.find((p) => p.id === id);

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(project);
}
