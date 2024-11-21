/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    mdxRs: true,
    serverExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["img.clerk.com"],
  },
};

export default nextConfig;
