/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['object-to-array-convert']);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {styledComponents: true},
  i18n: {
    locales: ['en-US', 'fr', 'nl-NL'],
    defaultLocale: 'en-US',
  },
  
}

module.exports = nextConfig
