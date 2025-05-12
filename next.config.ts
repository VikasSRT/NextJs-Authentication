import type { NextConfig } from "next";

module.exports = {
  images: {
    domains: [
      "plus.unsplash.com",
      "media.istockphoto.com",
      "rickandmortyapi.com",
      "static.vecteezy.com",
      "covers.openlibrary.org",
    ], // Replace with your image domain
  },
};

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.tableau.com",
        port: "",
        pathname: "/sites/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
