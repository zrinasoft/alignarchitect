import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export — outputs to ./out, hostable on any static file server.
  output: "export",
  // Emit /about/index.html style paths for portable static hosting.
  trailingSlash: true,
  // next/image optimization needs a server; disable it for static export.
  images: {
    unoptimized: true,
    // YouTube thumbnails for the case-showcase video cards.
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com" }],
  },
  // Pin the workspace root to this project (multiple lockfiles exist higher up).
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
