const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common,{
  mode: "development",
  devServer: {
    static: './dist',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
          test: /\.scss$/i,
          use:[
              {loader: 'css-loader', options: {sourceMap:true}},
              {loader: 'postcss-loader', options: {sourceMap:true}},
              {loader: 'sass-loader', options: {sourceMap:true}}
          ]
      }
    ]
  },
}
)