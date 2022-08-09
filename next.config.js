/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  }
}

module.exports = {  
  nextConfig,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
};
