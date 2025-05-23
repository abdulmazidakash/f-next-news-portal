import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
    ignoreDuringBuilds: true, // 🔧 এই লাইনে build এর সময় lint error কে ignore করবে
  },
  /* config options here */
  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'www.themealdb.com',
      pathname: '/**',
    },
  ],
},

};

export default nextConfig;
