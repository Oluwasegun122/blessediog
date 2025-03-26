/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/blessediog",
  trailingSlash: true,
};
// add
export default nextConfig;
