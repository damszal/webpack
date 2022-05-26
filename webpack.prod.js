const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common,{
  mode: "production",
  devtool: 'inline-source-map',
  plugins: [
    new MiniCssExtractPlugin(
      {
        filename: '[name].css'
      }
    )
  ],
  // =====>>>>>>> if i add code bellow, the build commend will generate error 
  // =====>>>>>>> now it has build new file main.js ??? do i need chaknge link in index.html ??
  // output: {
  //   filename: 'bundle.js',
  //   path: path.resolve(__dirname, 'dist'),
  // },
  module: {
    rules: [
      {
          test: /\.scss$/i,
          use:[{
            loader: MiniCssExtractPlugin.loader,
            //options: {
              //hmr: process.env.NODE_ENV === "development"
            //}
          },
              'css-loader',
              'postcss-loader',
              'sass-loader'
          ]
      }
    ]
  }
});