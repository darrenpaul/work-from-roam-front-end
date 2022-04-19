/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
    loader: 'imgix',
    path: 'https://images.unsplash.com',
  },
};

module.exports = nextConfig;
