import type { NextConfig } from 'next';

/**
 * Next.js Configuration
 * - Prevents server-only modules like 'fs' from being bundled on the client
 * - Compatible with Tailwind, PostCSS, and TypeScript
 */
const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve?.fallback,
          fs: false,
          path: false,
          os: false,
        },
      };
    }
    return config;
  },
};

export default nextConfig;
