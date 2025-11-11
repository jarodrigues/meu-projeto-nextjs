import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    // Api routes
    "/api/**/*": ["./node_modules/.prisma/client/**/*"],
    // server components / server actions
    "/*": ["./node_modules/.prisma/client/**/*"],
  },
};

export default nextConfig;
