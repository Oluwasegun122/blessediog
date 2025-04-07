// app/certifications/page.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import PDFViewer from "./PDFViewer";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  fileUrl: string;
  description: string;
  credentialId?: string;
  type: "pdf" | "image";
}

export default function CertificationsSection() {
  const [certs, setCerts] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  useEffect(() => {
    // Mock data - replace with your actual API call
    const mockData: Certification[] = [
      {
        id: 1,
        title: "Full-Stack Development",
        issuer: "Coursera",
        date: "Jan 2023",
        fileUrl: "FAITH OBAJAFA CERT.pdf",
        description: "Certified in modern web development technologies",
        type: "pdf",
      },
      {
        id: 2,
        title: "Data Analysis",
        issuer: "Coursera",
        date: "Mar 2023",
        fileUrl: "/certificates/data.jpg",
        description: "Certified in data analysis techniques",
        type: "image",
      },
    ];

    setCerts(mockData);
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedCert(cert)}
            >
              {cert.type === "pdf" ? (
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-4">
                    <svg
                      className="w-12 h-12 mx-auto text-blue-500 mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <h3 className="font-bold">{cert.title}</h3>
                  </div>
                </div>
              ) : (
                <div className="h-48 relative">
                  <Image
                    src={cert.fileUrl}
                    alt={cert.title}
                    fill
                    className="object-cover"
                    quality={80}
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="font-bold">{cert.title}</h3>
                <p className="text-sm text-gray-600">{cert.issuer}</p>
                <p className="text-sm text-gray-500">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-6xl h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-bold">{selectedCert.title}</h3>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-auto">
              <PDFViewer
                fileUrl={selectedCert.fileUrl}
                type={selectedCert.type}
              />
            </div>
            <div className="p-4 border-t">
              <p className="font-semibold">Issued by: {selectedCert.issuer}</p>
              <p>Date: {selectedCert.date}</p>
              {selectedCert.credentialId && (
                <p>Credential ID: {selectedCert.credentialId}</p>
              )}
              <p className="mt-2">{selectedCert.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
