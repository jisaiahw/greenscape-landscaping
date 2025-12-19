import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only set basePath for GitHub Pages deployment
  basePath: process.env.GITHUB_PAGES === 'true' ? '/greenscape-landscaping' : '',
  assetPrefix: process.env.GITHUB_PAGES === 'true' ? '/greenscape-landscaping' : '',
};

export default nextConfig;
