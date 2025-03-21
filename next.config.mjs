/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    mdxRs: true,
    serverExternalPackages: ["mongoose"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
      {
        protocol: "http",
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;
