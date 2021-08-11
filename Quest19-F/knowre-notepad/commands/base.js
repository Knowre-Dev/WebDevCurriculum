const paths = require('./utils/paths.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CONFIG = require('./config.js');
const Dotenv = require('dotenv-webpack');
const { DefinePlugin } = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const outputFileName = `js/[name]${isProd ? '.[contenthash:8]' : ''}.js`;

module.exports = {
  context: process.cwd(),
  entry: {
    app: './src/main.ts',
  },

  experiments: {
    asyncWebAssembly: true,
    syncWebAssembly: true,
  },
  output: {
    path: paths.resolve(CONFIG.outputDir),
    publicPath: CONFIG.dev.publicPath,
    filename: outputFileName,
    chunkFilename: outputFileName,
  },
  resolve: {
    alias: {
      '@': paths.resolve('src'),
    },
    fallback: {
      path: require.resolve('path-browserify'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue', '.json'],
  },
  //plugins
  plugins: [
    new Dotenv({ path: isProd ? '.env.prod' : '.env.dev' }),
    new DefinePlugin({
      BASE_URL: process.env.BASE_URL,
      NODE_ENV: process.env.NODE_ENV,
    }),
    new VueLoaderPlugin(),
    new CaseSensitivePathsPlugin(),
    new HtmlWebpackPlugin({
      template: paths.resolve('public/index.html'),
      minify: true,
      templateParameters: {
        title: 'Notepad',
        lang: 'ko-KR',
      },
    }),
    new CopyPlugin({
      patterns: [
        {
          from: paths.resolve('public'),
          toType: 'dir',
          globOptions: {
            ignore: ['.DS_Store', '**/index.html'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    new InjectManifest({
      swSrc: './src/service-worker.ts',
      swDest: 'service-worker.js',
    }),
  ],

  //modules
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,

    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },

      {
        test: /\.m?jsx?$/,
        exclude: (file) => {
          if (/\.vue\.jsx?$/.test(file)) {
            return false;
          }
          return /node_modules/.test(file);
        },
        use: ['thread-loader', 'babel-loader'],
      },

      // ts
      {
        test: /\.tsx?$/,
        use: [
          'thread-loader',
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: ['\\.vue$'],
              happyPackMode: true,
            },
          },
        ],
      },
      {
        test: /\.`wasm`$/,
        use: ['wasm-loader'],
      },
      // images
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        type: 'asset',
        generator: { filename: 'img/[contenthash:8][ext][query]' },
      },

      // do not base64-inline SVGs.
      // https://github.com/facebookincubator/create-react-app/pull/1180
      {
        test: /\.(svg)(\?.*)?$/,
        type: 'asset/resource',
        generator: { filename: 'img/[contenthash:8][ext][query]' },
      },

      // media
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset',
        generator: { filename: 'media/[contenthash:8][ext][query]' },
      },

      // fonts
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: 'asset',
        generator: { filename: 'fonts/[contenthash:8][ext][query]' },
      },
    ],
  },
};
