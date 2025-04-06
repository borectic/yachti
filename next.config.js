/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: [
      'jfsubxnjxmuuzyhcddmp.supabase.co',
      'images.unsplash.com'
    ],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig