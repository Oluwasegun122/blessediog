"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export default function CertificationsSection() {
  const [certs, setCerts] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/certifications")
      .then((res) => res.json())
      .then((data: Certification[]) => {
        // Only take up to three certifications
        setCerts(data.slice(0, 3));
      })
      .catch((err) => console.error("Error fetching certifications:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center">Loading Certifications...</p>;

  return (
    <section className="my-10 px-5">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-4xl font-extrabold tracking-wider uppercase text-gray-800 relative inline-block">
          Certifications
          <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-1 w-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></span>
        </h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certs.map((cert) => (
          <div key={cert.id} className="bg-white shadow-lg rounded-lg p-4">
            <div className="mb-4 flex justify-center">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-24 h-24 object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold text-center">{cert.title}</h3>
            <p className="text-gray-600 text-center">{cert.issuer}</p>
            <p className="text-gray-500 text-center">{cert.date}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/certifications">
          <a className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-all">
            View All Certifications
          </a>
        </Link>
      </div>
    </section>
  );
}
