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
  // ... other projects
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
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
