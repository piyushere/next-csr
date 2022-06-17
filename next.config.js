const CompressionPlugin = require('compression-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  async exportPathMap(defaultPathMap) {
    // Next.JS export maps index page as [[...app]].html so remapping it to index.html
    const nextjsMatchAll = '/[[...app]]';
    // eslint-disable-next-line no-param-reassign
    delete defaultPathMap[nextjsMatchAll];
    return {
      ...defaultPathMap,
      '/': { page: nextjsMatchAll },
    };
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8000/api/:path*',
      },
    ];
  },
  webpack: (config, options) => {
    const { dev, isServer } = options;
    // only compress client assets in production mode.
    if (!dev && !isServer) config.plugins.push(new CompressionPlugin());
    return config;
  },
};

module.exports = nextConfig;
