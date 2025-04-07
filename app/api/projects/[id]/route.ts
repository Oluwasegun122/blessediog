import { NextResponse } from "next/server";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  slug: string;
  tags?: string[];
  date?: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Record<string, Project> = {
  "1": {
    id: 1,
    title: "E-Commerce Website",
    image: "/projects/ecommerce.jpg",
    description:
      "A full-fledged e-commerce website with payment integration and inventory management.",
    slug: "ecommerce-website",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    date: "2023-05-15",
    githubUrl: "https://github.com/yourusername/ecommerce-site",
    liveUrl: "https://ecommerce-demo.example.com",
  },
  "2": {
    id: 2,
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
  "3": {
    id: 3,
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
  "4": {
    id: 4,
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
};

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { error: "Project ID is required" },
        { status: 400 }
      );
    }

    const project = projects[id];

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
