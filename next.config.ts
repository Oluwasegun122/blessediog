import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  basePath: "/bessediog", // Replace with your GitHub repository name
  assetPrefix: "/bessediog/", // Required for assets to load correctly
};

export default nextConfig;
