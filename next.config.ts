import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/testimonials',
        destination: '/exams',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
