import { NextResponse } from "next/server";

const certifications = [
  {
    id: 1,
    title: "Full-Stack Development Certification",
    issuer: "Coursera",
    date: "Jan 2023",
    image: "/images/cert1.jpg",
  },
  {
    id: 2,
    title: "Data Analysis Certification",
    issuer: "edX",
    date: "Mar 2023",
    image: "/images/cert2.jpg",
  },
  {
    id: 3,
    title: "UI/UX Design Certification",
    issuer: "Udemy",
    date: "May 2023",
    image: "/images/pro_img1.jpg",
  },
  // more certifications if needed...
];

export async function GET() {
  return NextResponse.json(certifications);
}
