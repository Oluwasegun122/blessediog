/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
};
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};
// add
export default nextConfig;
