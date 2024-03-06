/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/blog-example",
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
