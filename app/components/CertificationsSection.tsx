"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PDFViewer from "./PDFViewer";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  credentialId?: string;
  fileType: "pdf" | "image"; // Changed from optional to required
}

export default function CertificationsSection() {
  const [certs, setCerts] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  useEffect(() => {
    fetch("/api/certifications")
      .then((res) => res.json())
      .then((data: Certification[]) => {
        const enhancedData = data.map((cert) => ({
          ...cert,
          // Auto-detect fileType if not provided by API
          fileType:
            cert.fileType || (cert.image.endsWith(".pdf") ? "pdf" : "image"),
        }));
        setCerts(enhancedData.slice(0, 10));
      })
      .catch((err) => console.error("Error fetching certifications:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-gray-200 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-32 bg-gray-200 rounded col-span-1"></div>
                <div className="h-32 bg-gray-200 rounded col-span-1"></div>
                <div className="h-32 bg-gray-200 rounded col-span-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="my-10 flex flex-col items-center">
          <h2 className="text-4xl font-extrabold tracking-wider uppercase text-gray-800 relative inline-block">
            Certifications
            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-1 w-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></span>
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {certs.map((cert) => (
            <div
              key={cert.id}
              className="relative h-80 w-full rounded-xl overflow-hidden shadow-lg group cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              {/* Certificate Background Image */}
              <div className="absolute inset-0">
                {cert.fileType === "pdf" ? (
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <div className="text-center p-6">
                      <svg
                        className="w-16 h-16 mx-auto text-blue-500 mb-4"
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
                      <span className="text-lg font-medium text-gray-700">
                        PDF Certificate
                      </span>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    quality={80}
                  />
                )}
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                <div className="flex justify-between text-sm">
                  <span>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center hidden">
          <Link
            href="/certifications"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all hover:from-blue-700 hover:to-purple-700"
          >
            View All Certifications
          </Link>
        </div>
      </div>
      {/* Expanded Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white rounded-lg w-full max-w-4xl h-[90vh] overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-3xl font-bold text-gray-800">
                {selectedCert.title}
              </h3>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 overflow-auto">
              {/* Large Certificate Image - Now Clickable */}
              <div
                className="relative w-full h-full min-h-[400px] cursor-zoom-in"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(selectedCert.image, "_blank");
                }}
              >
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain hover:opacity-90 transition-opacity"
                  quality={100}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
                    Click to view full size
                  </div>
                </div>
              </div>

              {/* Detailed Information */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold">Issuer</h4>
                  <p className="text-gray-600">{selectedCert.issuer}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xl font-semibold">Description</h4>
                  <p className="text-gray-700 whitespace-pre-line">
                    {selectedCert.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div>
                    <h4 className="text-lg font-medium">Date Earned</h4>
                    <p className="text-gray-600">{selectedCert.date}</p>
                  </div>
                  {selectedCert.credentialId && (
                    <div>
                      <h4 className="text-lg font-medium">Credential ID</h4>
                      <p className="text-gray-600">
                        {selectedCert.credentialId}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
