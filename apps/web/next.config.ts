import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@nutricoach/shared", "@nutricoach/types", "@nutricoach/ui"],
};

export default nextConfig;
