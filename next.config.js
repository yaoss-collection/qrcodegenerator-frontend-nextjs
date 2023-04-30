/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import("next").NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
    domains: ['api.site.fr', 'localhost'],
  },
  env: {
    api: process.env.BACKEND_URL,
    analyze: 'false',
  },
  experimental: {
    scrollRestoration: true,
  },
});
