/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'cdn.pixabay.com', 'pixabay.com']
  }
}

module.exports = nextConfig