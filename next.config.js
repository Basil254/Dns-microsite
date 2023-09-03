/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig


module.exports = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.module.rules.push({
          test: /\.(pdf)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                publicPath: '/_next/static/files',  // Adjust the path as needed
                outputPath: 'static/files',  // Adjust the output path as needed
                name: '[name].[ext]',
              },
            },
          ],
        });
      }
      return config;
    },
  };
  