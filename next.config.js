const path = require('path')
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.nostr.build',
        port: '',
        pathname: '/**',
      }
    ]
  },
  sassOptions: {
    includePaths: [path.join(`${__dirname}`, 'styles')],
  },
  swcMinify: true
};

module.exports = nextConfig;