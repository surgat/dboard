const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new Dotenv({
      path: './.env.development',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './build',
    compress: false,
    host: '0.0.0.0',
    port: 8081,
    historyApiFallback: true,
    hot: true,
    // proxy: {
    //   '/api': {
    //     // target: 'https://invdb.d.sdn.sbrf.ru/',
    //     target: 'http://localhost:8080/',
    //     changeOrigin: true,
    //     secure: false,
    //   },
    // },
  },
};
