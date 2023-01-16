/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['links.gainssupply.com', 'links.papareact.com'],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
