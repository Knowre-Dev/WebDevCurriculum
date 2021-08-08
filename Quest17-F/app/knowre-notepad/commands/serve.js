const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./base.js');
const WebpackDevServer = require('webpack-dev-server');
const chalk = require('chalk');
const CONFIG = require('./config.js');
const { loadEnv } = require('./utils/loadenv.js');

const protocol = CONFIG.dev.protocol || 'http';
const host = CONFIG.dev.host || 'localhost';
const port = CONFIG.dev.port || 3000;

loadEnv();

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});

const devServerOptions = {
  historyApiFallback: {
    rewrites: [{ from: /./, to: '/index.html' }],
  },
  // devMiddleware: {
  //   publicPath: CONFIG.dev.publicPath,
  // },
  open: false,
  host: CONFIG.dev.host,
  port: CONFIG.dev.port,
  liveReload: true,
};

const compiler = webpack(webpackConfig);
const server = new WebpackDevServer(compiler, devServerOptions);

compiler.hooks.done.tap('serve', (stats) => {
  if (stats.hasErrors()) {
    return;
  }
  console.log();
  console.log();
  console.log(`App running at:`);
  console.log(`  - Local:   ${chalk.cyan(`${protocol}://${host}:${port}`)}`);
  console.log();
});

server.listen(port, host, (err) => {
  if (err) {
    process.exit(0);
  }
});
