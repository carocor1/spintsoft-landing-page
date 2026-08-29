import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  // Fully static site — export to `out/` for Cloudflare Pages (static assets,
  // no Worker runtime). Every route is prerendered.
  output: "export",
  basePath: isGithubPages ? "/spintsoft-landing-page" : "",
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: { unoptimized: true },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
