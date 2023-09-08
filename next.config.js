/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ["avatars.githubusercontent.com", "images.unsplash.com"],
    },
    // redirects() {
    //   return [
    //   ]
    // },
  }

module.exports = nextConfig
