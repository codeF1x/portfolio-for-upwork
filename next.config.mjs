import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "images.unsplash.com",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "plus.unsplash.com",
  //     },
  //   ],
  // },
  reactCompiler: true,
  env: {
    NEXT_PUBLIC_GIT_SHA: process.env.GIT_SHA || "dev",
    NEXT_PUBLIC_BUILD_TIME: new Date().toISOString(),
  },
};

export default withNextIntl(nextConfig);
