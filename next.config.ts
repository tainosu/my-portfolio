import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/my-portfolio",
  output: "export",
  images: { unoptimized: true } ,
};

export default nextConfig;
