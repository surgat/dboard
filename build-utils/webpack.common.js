/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: [path.resolve(__dirname, '../src/index.tsx')],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)/i,
        loader: 'url-loader',
        options: {
          limit: false,
          esModule: false,
        },
      },
      // {
      //   test: /\.(xlsx)/,
      //   loader: 'file-loader',
      //   options: {
      //     limit: 10000,
      //     esModule: false,
      //   },
      // },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: path.resolve(__dirname, '../tsconfig.json') })],
    mainFields: ['browser', 'main', 'module'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'InventoryDB',
      template: './src/index.html',
      favicon: './src/favicon.ico'
    }),
    // new MiniCssExtractPlugin(),
    // new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ru|en/),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          sourceMap: true,
        }
      }),
  //     new OptimizeCSSAssetsPlugin({
  //       cssProcessorOptions: {
  //         map: {
  //           inline: false,
  //         },
  //       },
  //     }),
    ],
  },
  output: {
    path: path.resolve(__dirname, '../', 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
};
