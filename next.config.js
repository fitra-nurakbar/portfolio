/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fitra-nurakbar.vercel.app", "images.unsplash.com"],
    formats: ["image/webp", "image/avif"],
    loader: "default",
  },
  env: {
    EXCEL_URL: process.env.EXCEL_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    BASE_URL: process.env.BASE_URL
  }
};

module.exports = nextConfig;
