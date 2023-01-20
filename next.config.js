/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['links.gainssupply.com', 'links.papareact.com', 'cdn.sanity.io'],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
