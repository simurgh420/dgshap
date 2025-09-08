import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Move outputFileTracingExcludes to root level (Next.js 15 change)
  outputFileTracingExcludes: {
    '*': [
      'node_modules/@swc/core-*/**/*',
      'node_modules/.pnpm/**/*',
      'node_modules/.cache/**/*',
      '**/Application Data/**',
      '**/AppData/**',
    ],
  },
  // Disable webpack file system access
  webpack: (config, { isServer }) => {
    config.watchOptions = {
      ignored: [
        '**/node_modules/**',
        '**/Application Data/**',
        '**/AppData/**',
        '**/.next/**',
      ],
    };
    return config;
  },
};

export default nextConfig;
