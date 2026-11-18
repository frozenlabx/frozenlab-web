import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

// Support GitHub Pages subpath deployment (/frozenlab-web) while keeping local dev at root (/)
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : process.env.GITHUB_ACTIONS
      ? '/frozenlab-web'
      : '';

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
