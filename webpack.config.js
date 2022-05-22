const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: './src/index.js',
  devServer: {
    static: './dist',
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Development',
      }),
    new MiniCssExtractPlugin(
      {
        filename: '[name].css'
      }
    )
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
          test: /\.scss$/i,
          use:[{
            loader: MiniCssExtractPlugin.loader,
            options: {
              //hmr: process.env.NODE_ENV === "development"
            }
          },
              'css-loader',
              'postcss-loader',
              'sass-loader'
          ]
      }
    ]
  }
};