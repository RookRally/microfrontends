import { NextFederationPlugin } from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "header",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Header": "./src/pages/index.tsx",
        },
      }),
    );
    return config;
  },
};

export default nextConfig;
