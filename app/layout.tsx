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
  title: "Faith Dasola Obajafa | Data Analyst Portfolio",
  description:
    "Data professional specializing in Power BI dashboards, machine learning models, and data-driven solutions. Explore projects in banking, aerospace, and hospitality analytics.",
  keywords:
    "data analysis, Power BI, SQL, Python, data visualization, portfolio",
  authors: { name: "Faith Dasola Obajafa" },
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
        <main className="min-h-screen top-0">
          {" "}
          {/* Added padding for fixed header */}
          {children}
        </main>
      </body>
    </html>
  );
}
