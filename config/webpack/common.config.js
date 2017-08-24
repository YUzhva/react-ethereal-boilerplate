/* eslint-disable */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var rootPath = path.join(__dirname, '..', '..');
/* eslint-enable */

module.exports = {
  entry: [
    'babel-polyfill',
    path.join(rootPath, 'src/main.js'),
    path.join(rootPath, 'src/main.scss'),
  ],
  output: {
    path: path.join(rootPath, 'public'),
    filename: 'dist/scripts.js',
  },
  module: {
    rules: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            ['es2015', { modules: false }],
            'react',
          ],
        },
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      }, {
        test: /\.scss$/,
        exclude: /components/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader',
        }),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(rootPath, 'src/index.template.html'),
    }),
    new ExtractTextPlugin('dist/styles.css'),
  ],
};
