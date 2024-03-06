/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/blog-example",
  output: "standalone",
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
