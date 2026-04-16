import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://lh3.googleusercontent.com/**"),
      new URL("https://*.public.blob.vercel-storage.com/**"),
      new URL("https://*.blob.vercel-storage.com/**"),
    ],
  },
};

export default nextConfig;
