/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    loader: "default",
    domains: ["fitra-nurakbar.vercel.app"],
  },
};

module.exports = nextConfig;
