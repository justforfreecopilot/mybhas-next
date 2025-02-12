/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/vi/**',
      },
      {
        protocol: 'https',
        hostname: 'www.prudentmedia.in',
        port: '',
        pathname: '/uploads/dailynews/**',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;