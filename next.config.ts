import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use standalone output so the built app can run as a self-contained Node.js
  // process on SiteGround cPanel Node.js hosting (Phusion Passenger).
  output: "standalone",
  images: {
    // Disable Next.js image optimisation so images are served as-is.
    // Required when the server has no sharp/libvips and for static CDN delivery.
    unoptimized: true,
  },
};

export default nextConfig;
