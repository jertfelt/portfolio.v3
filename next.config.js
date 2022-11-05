/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {styledComponents: true},
    // i18n:{
  //   locales: ['sv'],
  //   defaultLocale: 'sv',
  // }
}

module.exports = nextConfig
