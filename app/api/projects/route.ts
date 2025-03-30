import { NextResponse } from "next/server";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    image: "/images/project.jpg",
    description: "A full-fledged e-commerce website with payment integration.",
    slug: "ecommerce-website",
  },
  {
    id: 2,
    title: "Portfolio Website",
    image: "/images/project.jpg",
    description: "A personal portfolio showcasing skills and projects.",
    slug: "portfolio-website",
  },
  {
    id: 3,
    title: "School Portal",
    image: "/images/project.jpg",
    description: "A management system for student records and payments.",
    slug: "school-portal",
  },
];

export async function GET() {
  return NextResponse.json(projects);
}
