/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "danhons.cz",
        pathname: "/fotky/**",
      },
    ],
  },
};

export default nextConfig;