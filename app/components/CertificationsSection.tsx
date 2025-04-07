"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  credentialId?: string;
}

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
              className="relative h-80 w-full cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              {/* Envelope Design */}
              <div className="absolute inset-0 bg-white border-2 border-blue-100 rounded-lg shadow-md overflow-hidden">
                {/* Envelope Flap */}
                <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-r from-blue-50 to-purple-50 transform origin-top -rotate-2 scale-x-105"></div>

                {/* Envelope Body */}
                <div className="absolute inset-0 pt-12 pb-6 px-6 flex flex-col">
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="relative w-20 h-20 mb-4">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-center text-gray-800">
                      {cert.title}
                    </h3>
                    <p className="text-gray-500 mt-2 text-sm">Click to view</p>
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

      {/* Modal for Certificate Details */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-bold text-gray-800">
                {selectedCert.title}
              </h3>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <p className="text-gray-600 mt-2">
              Issued by {selectedCert.issuer}
            </p>

            <div className="my-4 p-4 bg-gray-50 rounded">
              <p className="text-gray-700">{selectedCert.description}</p>
            </div>

            <div className="mt-6 flex justify-center">
              <div className="relative w-32 h-32">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-500 space-y-1">
              <p>Issued: {selectedCert.date}</p>
              {selectedCert.credentialId && (
                <p>Credential ID: {selectedCert.credentialId}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
