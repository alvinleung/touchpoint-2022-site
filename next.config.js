/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(frag|vert)$/,
      use: "raw-loader",
    });
    return config;
  },
};
