import { NextFederationPlugin } from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "registration",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Registration": "./src/pages/index.tsx",
        },
      }),
    );
    return config;
  },
};

export default nextConfig;
