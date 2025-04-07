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
              className="relative h-80 w-full perspective-1000 cursor-pointer group"
              onClick={() => {}}
            >
              {/* Front Side (Envelope) */}
              <div className="absolute inset-0 bg-white border-2 border-blue-100 rounded-xl p-6 shadow-md transition-all duration-500 transform-style-preserve-3d backface-hidden flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-xl"></div>
                <div className="flex-1 flex flex-col items-center justify-center pt-8">
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

              {/* Back Side (Details) */}
              <div className="absolute inset-0 bg-white rounded-xl p-6 shadow-lg transform-style-preserve-3d backface-hidden rotate-y-180 flex flex-col">
                <h3 className="text-xl font-bold text-blue-600">
                  {cert.title}
                </h3>
                <p className="text-gray-600 mt-2">Issued by {cert.issuer}</p>
                <div className="my-4 p-4 bg-gray-50 rounded">
                  <p className="text-gray-700">
                    {cert.description ||
                      "Professional certification demonstrating expertise in this area."}
                  </p>
                </div>
                <div className="mt-auto text-sm text-gray-500 space-y-1">
                  <p>Issued: {cert.date}</p>
                  {cert.credentialId && (
                    <p>Credential ID: {cert.credentialId}</p>
                  )}
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

      <style jsx global>{`
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
