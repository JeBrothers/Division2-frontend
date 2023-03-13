/** @type {import('next').NextConfig} */
const API_KEY = "991d8e7aeb3196b5c6a3abd3727942fe";

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "form",
        permanent: false,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};
