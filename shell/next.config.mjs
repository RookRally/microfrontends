import NextFederationPlugin from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "container",
        remotes: {
          lobby:
            "lobby@http://localhost:3001/_next/static/chunks/remoteEntry.js",
          chessboard:
            "chessboard@http://localhost:3002/_next/static/chunks/remoteEntry.js",
          leave:
            "leave@http://localhost:3003/_next/static/chunks/remoteEntry.js",
          leaderboard:
            "leaderboard@http://localhost:3004/_next/static/chunks/remoteEntry.js",
          registration:
            "registration@http://localhost:3005/_next/static/chunks/remoteEntry.js",
          header:
            "header@http://localhost:3006/_next/static/chunks/remoteEntry.js",
        },
        filename: "static/chunks/remoteEntry.js",
      }),
    );
    return config;
  },
  async rewrites() {
    return [
      // Rewrite everything to `pages/index`
      {
        source: "/:any*",
        destination: "/",
      },
    ];
  },
};

export default nextConfig;
