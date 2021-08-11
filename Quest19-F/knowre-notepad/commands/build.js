const webpack = require('webpack');
const rm = require('rimraf');
const CONFIG = require('./config.js');
const paths = require('./utils/paths.js');

const { error, done } = require('./utils/logger');
const { merge } = require('webpack-merge');

const baseWebpackConfig = require('./base.js');
const { loadEnv } = require('./utils/loadenv.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      linkType: false,
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1 + 1,
              esModule: true,
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1 + 1,
              esModule: true,
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
});

loadEnv();

rm(paths.resolve(CONFIG.outputDir), (err) => {
  if (err) throw err;

  webpack(webpackConfig, (err, stats) => {
    if (err) throw err;

    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
      }) + '\n\n',
    );

    if (stats.hasErrors()) {
      error('Build failed with errors.\n');
      process.exit(1);
    }
    done('Build complete.\n');
  });
});
