const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncWebpackPlugin = require('browser-sync-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const baseConfig = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: process.env.APP_ENV || 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: './index.html',
      inject: false,
    }),
    new CopyWebpackPlugin([
      {
        from: './index.html',
      }
    ]),
  ],
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
};

module.exports = (env, argv) => {
  baseConfig.devtool = 'source-map';
  baseConfig.plugins.push(new BrowserSyncWebpackPlugin({
    host: 'localhost',
    port: 3000,
    server: { baseDir: ['dist'] },
    open: false,
  }));

  baseConfig.watch = true;

  return baseConfig;
};
