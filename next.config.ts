import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pulls the timestamp from your build command, or defaults to "v1"
  deploymentId: process.env.DEPLOYMENT_ID || "v1",
};

export default nextConfig;