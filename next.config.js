/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mongoURI: 'mongodb+srv://menma:Menma.atlas@menma.jdavibi.mongodb.net'
  }
}

module.exports = nextConfig
