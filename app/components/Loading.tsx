"use client";
import { useState, useEffect } from "react";

type loading_values = {
  loading_value: string;
};

export default function Loading({ loading_value }: { loading_value: string }) {
  const [loadingText, setLoadingText] = useState(`Loading ${loading_value}`);

  useEffect(() => {
    // Cycle through different loading messages
    const messages = [
      "Crunching the numbers...",
      "Preparing visualizations...",
      "Almost there...",
      "Finalizing insights...",
    ];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % messages.length;
      setLoadingText(messages[i]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="relative flex items-center justify-center mb-8">
        {/* Animated circle - will always show */}
        <div className="absolute w-24 h-24 border-4 border-gray-200 border-t-blue-600 border-r-blue-600 rounded-full animate-spin-slow" />

        {/* Fallback icon when image is missing */}
        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </div>
      </div>

      <div className="text-center space-y-3">
        <h3 className="text-xl font-semibold text-gray-700 animate-pulse">
          {loadingText}
        </h3>

        {/* Moving progress bar */}
        <div className="w-64 bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="bg-blue-600 h-2 rounded-full animate-progress"
            style={{
              width: "0%",
              animation: "progress 2s ease-in-out infinite alternate",
            }}
          />
        </div>
      </div>

      {/* Add the animation keyframes in your global CSS */}
      <style jsx global>{`
        @keyframes progress {
          0% {
            width: 10%;
          }
          100% {
            width: 90%;
          }
        }
        .animate-progress {
          animation: progress 2s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
}
