import { NextFederationPlugin } from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "leave",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Leave": "./src/pages/index.tsx",
        },
      }),
    );
    return config;
  },
};

export default nextConfig;