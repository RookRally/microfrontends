import { NextFederationPlugin } from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "chessboard",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          lobby:
            "lobby@http://localhost:3001/_next/static/chunks/remoteEntry.js",
        },
        exposes: {
          "./Chessboard": "./src/pages/index.tsx",
        },
      }),
    );
    return config;
  },
};

export default nextConfig;
