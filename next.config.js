const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const webpack = require("webpack");
const path = require("path");

module.exports = withPlugins([
  [withImages, {
    // Configure withImages to handle image files
    exclude: path.resolve(__dirname, 'assets/scss'),
    inlineImageLimit: 8192,
    esModule: true
  }]
], {
  // Next.js Sass options
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets/scss')],
  },
  // Custom webpack configuration
  webpack(config, options) {
    // Add module resolution paths
    config.resolve.modules.push(path.resolve("./"));
    
    // Add rule for handling image imports in SCSS files
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      include: path.resolve(__dirname, 'assets'),
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '/_next/static/images/',
            outputPath: 'static/images/'
          }
        }
      ]
    });
    
    return config;
  }
});
