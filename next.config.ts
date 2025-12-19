import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/greenscape-landscaping',
  assetPrefix: '/greenscape-landscaping',
};

export default nextConfig;
