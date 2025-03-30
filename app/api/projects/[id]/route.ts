import { NextRequest, NextResponse } from "next/server";

const projects: Record<
  string,
  { id: string; image: string; title: string; contents: string }
> = {
  "1": {
    id: "1",
    image: "/bessediogportfolio/images/project.jpg",
    title: "Project One",
    contents: "This is the content for Project One.",
  },
  "2": {
    id: "2",
    image: "/images/project.jpg",
    title: "Project Two",
    contents: "This is the content for Project Two.",
  },
};

// ✅ Fix: Handle `params` as a Promise
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> } // ✅ Treat `params` as a Promise
) {
  const { id } = await context.params; // ✅ Await the params

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  const project = projects[id];

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(project);
}
