const { webpack } = require('next/dist/compiled/webpack/webpack')

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'avatars.dicebar.com',
          pathname: '**',
        },
      ],
    },
}

module.exports = nextConfig