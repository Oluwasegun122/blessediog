"use client";
import Image from "next/image";
import { useState } from "react";

export default function Loading() {
  const [size, setSize] = useState("w-32 h-32"); // Default logo size
  const [speed, setSpeed] = useState("animate-spin-slow"); // Default animation speed

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center h-screen bg-white">
      <div className="relative flex items-center justify-center">
        {/* Rotating Circle */}
        <div
          className={`absolute w-36 h-36 border-4 border-gray-300 border-t-blue-500 rounded-full ${speed}`}
        />

        {/* Blinking Logo */}
        <Image
          src="/image/img.jpg"
          alt="Loading..."
          className={`rounded-full ${size} animate-pulse`}
        />
      </div>

      {/* Controls */}
      <div className="mt-6 space-x-4 flex">
        <button
          onClick={() => setSize("w-16 h-16")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Small
        </button>
        <button
          onClick={() => setSize("w-20 h-20")}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Medium
        </button>
        <button
          onClick={() => setSize("w-24 h-24")}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Large
        </button>

        {/* Speed Control Buttons */}
        <button
          onClick={() => setSpeed("animate-spin-slow")}
          className="px-4 py-2 bg-yellow-500 text-white rounded"
        >
          Slow
        </button>
        <button
          onClick={() => setSpeed("animate-spin")}
          className="px-4 py-2 bg-purple-500 text-white rounded"
        >
          Normal
        </button>
        <button
          onClick={() => setSpeed("animate-spin-fast")}
          className="px-4 py-2 bg-pink-500 text-white rounded"
        >
          Fast
        </button>
      </div>
    </div>
  );
}
