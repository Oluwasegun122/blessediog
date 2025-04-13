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
  title: "Faith Dasola Obajafa Portfoilio",
  description:
    "Faith Obajafa | Data Solutions Portfolio. Featured projects: [Bank Churn Prediction (85% accuracy)], [AI HR Performance Dashboard], [Data Governance Framework]. Certified: Power BI, AWS Cloud, Generative AI. Transforming raw data into strategic decisions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-200`}
      >
        <Header />
        <div className=" top-0 scroll-m-0">{children}</div>
      </body>
    </html>
  );
}
