"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  fileUrl: string; // Can be PDF or image URL
  description: string;
  credentialId?: string;
  fileType: "pdf" | "image"; // New field to distinguish file types
}

const CertificateViewer = ({
  fileUrl,
  fileType,
}: {
  fileUrl: string;
  fileType: "pdf" | "image";
}) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  if (fileType === "pdf") {
    return (
      <div className="h-[750px] w-full">
        <Worker
          workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}
        >
          <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
        </Worker>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-full">
      <Image
        src={fileUrl}
        alt="Certificate"
        width={800}
        height={600}
        className="object-contain max-h-[750px]"
        quality={100}
      />
    </div>
  );
};

export default function CertificationsSection() {
  const [certs, setCerts] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  useEffect(() => {
    fetch("/api/certifications")
      .then((res) => res.json())
      .then((data: Certification[]) => {
        setCerts(data.slice(0, 3));
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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="block">My Certifications</span>
            <span className="block mt-2 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></span>
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {certs.map((cert) => (
            <div
              key={cert.id}
              className="relative h-96 w-full cursor-pointer group"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="absolute inset-0 bg-white border-2 border-blue-100 rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-blue-50 to-purple-50 transform origin-top -rotate-3 scale-x-105"></div>

                <div className="absolute inset-0 pt-16 pb-6 px-6 flex flex-col">
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="relative w-40 h-40 mb-6">
                      {cert.fileType === "pdf" ? (
                        <div className="flex items-center justify-center w-full h-full bg-gray-100 rounded-lg">
                          <svg
                            className="w-20 h-20 text-blue-500"
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
                        </div>
                      ) : (
                        <Image
                          src={cert.fileUrl}
                          alt={cert.title}
                          fill
                          className="object-contain"
                          quality={100}
                        />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-center text-gray-800">
                      {cert.title}
                    </h3>
                    <p className="text-gray-500 mt-2 text-sm">
                      Click to view certificate
                    </p>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/certifications"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all hover:from-blue-700 hover:to-purple-700"
          >
            View All Certifications
          </Link>
        </div>
      </div>

      {/* Unified Viewer Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white rounded-lg w-full max-w-6xl h-[90vh] overflow-hidden shadow-2xl flex flex-col"
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

            <div className="flex-1 overflow-auto">
              <CertificateViewer
                fileUrl={selectedCert.fileUrl}
                fileType={selectedCert.fileType}
              />
            </div>

            <div className="p-6 border-t">
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold">Issuer</h4>
                  <p className="text-gray-600">{selectedCert.issuer}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold">Description</h4>
                  <p className="text-gray-700 whitespace-pre-line">
                    {selectedCert.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold">Date Earned</h4>
                    <p className="text-gray-600">{selectedCert.date}</p>
                  </div>
                  {selectedCert.credentialId && (
                    <div>
                      <h4 className="text-lg font-semibold">Credential ID</h4>
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
