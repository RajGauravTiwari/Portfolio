/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
    ],
  },
  transpilePackages: ["three"],
  eslint: {
    // Do not block production builds on lint; lint is run separately via `npm run lint`.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
