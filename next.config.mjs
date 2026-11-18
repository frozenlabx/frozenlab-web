import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

// Root domain deployment (https://frozenlab.dev) uses empty basePath.
// Only set NEXT_PUBLIC_BASE_PATH if deploying to a subpath.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  trailingSlash: false,
};

export default withMDX(nextConfig);
