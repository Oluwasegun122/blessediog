import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Faith Dasola Obajafa | Data Analyst & AI Specialist Portfolio",
  description:
    "Data professional specializing in Power BI dashboards, machine learning models (85% accuracy), and AI-powered HR solutions. Featured projects: Bank Churn Prediction, Rocket Launch Analytics, and Hotel Revenue Optimization.",
  keywords: [
    "data analyst",
    "Power BI",
    "machine learning",
    "AI solutions",
    "data visualization",
    "HR analytics",
    "portfolio",
  ],
  authors: [{ name: "Faith Dasola Obajafa" }],
  openGraph: {
    type: "website",
    url: "https://blessediog.vercel.app/", // Replace with your actual domain
    title: "Faith Obajafa | Data & AI Projects",
    description:
      "Explore data analysis projects and AI solutions by Faith Obajafa",
    // images: [
    //   {
    //     url: "https://yourportfolio.com/og-image.jpg", // Add an OpenGraph image
    //     width: 1200,
    //     height: 630,
    //     alt: "Faith Obajafa Portfolio Preview",
    //   }
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-200`}
      >
        <Header />
        <main className="min-h-screen">
          {" "}
          {/* Wrap content in <main> */}
          {children}
        </main>
      </body>
    </html>
  );
}
